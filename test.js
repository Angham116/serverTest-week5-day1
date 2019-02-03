const test = require('tape');
const router = require('./router')
const supertest = require('supertest');

test('Test handeler Home Page', (t)=>{
	supertest(router)
	.get('/')
	.expect(200)
	.expect('Content-Type','html/text')
	.end( (err, response) => {
		t.error(err)
		t.equal(response.text,'Welcome To Home Page','Should be Welcome To Home Page');
		t.end();
	})
});

test('Handle Not Found Page', (t) => {
	supertest(router)
	.get('/notFoundPage')
	.expect(404)
	.expect('Content-Type', 'html/text')
	.end( (err, response) => {
		t.error(err)
		t.equal(response.text,'Sorry, Page Not Found', 'Should be Sorry, Page Not Found')
		t.end()
	} )
})