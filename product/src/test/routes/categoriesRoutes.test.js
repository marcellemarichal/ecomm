import app from '../../app.js';
import { describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';

let server;
beforeEach(() => {
  const port = 3004;
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})

describe('GET em /api/categories', () => {
  it('Deve listar todas as categorias', async () => {
    const result = await request(app)
      .get(`/api/categories`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
      expect(result.body[0].nome).toEqual('pets');
  }) 
})

let idResposta;
describe('POST em /api/admin/categories', () => {
  it('Deve criar uma categoria', async () => {
    const resposta = await request(app)
      .post(`/api/admin/categories`)
      .send({
        nome: 'pets',
        status: 'ativa',
      })
      .expect(201)
      idResposta = resposta.body['_id'];
    })
  })
  
describe('GET em /api/categories/id', () => {
  it('Deve detalhar uma categoria', async () => {
    await request(app)
      .get(`/api/categories/${idResposta}`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
  })
})

describe('PUT em /api/admin/categories/id', () => {
  test.each([
    ['nome', { nome: 'teste' }],
    ['status', { status: 'inativa' }]
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
     await requisicao.request(app)
      .put(`/api/admin/categories/${idResposta}`)
      .send(param)
      .expect(200);
      
    expect(spy).toHaveBeenCalled();
  })
})

describe('DELETE em /api/admin/categories/id', () => {
  it('Deve deletar uma categoria', async () => {

    await request(app)
      .delete(`/api/admin/categories/${idResposta}`)
      .expect(204)
  })
})