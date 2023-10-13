[![ci](https://github.com/Humanitec-DemoOrg/azure-reference-architecture/actions/workflows/ci.yaml/badge.svg)](https://github.com/Humanitec-DemoOrg/azure-reference-architecture/actions/workflows/ci.yaml)

# bank-demo-infra

Tools needed:
- `eksctl`
- `yq`
- `jq`
- `helm`
- `gh`
- `curl`


```bash
export HUMANITEC_ORG=FIXME
export GITHUB_ORG=FIXME

export AWS_ACCESS_KEY_ID=FIXME
export AWS_SECRET_ACCESS_KEY=FIXME
export AWS_DEFAULT_REGION=FIXME
```

## EKS in AWS

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

## EKS in Humanitec

https://developer.humanitec.com/integration-and-extensions/containerization/kubernetes/#connect-the-cluster-to-humanitec


## In-cluster MySQL database

```bash
yq -o json resources/mysql-incluster-resource.yaml > resources/mysql-incluster-resource.json
curl "https://api.humanitec.io/orgs/${HUMANITEC_ORG}/resources/defs" \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${HUMANITEC_TOKEN}" \
    -d @resources/mysql-incluster-resource.json
```