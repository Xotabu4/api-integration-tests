import * as chai from 'chai'
let chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('Suite 1', () => {
    it('test 1', async () => {
        let resp = await chai.request('http://httpbin.org').get('/get')
        console.log('OLOLO', resp.status)
    });

    it('test 2', async () => {
        let resp = await chai.request('http://httpbin.org').get('/user-agent') 
        console.log('USER-AGENT', JSON.parse(resp.body))
    })
});