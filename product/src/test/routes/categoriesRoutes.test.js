import app from '../../app.js';
import { describe, expect, it, jest } from 'jest@globals';
import request from 'supertest';

let server;
beforeEach(() => {
  const port = 3000
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})

describe('GET em /api/categories', () => {
  it('Deve listar todas as categorias', async () => {
    await request(app)

      .get(`/api/categories`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
  })
})