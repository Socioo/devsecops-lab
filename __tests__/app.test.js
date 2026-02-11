const request = require('supertest');
const app = require('../app');

describe('DevSecOps App Tests', () => {
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain('DevSecOps CI/CD Pipeline');
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('GET /secret-test should exist', async () => {
    const response = await request(app).get('/secret-test');
    expect(response.statusCode).toBe(200);
  });
});
