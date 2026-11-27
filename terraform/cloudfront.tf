resource "aws_acm_certificate" "static_website" {
  domain_name       = local.domain_name
  validation_method = "DNS"

  tags = local.tags
}

resource "aws_cloudfront_origin_access_identity" "static_website" {
  comment = "OAI for ${local.domain_name}"
}

resource "aws_cloudfront_origin_access_control" "static_website" {
  name                              = local.domain_name
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

resource "aws_cloudfront_distribution" "static_website" {
  enabled             = true
  aliases             = [local.domain_name]
  default_root_object = "index.html"
  origin {
    domain_name              = aws_s3_bucket.static_website.bucket_regional_domain_name
    origin_id                = local.domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.static_website.id
  }
  custom_error_response {
    error_code         = 403
    response_code      = 404
    response_page_path = "/${local.error_page}"
  }
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = aws_s3_bucket.static_website.id
    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6" # CachingOptimized cache policy
  }
  ordered_cache_behavior {
    path_pattern           = "index.html"
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD", "OPTIONS"]
    target_origin_id       = aws_s3_bucket.static_website.id
    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = "4135ea2d-6df8-44a3-9df3-4b5a84be39ad" # CachingDisabled cache policy
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.static_website.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2018"
  }

  tags = local.tags
}
