output "ecr_repository_url" {
  description = "URL of the shared LMS ECR repository"
  value       = module.ecr.repository_url
}