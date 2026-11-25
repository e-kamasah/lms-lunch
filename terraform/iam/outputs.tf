output "ec2_iam_role_name" {
  description = "IAM role assigned to the LMS EC2 instance"
  value       = aws_iam_role.ec2_ecr_role.name
}