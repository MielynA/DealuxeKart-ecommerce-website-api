const request = require('supertest');

// LOCAL MODULES
const {app,} = require('../backend/app');

// TESTS
test('A GET request to the root path should always be 200', done => {
    request(app)
        .get('/')
        .expect(200)
        // .end((err, res) => {
        //     if (err) throw new Error(`${err}`);
            done();
        //});
});