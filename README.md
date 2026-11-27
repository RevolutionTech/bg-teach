# BG Teach

#### Notes for teaching board games.

![CI](https://github.com/RevolutionTech/bg-teach/actions/workflows/ci.yml/badge.svg)

## Infrastructure

`terraform/` defines the AWS hosting: a private S3 bucket behind CloudFront, an ACM certificate for `bgteach.revolutiontech.ca`, and an IAM role that GitHub Actions assumes to upload the site.

The Terraform state is local and is not in git. Run Terraform from the checkout that has `terraform/terraform.tfstate`:

```sh
cd terraform
terraform init
terraform plan
terraform apply
```

The `s3_bucket` and `ci_role_arn` outputs are the values of the `S3_BUCKET` and `IAM_ROLE_ARN` variables in the `prod` GitHub environment. DNS is not managed here: the certificate validation record and the CNAME to the CloudFront domain are set at the DNS provider.
