const encrypterObj = {
	'a': 'ai',
	'e': 'enter',
	'i': 'imes',
	'o': 'ober',
	'u': 'ufat'
}

const decrypterObj = {
	'ai': 'a',
	'enter': 'e',
	'imes': 'i',
	'ober': 'o',
	'ufat': 'u'
}

function toEncrypt(string) {
	const re = /[aeiou]/g;
	const encryptedString = string.replace(re, word => encrypterObj[word]);
	return encryptedString;
}

function toDecrypt(string) {
	const re = /ai|enter|imes|ober|ufat/g;
	const decryptedString = string.replace(re, word => decrypterObj[word]);
	return decryptedString;
}