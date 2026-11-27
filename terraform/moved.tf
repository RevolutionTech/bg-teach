moved {
  from = module.simple-static-website.aws_iam_role.ci
  to   = aws_iam_role.ci
}

moved {
  from = module.simple-static-website.aws_iam_policy.s3_rw
  to   = aws_iam_policy.s3_rw
}

moved {
  from = module.simple-static-website.aws_iam_role_policy_attachment.ci_s3_rw_attachment
  to   = aws_iam_role_policy_attachment.ci_s3_rw_attachment
}

moved {
  from = module.simple-static-website.aws_acm_certificate.static_website
  to   = aws_acm_certificate.static_website
}

moved {
  from = module.simple-static-website.aws_cloudfront_origin_access_identity.static_website
  to   = aws_cloudfront_origin_access_identity.static_website
}

moved {
  from = module.simple-static-website.aws_cloudfront_distribution.static_website
  to   = aws_cloudfront_distribution.static_website
}

moved {
  from = module.simple-static-website.aws_s3_bucket.static_website
  to   = aws_s3_bucket.static_website
}

moved {
  from = module.simple-static-website.aws_s3_bucket_policy.static_website_read
  to   = aws_s3_bucket_policy.static_website_read
}

moved {
  from = module.simple-static-website.aws_s3_bucket_website_configuration.static_website
  to   = aws_s3_bucket_website_configuration.static_website
}
