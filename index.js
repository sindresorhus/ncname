import xmlCharacterClasses from 'xml-char-classes';

const getRange = regex => regex.source.slice(1, -1);

// https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-NCName
const ncname = new RegExp(`^[${getRange(xmlCharacterClasses.letter)}_][${getRange(xmlCharacterClasses.letter)}${getRange(xmlCharacterClasses.digit)}\\.\\-_${getRange(xmlCharacterClasses.combiningChar)}${getRange(xmlCharacterClasses.extender)}]*$`);

export default ncname;
