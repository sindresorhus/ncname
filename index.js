'use strict';
const xmlChars = require('xml-char-classes');

const getRange = re => re.source.slice(1, -1);

// http://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-NCName
module.exports = new RegExp(`^[${getRange(xmlChars.letter)}_][${getRange(xmlChars.letter)}${getRange(xmlChars.digit)}\\.\\-_${getRange(xmlChars.combiningChar)}${getRange(xmlChars.extender)}]*$`);
