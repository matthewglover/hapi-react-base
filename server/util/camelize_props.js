const camelize = require('./camelize');

const camelizeProps = obj =>
	Object.keys(obj)
        .reduce((acc, k) => Object.assign({ [camelize(k)]: obj[k] }, acc), {});

module.exports = camelizeProps;
