[![ci](https://github.com/Humanitec-DemoOrg/azure-reference-architecture/actions/workflows/ci.yaml/badge.svg)](https://github.com/Humanitec-DemoOrg/azure-reference-architecture/actions/workflows/ci.yaml)

# bank-demo-infra

Snippets for the first draft of the Azure Reference Architecture.

ToC:
<!-- - [AKS in Azure](#aks-in-azure)
- [GitHub Actions](#github-actions)
- [AKS in Humanitec](#aks-in-humanitec)
- [In-cluster MySQL database](#in-cluster-mysql-database)
- [Terraform Driver resources](#terraform-driver-resources)
  - [Azure Blob Storage](#azure-blob-storage)
  - [Azure MySQL](#azure-mysql)
 -->

Tools needed:
- `eksctl`
- `yq`
- `jq`
- `helm`
- `gh`
- `curl`

Roles needed:
- `Application Administrator`
- `Application Developer`

```bash
export HUMANITEC_ORG=FIXME
export GITHUB_ORG=FIXME

export AWS_ACCESS_KEY_ID=FIXME
export AWS_SECRET_ACCESS_KEY=FIXME
export AWS_DEFAULT_REGION=FIXME
```

## AKS in Azure

```bash
CLUSTER_NAME=bank-demo
eksctl create cluster --name ${CLUSTER_NAME}
```

```bash
eksctl utils write-kubeconfig --cluster=${CLUSTER_NAME}

```



```bash
helm repo add nginx-stable https://helm.nginx.com/stable
helm repo update
helm upgrade --install ingress-nginx ingress-nginx \
             --repo https://kubernetes.github.io/ingress-nginx \
             --namespace ingress-nginx --create-namespace
```


```bash
ACR_NAME=containers$(shuf -i 1000-9999 -n 1)
ACR_ID=$(az acr create \
    -g ${RESOURCE_GROUP} \
    -n ${ACR_NAME} \
    -l ${LOCATION} \
    --sku basic \
    --query id \
    -o tsv)
```

```bash
az aks update \
    -n ${CLUSTER_NAME} \
    -g ${RESOURCE_GROUP}\
    --attach-acr ${ACR_ID}
```

## GitHub Actions

```bash
ACR_PUSH_SP_NAME=github-to-${ACR_NAME}
ACR_PUSH_SP_CREDENTIALS=$(az ad sp create-for-rbac \
    -n ${ACR_PUSH_SP_NAME})
ACR_PUSH_SP_ID=$(echo ${ACR_PUSH_SP_CREDENTIALS} | jq -r .appId)
az role assignment create \
    --role acrpush \
    --assignee ${ACR_PUSH_SP_ID} \
    --scope ${ACR_ID}
ACR_PUSH_SP_PASSWORD=$(echo ${ACR_PUSH_SP_CREDENTIALS} | jq -r .password)
```

```bash
gh secret set ACR_PUSH_SP_ID -b"${ACR_PUSH_SP_ID}" -o ${GITHUB_ORG}
gh secret set ACR_PUSH_SP_PASSWORD -b"${ACR_PUSH_SP_PASSWORD}" -o ${GITHUB_ORG}
gh secret set ACR_SERVER_NAME -b"${ACR_NAME}.azurecr.io" -o ${GITHUB_ORG}
```

Then the GitHub Actions needs to be updated to include this step to push the container images in ACR:
```yaml
echo "${{ secrets.ACR_PUSH_SP_PASSWORD }}" | docker login \
        ${{ secrets.ACR_SERVER_NAME }} \
        -u ${{ secrets.ACR_PUSH_SP_ID }} \
        --password-stdin
```

## EKS in Humanitec

https://developer.humanitec.com/integration-and-extensions/containerization/kubernetes/#connect-the-cluster-to-humanitec

<!-- ```bash
HUMANITEC_TOKEN=FIXME
HUMANITEC_ENVIRONMENT=development

cat <<EOF > ${CLUSTER_NAME}.yaml
id: ${CLUSTER_NAME}
name: ${CLUSTER_NAME}
type: k8s-cluster
driver_type: humanitec/k8s-cluster-eks
driver_inputs:
  values:
    loadbalancer: ${INGRESS_IP}
    name: ${CLUSTER_NAME}
    resource_group: ${RESOURCE_GROUP}
    subscription_id: ${AZURE_SUBSCRIPTION_ID}
  secrets:
    credentials: ${AKS_ADMIN_SP_CREDENTIALS}
criteria:
  - env_id: ${HUMANITEC_ENVIRONMENT}
EOF

yq -o json ${CLUSTER_NAME}.yaml > ${CLUSTER_NAME}.json
curl "https://api.humanitec.io/orgs/${HUMANITEC_ORG}/resources/defs" \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${HUMANITEC_TOKEN}" \
    -d @${CLUSTER_NAME}.json
``` -->

## In-cluster MySQL database

```bash
yq -o json resources/mysql-incluster-resource.yaml > resources/mysql-incluster-resource.json
curl "https://api.humanitec.io/orgs/${HUMANITEC_ORG}/resources/defs" \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${HUMANITEC_TOKEN}" \
    -d @resources/mysql-incluster-resource.json
```

<!-- ## Terraform Driver resources

```bash
TERRAFORM_CONTRIBUTOR_SP_NAME=humanitec-terraform
TERRAFORM_CONTRIBUTOR_SP_CREDENTIALS=$(az ad sp create-for-rbac \
    -n ${TERRAFORM_CONTRIBUTOR_SP_NAME})
TERRAFORM_CONTRIBUTOR_SP_ID=$(echo ${TERRAFORM_CONTRIBUTOR_SP_CREDENTIALS} | jq -r .appId)
TERRAFORM_CONTRIBUTOR_SP_PASSWORD=$(echo ${TERRAFORM_CONTRIBUTOR_SP_CREDENTIALS} | jq -r .password)
az role assignment create \
    --role "Contributor" \
    --assignee ${TERRAFORM_CONTRIBUTOR_SP_ID} \
    --scope "/subscriptions/${AZURE_SUBSCRIPTION_ID}"
```

### Azure Blob Storage

```bash
cat <<EOF > azure-blob-terraform.yaml
id: azure-blob-terraform
name: azure-blob-terraform
type: azure-blob
driver_type: humanitec/terraform
driver_inputs:
  values:
    source:
      path: resources/terraform/azure-blob/
      rev: refs/heads/main
      url: https://github.com/Humanitec-DemoOrg/azure-reference-architecture.git
    variables:
      storage_account_location: ${LOCATION}
      resource_group_name: ${RESOURCE_GROUP}
  secrets:
    variables:
      credentials:
        azure_subscription_id: ${AZURE_SUBSCRIPTION_ID}
        azure_subscription_tenant_id: ${AZURE_SUBSCRIPTION_TENANT_ID}
        service_principal_id: ${TERRAFORM_CONTRIBUTOR_SP_ID}
        service_principal_password: ${TERRAFORM_CONTRIBUTOR_SP_PASSWORD}
EOF

yq -o json azure-blob-terraform.yaml > azure-blob-terraform.json
curl "https://api.humanitec.io/orgs/${HUMANITEC_ORG}/resources/defs" \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${HUMANITEC_TOKEN}" \
    -d @azure-blob-terraform.json
```

### Azure MySQL

```bash
cat <<EOF > azure-mysql-terraform.yaml
id: azure-mysql-terraform
name: azure-mysql-terraform
type: azure-mysql
driver_type: humanitec/terraform
driver_inputs:
  values:
    source:
      path: resources/terraform/azure-mysql/
      rev: refs/heads/main
      url: https://github.com/Humanitec-DemoOrg/azure-reference-architecture.git
    variables:
      mysql_server_location: ${LOCATION}
      resource_group_name: ${RESOURCE_GROUP}
  secrets:
    variables:
      credentials:
        azure_subscription_id: ${AZURE_SUBSCRIPTION_ID}
        azure_subscription_tenant_id: ${AZURE_SUBSCRIPTION_TENANT_ID}
        service_principal_id: ${TERRAFORM_CONTRIBUTOR_SP_ID}
        service_principal_password: ${TERRAFORM_CONTRIBUTOR_SP_PASSWORD}
EOF

yq -o json azure-mysql-terraform.yaml > azure-mysql-terraform.json
curl "https://api.humanitec.io/orgs/${HUMANITEC_ORG}/resources/defs" \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${HUMANITEC_TOKEN}" \
    -d @azure-mysql-terraform.json
``` -->