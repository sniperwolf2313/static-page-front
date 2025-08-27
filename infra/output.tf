output "bucket_name" {
  value       = aws_s3_bucket.site.bucket
  description = "Nombre del bucket creado"
}

output "bucket_arn" {
  value       = aws_s3_bucket.site.arn
  description = "ARN del bucket creado"
}
