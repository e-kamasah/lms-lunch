output "ec2_iam_role_name" {
  description = "IAM role for the Dev EC2 instance"
  value       = module.ec2_iam.role_name
}

output "ec2_instance_profile_name" {
  description = "Instance profile for the Dev EC2 instance"
  value       = module.ec2_iam.instance_profile_name
}

output "vpc_id" {
  description = "ID of the Dev VPC"
  value       = module.vpc.vpc_id
}

output "dev_public_subnet_id" {
  description = "ID of the Dev public subnet"
  value       = module.vpc.public_subnet_id
}

output "dev_security_group_id" {
  description = "ID of the Dev EC2 security group"
  value       = module.security_group.security_group_id
}

output "dev_ec2_instance_id" {
  description = "ID of the Dev EC2 instance"
  value       = module.ec2.instance_id
}

output "dev_ec2_public_ip" {
  description = "Public IP of the Dev EC2 instance"
  value       = module.ec2.public_ip
}

output "dev_ec2_public_dns" {
  description = "Public DNS of the Dev EC2 instance"
  value       = module.ec2.public_dns
}