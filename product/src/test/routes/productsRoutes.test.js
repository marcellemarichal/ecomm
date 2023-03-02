import app from '../../app.js';
import { describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';

let server;
beforeEach(() => {
  const port = 3002;
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})

describe('GET em /api/products', () => {
  it('Deve listar todos os produtos', async () => {
    const result = await request(app)
      .get(`/api/products`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
      expect(result.body[0].produto).toEqual('Notebook Samsung');
  }) 
})

let idResposta;
describe('POST em /api/admin/products', () => {
  it('Deve criar um produto', async () => {
    const resposta = await request(app)
      .post(`/api/admin/products`)
      .send({
        produto: 'teste',
        descricao: 'teste',
        slug: 'teste-teste',
        preço_unitario: 5000,
        quantidade_em_estoque: 12
      })
      .expect(201)
      idResposta = resposta.body['_id'];
    })
  })
  
describe('GET em /api/products/id', () => {
  it('Deve detalhar um produto', async () => {
    await request(app)
      .get(`/api/products/${idResposta}`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
  })
})

describe('PUT em /api/admin/products/id', () => {
  test.each([
    ['produto', {produto: 'teste' }],
    ['descricao', {descricao: 'teste' }],
    ['slug', {slug: 'teste' }],
    ['preco_unitario', {preco_unitario: 5000 }],
    ['quantidade_em_estoque', {quantidade_em_estoque: 12 }]
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
     await requisicao.request(app)
      .put(`/api/admin/products/${idResposta}`)
      .send(param)
      .expect(200);
      
    expect(spy).toHaveBeenCalled();
  })
})

describe('DELETE em /api/admin/products/id', () => {
  it('Deve deletar um produto', async () => {
    await request(app)
      .delete(`/api/admin/products/${idResposta}`)
      .expect(204)
  })
})