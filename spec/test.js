const assert = require('assert');
const app = require('../src/app');
assert.equal(1, 1, 'Sanity check!');

assert.equal(app.test(), 'Doing it');