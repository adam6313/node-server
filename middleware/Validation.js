const { has } = require('lodash');
/**
 * Validation hook
 * @param { Object } e Error property
 * @returns bool
 */
module.exports = e => has(e, 'name') && (e.name === 'ValidationError')