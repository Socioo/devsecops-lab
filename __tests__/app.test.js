const request = require('supertest');
const app = require('../app');

describe('DevSecOps App Tests', () => {
    test('GET / should return success message', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('DevSecOps CI/CD Pipeline is Running!');
        expect(response.body.status).toBe('success');
    });

    test('GET /health should return healthy', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('healthy');
    });
});
