# Installation Guide

## System Requirements

### Minimum
- CPU: 2 cores
- RAM: 2GB
- Storage: 10GB
- OS: Linux, macOS, or Windows (with WSL2)

### Recommended
- CPU: 4+ cores
- RAM: 4GB+
- Storage: 50GB+

## Step 1: Prerequisites

### Install Node.js

```bash
# macOS (using Homebrew)
brew install node@18

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Windows
# Download from https://nodejs.org/
```

### Install Docker

```bash
# macOS
brew install docker docker-compose

# Ubuntu/Debian
sudo apt-get install docker.io docker-compose

# Windows
# Download Docker Desktop from https://www.docker.com/products/docker-desktop
```

## Step 2: Clone Repository

```bash
git clone https://github.com/imedinproduksi/appsmonitorimd.git
cd appsmonitorimd
```

## Step 3: Install Dependencies

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

## Step 4: Configure Environment

```bash
cp .env.example .env
```

Edit `.env` dengan editor favorit:

```bash
vi .env
```

## Step 5: Start Services

### Option A: Using Docker Compose

```bash
docker-compose up -d
```

Services akan tersedia di:
- App: http://localhost:3000
- PostgreSQL: localhost:5432
- Redis: localhost:6379

### Option B: Manual Setup

#### Start PostgreSQL

```bash
# macOS
brew services start postgresql

# Ubuntu/Debian
sudo systemctl start postgresql

# Or run in Docker
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 \
  postgres:15-alpine
```

#### Start Redis

```bash
# macOS
brew services start redis

# Ubuntu/Debian
sudo systemctl start redis

# Or run in Docker
docker run -d \
  --name redis \
  -p 6379:6379 \
  redis:7-alpine
```

#### Start Application

```bash
npm run dev
```

## Step 6: Verify Installation

```bash
# Check health
curl http://localhost:3000/health

# Check API
curl http://localhost:3000/api/v1
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Database Connection Error

Verifikasi `.env` file:
```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=appsmonitorimd
DB_USER=postgres
DB_PASSWORD=password
```

### Dependencies Installation Issue

```bash
# Clear cache
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

## Next Steps

- Read [API Documentation](./API.md)
- Check [Architecture Guide](./ARCHITECTURE.md)
- Review [Deployment Guide](./DEPLOYMENT.md)
