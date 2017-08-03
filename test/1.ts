import * as chai from 'chai'
import { expect } from 'chai'
import chaiHttp = require('chai-http')

chai.use(chaiHttp);

//TODO: add global .use(errorMiddleware)
let errorMiddleware = function (request: ChaiHttp.Request) {
    console.error('ERROR MIDDLEWARE WORKS')
    return request.catch(err => {
        console.log('GOT ERROR!')
        //TODO: prepare nice Error object here.
        throw err
    })
};

describe('Suite 1', () => {
    xit('valid songs', async () => {
        var resp = await (chai.request('http://localhost:3032') as any)
            .get('/songs?query=test').use(errorMiddleware)

        expect(resp).to.have.status(200);
    })

    it('invalid songs', async () => {
        let resp = (chai.request('http://localhost:3032') as any)
            .get('/songs')
            .use(errorMiddleware)

        expect(resp).to.have.status(200);
    })
})




