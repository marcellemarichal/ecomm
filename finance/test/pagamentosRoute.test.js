const app = require('../app.js')
const { describe, expect, it, beforeEach, afterEach } = require('@jest/globals');
const request = require('supertest');

let server;
beforeEach(() => {
  const port = 3006;
  server = app.listen(port)
})

afterEach(() => {
  server.close()
})

let idResposta;
describe('POST em /pagamentos', () => {
  it('Deve criar um pagamento', async () => {
    const resposta = await request(app)
      .post(`/pagamentos`)
      .send({
        preco: 3000.00,
        nomeCartao: 'TESTE SANTOS DA SILVA',
        numeroCartao: '4745474100045722',
        vencimentoCartao: '2028-09',
        cvv: '642',
        status: 'CRIADO'
        })
      .expect(201)
      idResposta = resposta.body.objetoResposta['id'];
    })
  })
  
describe('GET em /pagamentos/id', () => {
  it('Deve detalhar um pagamento', async () => {
    await request(app)
      .get(`/pagamentos/${idResposta}`)
      .expect('content-type', /json/)
      .set('Accept', 'application/json')
      .expect(200)
  })
})

describe('PUT em /pagamentos/id', () => {
  test.each([
    ['status', {status: 'CONFIRMADO' }],
    ['status', {status: 'CANCELADO' }]
  ])('Deve alterar o campo %s', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
     await requisicao.request(app)
      .put(`/pagamentos/${idResposta}`)
      .send(param)
      .expect(200);
      
    expect(spy).toHaveBeenCalled();
  })
})