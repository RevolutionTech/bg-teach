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

module "simple-static-website" {
  source = "git@github.com:RevolutionTech/opstrich.git//terraform/modules/simple-static-website?ref=e6c2d3efb1915f30d2bccb3c2b4c57804a062875"

  github_repo = "bg-teach"
  domain_name = "bgteach.revolutiontech.ca"

  tags = {
    Tool = "terraform"
    Repo = "RevolutionTech/bg-teach"
    Env  = "prod"
  }
}
