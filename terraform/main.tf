terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "us-east-1"
}

locals {
  domain_name = "bgteach.revolutiontech.ca"
  github_org  = "RevolutionTech"
  github_repo = "bg-teach"
  error_page  = "index.html"

  tags = {
    Tool = "terraform"
    Repo = "RevolutionTech/bg-teach"
    Env  = "prod"
  }
}
