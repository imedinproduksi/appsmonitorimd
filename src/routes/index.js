const express = require('express');
const router = express.Router();

// Import route modules
// const authRoutes = require('./auth');
// const monitorRoutes = require('./monitor');

// Register routes
// router.use('/auth', authRoutes);
// router.use('/monitor', monitorRoutes);

router.get('/', (req, res) => {
  res.json({
    message: 'API v1 - Apps Monitoring MD',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      docs: '/docs',
    },
  });
});

module.exports = router;
