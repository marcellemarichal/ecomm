import app from '../../app.js';
import { describe, expect, it, jest } from '@jest/globals';
import request from 'supertest';

let server;
beforeEach(() => {
    const port = 3002;
    server = app.listen(port);
})

afterEach(() => {
    server.close();
});

let idResposta;
describe('GET em /api/products', () => {
    it('deve retornar a lista de produtos', async () => {
        const resposta = await request(app)
            .get('/api/products')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200);
        idResposta = resposta.body.content.id;
    })
})

describe('POST em /api/admin/products', () => {
    it('deve criar um produto', async () => {
        const resposta = await request(app)
            .post(`/api/admin/products`)
            .send({
                id: 20,
                nome: 'Batom',
                descricao: 'batom hidratante fps 30',
                slug: 'batom-hidratante',
                preço_unitario: 25.99,
                quantidade_em_estoque: 7,
                id_categoria: 2
        })
            .expect(201);
        idResposta = resposta.body.content.id;
    });
});

describe('GET em /api/products/id', () => {
    it('deve detalhar um produto', async () => {
        await request(app)
            .get(`/api/products/${idResposta}`)
            .expect(200)
    })
})

describe('PUT em /api/admin/products/id', () => {
    test.each([
        ['id', {id: 20}], 
        ['nome', {nome: 'Batom'}],
        ['descricao', {descricao: 'batom hidratante fps 30'}],
        ['slug', {slug: 'batom-hidratante'}],       
        ['preco_unitario', {preço_unitario: 25.99}],
        ['quantidade_em_estoque', {quantidade_em_estoque: 7}],
        ['id_categoria', {id_categoria: 2}]       
      ])('Deve alterar o campo %s', async (chave, param) => {
        const requisicao = { request };
        const spy = jest.spyOn(requisicao, 'request');
        await requisicao.request(app)
          .put(`/api/produtos/${idResposta}`)
          .send(param)
          .expect(204);
    
        expect(spy).toHaveBeenCalled();
    });
});

describe('DELETE em /api/admin/products/id', () => {
    it('deve deletar um produto', async () => {
        await request(app)
            .delete(`/api/admin/products/${idResposta}`)
            .expect(200);
    });
});