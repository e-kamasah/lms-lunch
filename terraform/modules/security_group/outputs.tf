output "security_group_id" {
  description = "ID of the LMS EC2 security group"
  value       = aws_security_group.this.id
}