import jest from 'jest';
import request from 'supertest';

import { app } from './app';

jest.mock('./models/app/settingsModel');

describe('API Test', () => {
  test('GET `/api/random-url` should return 404', () => {
    return new Promise((done) => {
      request(app).get('/api/random-url').expect(404, done);
    });
  });

  test('GET `/api/app-settings` should return 200', () => {
    return new Promise((done) => {
      request(app).get('/api/app-settings').expect(200, done);
    });
  });
});
