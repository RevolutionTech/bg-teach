resource "aws_s3_bucket" "static_website" {
  bucket = local.domain_name

  tags = local.tags
}

resource "aws_s3_bucket_policy" "static_website_read" {
  bucket = local.domain_name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action   = "s3:GetObject"
        Effect   = "Allow"
        Resource = "${aws_s3_bucket.static_website.arn}/*"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.static_website.arn
          }
        }
      }
    ]
  })
}
