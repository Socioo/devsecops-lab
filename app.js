const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'DevSecOps CI/CD Pipeline is Running!',
        status: 'OK',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.get('/secret-test', (req, res) => {
    // Intentionally vulnerable code for testing security tools
    /* eslint-disable no-unused-vars */
    const secretKey = 'AKIAIOSFODNN7EXAMPLE'; // AWS Key example - for testing only
    const password = 'admin123'; // Weak password - for testing only
    /* eslint-enable no-unused-vars */
    res.json({ message: 'This endpoint has security issues for testing security scanners' });
});

