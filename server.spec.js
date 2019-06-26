const supertest = require('supertest');

const server = require('./server');

describe('server', () => {
    describe('GET', () => {
        it('should return 200 when connected', () => {
            return supertest(server)
            .get('/')
            .expect(200)
        })
    })
})