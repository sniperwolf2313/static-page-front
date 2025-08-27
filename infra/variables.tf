variable "project" {
  description = "Prefijo para el nombre del bucket"
  type        = string
}

variable "aws_region" {
  description = "Región AWS"
  type        = string
  default     = "us-east-1"
}
