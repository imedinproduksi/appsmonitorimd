# Apps Monitoring MD

**Sistem Monitoring Terpadu untuk Infrastruktur dan Aplikasi**

Apps Monitoring MD adalah platform monitoring komprehensif yang dirancang untuk mengawasi kesehatan, performa, dan ketersediaan infrastruktur dan aplikasi secara real-time.

## 🚀 Fitur Utama

- **Real-time Monitoring**: Pemantauan status sistem dan aplikasi secara langsung
- **Dashboard Interaktif**: Visualisasi data dengan grafik dan metrik yang mudah dipahami
- **Alert & Notification**: Sistem pemberitahuan untuk anomali dan masalah
- **Logs Management**: Pengumpulan dan analisis log dari berbagai sumber
- **Performance Analytics**: Analisis mendalam terhadap performa sistem
- **Multi-instance Support**: Dukungan untuk monitoring multiple servers/instances
- **API Integration**: REST API untuk integrasi dengan sistem eksternal

## 📋 Prerequisite

- Node.js >= 16.x
- npm atau yarn
- Database (PostgreSQL/MongoDB)
- Docker (optional, untuk deployment)

## 🛠️ Instalasi

### Development Setup

```bash
# Clone repository
git clone https://github.com/imedinproduksi/appsmonitorimd.git
cd appsmonitorimd

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run development server
npm run dev
```

### Production Setup

```bash
# Using Docker
docker-compose -f docker-compose.prod.yml up -d

# Or with PM2
npm run build
npm run start
```

## 📁 Project Structure

```
appsmonitorimd/
├── src/
│   ├── api/              # REST API endpoints
│   ├── services/         # Business logic
│   ├── models/           # Database models
│   ├── middleware/       # Express middleware
│   ├── utils/            # Utility functions
│   ├── config/           # Configuration files
│   └── index.js          # Application entry point
├── frontend/             # React/Vue frontend
├── tests/                # Test suites
├── docs/                 # Documentation
├── scripts/              # Utility scripts
├── .github/              # GitHub workflows & configs
├── docker/               # Docker configurations
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- src/services/__tests__/monitoring.test.js
```

## 📚 Documentation

Untuk dokumentasi lebih detail, lihat folder `docs/`:
- [API Documentation](./docs/API.md)
- [Architecture Guide](./docs/ARCHITECTURE.md)
- [Installation Guide](./docs/INSTALLATION.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## 🤝 Contributing

Kontribusi sangat diterima! Silakan baca [CONTRIBUTING.md](./CONTRIBUTING.md) untuk detail lebih lanjut.

## 📄 License

Proyek ini berlisensi di bawah MIT License - lihat file [LICENSE](./LICENSE) untuk detail.

## 👥 Authors

- **imedinproduksi** - Initial work

## 📞 Support

Untuk pertanyaan atau laporan bug, silakan buat [issue baru](https://github.com/imedinproduksi/appsmonitorimd/issues).
