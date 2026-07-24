# API Documentation - Apps Monitoring MD

## Base URL

```
http://localhost:3000/api/v1
```

## Authentication

Tambahkan Authorization header dengan JWT token:

```
Authorization: Bearer <token>
```

## Endpoints

### Health Check

```
GET /health
```

**Response:**

```json
{
  "status": "OK",
  "timestamp": "2024-01-01T12:00:00Z",
  "uptime": 12345.67
}
```

### Monitor Endpoints (Coming Soon)

#### Get All Monitors

```
GET /monitor
```

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `status`: Filter by status (active, inactive)

**Response:**

```json
{
  "data": [
    {
      "id": "uuid",
      "name": "Server 1",
      "status": "active",
      "lastCheck": "2024-01-01T12:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25
  }
}
```

#### Get Monitor Details

```
GET /monitor/:id
```

**Response:**

```json
{
  "id": "uuid",
  "name": "Server 1",
  "status": "active",
  "metrics": {
    "cpu": 45.2,
    "memory": 62.8,
    "disk": 78.5,
    "network": {
      "inbound": 1024,
      "outbound": 2048
    }
  },
  "lastCheck": "2024-01-01T12:00:00Z",
  "uptime": "99.8%"
}
```

## Error Responses

### 400 Bad Request

```json
{
  "error": "Invalid request parameters",
  "status": 400
}
```

### 401 Unauthorized

```json
{
  "error": "Authentication required",
  "status": 401
}
```

### 404 Not Found

```json
{
  "error": "Resource not found",
  "status": 404
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal server error",
  "status": 500
}
```

## Rate Limiting

- 100 requests per minute per IP
- Headers returned:
  - `X-RateLimit-Limit`: Total requests allowed
  - `X-RateLimit-Remaining`: Remaining requests
  - `X-RateLimit-Reset`: Timestamp when limit resets
