IMAGE_REGISTRY ?= registry.humanitec.io/public
HUMANITEC_APP_ID ?= bank-demo

### Local

# Build all required images
build:
	docker compose build

# List images
show-images:
	docker images | grep $(IMAGE_REGISTRY)

# Push images to the registry
push:
	docker compose push

### Score

# Update score image references
update-image-references:
	yq e -i ".containers.frontend.image = \"$(IMAGE_REGISTRY)/bank-demo-frontend\"" frontend/score.yaml
	yq e -i ".containers.moneyapi.image = \"$(IMAGE_REGISTRY)/bank-demo-money-api\"" money-api/score.yaml
	yq e -i ".containers.usersapi.image = \"$(IMAGE_REGISTRY)/bank-demo-users-api\"" users-api/score.yaml
	yq e -i ".containers.reportworker.image = \"$(IMAGE_REGISTRY)/bank-demo-report-worker\"" report-worker/score.yaml

# Use postgres as a database
use-postgres:
	yq e -i ".containers.moneyapi.variables.DB_TYPE = \"postgres\"" money-api/score.yaml
	yq e -i ".resources.db.type = \"postgres\"" money-api/score.yaml

# Deploy the base services: frontend, money-api, users-api
deploy-base:
	$(eval DELTA_ID := $(shell score-humanitec delta -f frontend/score.yaml --extensions frontend/humanitec.score.yaml --app $(HUMANITEC_APP_ID) --env development --org "$(HUMANITEC_ORG_ID)" --token "$(HUMANITEC_TOKEN)" | jq -r .id))
	score-humanitec delta -f money-api/score.yaml --app $(HUMANITEC_APP_ID) --env development --org "$(HUMANITEC_ORG_ID)" --token "$(HUMANITEC_TOKEN)" --delta $(DELTA_ID)
	score-humanitec delta -f users-api/score.yaml --app $(HUMANITEC_APP_ID) --env development --org "$(HUMANITEC_ORG_ID)" --token "$(HUMANITEC_TOKEN)" --delta $(DELTA_ID) --deploy --retry
