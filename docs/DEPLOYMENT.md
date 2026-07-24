# Deployment Guide

## Prerequisites

- Docker & Docker Compose
- PostgreSQL 12+
- Redis 6+
- Node.js 16+

## Production Deployment

### Using Docker Compose

```bash
# Build images
docker-compose -f docker-compose.prod.yml build

# Start services
docker-compose -f docker-compose.prod.yml up -d

# Check logs
docker-compose logs -f app

# Stop services
docker-compose -f docker-compose.prod.yml down
```

### Using PM2

```bash
# Install PM2 globally
npm install -g pm2

# Start application
pm2 start src/index.js --name "appsmonitorimd" --instances max

# Create startup script
pm2 startup
pm2 save

# Monitor
pm2 monit
```

### Environment Setup

Copy `.env.example` to `.env` dan setup nilai production:

```bash
cp .env.example .env
```

Update variables:

```
NODE_ENV=production
DB_HOST=your_db_host
DB_PASSWORD=strong_password
JWT_SECRET=very_long_random_string
```

## Database Migration

```bash
# Run migrations
npm run migrate

# Seed initial data
npm run seed
```

## SSL/TLS Configuration

Setup reverse proxy dengan Nginx:

```nginx
server {
    listen 443 ssl http2;
    server_name monitoring.example.com;

    ssl_certificate /etc/ssl/certs/cert.pem;
    ssl_certificate_key /etc/ssl/private/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## Monitoring & Logs

### Log Files

```bash
# Docker logs
docker-compose logs -f app

# PM2 logs
pm2 logs
```

### Health Checks

```bash
curl http://localhost:3000/health
```

## Backup Strategy

```bash
# Database backup
pg_dump -U postgres appsmonitorimd > backup.sql

# Restore
psql -U postgres appsmonitorimd < backup.sql
```

## Scaling

### Horizontal Scaling

- Deploy multiple instances
- Use load balancer (Nginx, HAProxy)
- Shared database dan Redis

### Vertical Scaling

- Increase server resources
- Optimize database queries
- Configure Redis maxmemory policy
