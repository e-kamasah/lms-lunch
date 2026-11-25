resource "aws_ecr_repository" "lms_app" {
  name                 = "lms-app"
  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }
}