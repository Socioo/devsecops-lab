# DevSecOps CI/CD Pipeline Lab

## Overview
This project demonstrates a complete DevSecOps CI/CD pipeline with:
- **Security Scanning** (SAST, DAST, Secrets Detection)
- **Docker Multi-stage Builds**
- **Kubernetes Deployment**
- **GitHub Actions Automation**
- **Monitoring and Observability**

## Architecture
┌─────────────────────────────────────────────────────────────┐
│ GitHub Repository                                           │
└─────────────────┬───────────────────────────────────────────┘
│ (Push/PR Triggers)
▼
┌─────────────────────────────────────────────────────────────┐
│ GitHub Actions Pipeline                                     │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ │ Security │ │ SAST     │ │ Lint &   │ │ Build &  │         │
│ │ Scanning │ │ Analysis │ │ Test     │ │ Push     │         │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
└─────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Docker Registry                                             │
│ (Docker Hub)                                                │
└─────────────────────────────────────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Kubernetes Cluster                                          │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐                      │
│ │Deployment│ │ Service  │ │ Ingress  │                      │
│ └──────────┘ └──────────┘ └──────────┘                      │
└─────────────────────────────────────────────────────────────┘

## Tools Used
- **Version Control**: Git & GitHub
- **CI/CD**: GitHub Actions
- **Containerization**: Docker & Docker Compose
- **Orchestration**: Kubernetes (Minikube)
- **Security**: Trivy, SonarQube, TruffleHog
- **Code Quality**: ESLint, Jest
- **Monitoring**: Built-in health checks

## Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+
- Git
- Kubernetes CLI (kubectl)

### Local Development
```bash
# Clone repository
git clone https://github.com/your-username/devsecops-lab.git
cd devsecops-lab

# Install dependencies
npm install

# Run locally
npm start

# Run with Docker
docker-compose up --build


# Run tests
npm test


