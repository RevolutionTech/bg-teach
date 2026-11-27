output "s3_bucket" {
  value = aws_s3_bucket.static_website.id
}

output "ci_role_arn" {
  value = aws_iam_role.ci.arn
}

output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.static_website.domain_name
}
