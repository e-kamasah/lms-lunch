
module "ec2_iam" {
  source = "../../modules/iam"

  role_name = "lms-dev-ec2-role"
}

module "vpc" {
  source = "../../modules/vpc"

  vpc_name           = "lms-dev-vpc"
  vpc_cidr           = "10.0.0.0/16"
  public_subnet_cidr = "10.0.1.0/24"
  availability_zone  = "us-east-1a"
}

module "security_group" {
  source = "../../modules/security_group"

  security_group_name = "lms-dev-sg"
  vpc_id              = module.vpc.vpc_id
}

data "aws_ssm_parameter" "amazon_linux_2023" {
  name = "/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64"
}

data "aws_ecr_repository" "lms_app" {
  name = "lms-app"
}

module "ec2" {
  source = "../../modules/ec2"

  instance_name         = "lms-dev-ec2"
  instance_type         = "t3.micro"
  ami_id                = data.aws_ssm_parameter.amazon_linux_2023.value
  subnet_id             = module.vpc.public_subnet_id
  security_group_id     = module.security_group.security_group_id
  instance_profile_name = module.ec2_iam.instance_profile_name

}
