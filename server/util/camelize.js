const compose = require('./compose');

const stripUnderscore = str => str.replace(/_/g, '');

const toUpperCase = str => str.toUpperCase();

const camelize = str =>
	str.replace(/_\w/g, compose(toUpperCase, stripUnderscore));

module.exports = camelize;
