#!/bin/bash
set -euo pipefail

# Update system packages
dnf update -y

# Install Docker and AWS CLI
dnf install docker awscli -y

# Start and enable Docker
systemctl enable --now docker