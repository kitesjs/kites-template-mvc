'use strict';
const test = require('tape');
const request = require('supertest');

test('kites initDatabase()', async function (t) {
    t.plan(2)

    var kites = await require('../../app');
    request(kites.express.app)
        .post('/api/user/demo')
        .set('Authorization', 'Bearer foobar')
        .expect(200, (err, res) => {
            t.equal(res.body.length, 1, 'Init database');
        })

    // find created user
    request(kites.express.app)
        .post('/api/user/admin')
        .set('Authorization', 'Bearer foobar')
        .expect(200, (err, res) => {
            t.equal(res.body.email, 'vunb@nodejs.vn', 'Find admin user');
        })
})