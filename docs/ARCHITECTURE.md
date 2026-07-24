# Arsitektur Apps Monitoring MD

## Overview

Apps Monitoring MD dibangun dengan arsitektur modern yang terdiri dari:

- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL
- **Cache**: Redis
- **Frontend**: React/Vue (upcoming)

## Layer Diagram

```
┌─────────────────────┐
│   Client (Web)      │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│   Frontend (React)  │
└──────────┬──────────┘
           │
┌──────────▼──────────┐
│   REST API Gateway  │
│  (Express.js)       │
└──────────┬──────────┘
           │
    ┌──────┴──────┬──────────┐
    │             │          │
┌───▼───┐  ┌─────▼────┐  ┌──▼───────┐
│ Auth  │  │ Monitor  │  │ Analytics│
│Service│  │ Service  │  │ Service  │
└───┬───┘  └─────┬────┘  └──┬───────┘
    │            │          │
    └────┬───────┴──────┬───┘
         │              │
    ┌────▼───┐  ┌──────▼──┐
    │ Redis  │  │PostgreSQL│
    └────────┘  └──────────┘
```

## Directory Structure

### `/src/api`
REST API endpoints yang menangani HTTP requests

### `/src/services`
Business logic layer dimana semua logika bisnis berada

### `/src/models`
Data models dan database queries

### `/src/middleware`
Express middleware untuk autentikasi, validasi, dll

### `/src/utils`
Utility functions yang reusable

### `/src/config`
Konfigurasi aplikasi (database, redis, dll)

## Data Flow

1. **Request** → Masuk ke Express middleware
2. **Validation** → Joi schema validation
3. **Authentication** → JWT token verification
4. **Service** → Business logic processing
5. **Database** → Query execution (dengan caching di Redis)
6. **Response** → JSON response ke client

## Error Handling

Semua errors mengikuti standard error response:

```json
{
  "error": "Error message",
  "status": 400,
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## Authentication

Menggunakan JWT (JSON Web Token) dengan claims:
- `userId`: ID user
- `email`: Email user
- `role`: User role (admin, user, viewer)
- `exp`: Token expiration
