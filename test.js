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
});

test('Handle elephant as not found page', (t) => {
	supertest(router)
	.get('/elephant')
	.expect(404)
	.expect('Content-Type', 'html/text')
	.end( (err, response) => {
		t.error(err)
		t.equal(response.text, 'Sorry, Page Not Found', 'Should be Sorry, Page Not Found')
		t.end()
	} )
});

test('Handle blog page with GET method', (t) => {
	supertest(router)
	.get('/blog')
	.expect(200)
	.expect('Content-Type', 'html/text')
	.end( (err, response) => {
		t.error(err)
		t.equal(response.text, 'Welcome To Blog Page', 'Should be Welcome To Blog Page')
		t.end()
	} )
});

test('Handle blog page with POST method', (t) => {
	supertest(router)
	.post('/blog')
	.send(['a','b'])
	.set({ password: 'potato'})
	.expect(200)
	.expect('Content-Type', 'application/json')
	.end( (err, response) => {
		t.error(err)
		// console.log('jjjj',response)
		console.log('mmm',response.body)
		t.deepEqual(response.body,['a','b'],`Should be { password: 'potato'}`)
		t.end()
	} )
})

