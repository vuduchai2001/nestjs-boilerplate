import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { createTestAppModules } from '../setup/test-module';

describe('AppController (e2e)', () => {
  let appTest: INestApplication;

  beforeAll(async () => {
    const { app } = await createTestAppModules();
    appTest = app;
    await appTest.init();
  });

  afterAll(async () => {
    await appTest.close();
  });

  it('/ (GET)', async () => {
    const response = await request(appTest.getHttpServer()).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
