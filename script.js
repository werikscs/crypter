const inputEncrypter = document.getElementById('encriptyInput')
const btnEncrypter = document.getElementById('encriptyBtn');

const inputDecrypter = document.getElementById('decriptyInput')
const btnDecrypter = document.getElementById('decriptyBtn');

const btnCopy = document.getElementById('copyBtn');
const containerResult = document.getElementById('container outer');
const paragraphResult = document.getElementById('crypterText');

hideResult()

btnEncrypter.addEventListener('click', function () {
	const encryptedText = toEncrypt(inputEncrypter.value);
	paragraphResult.innerText = encryptedText;
	hideResult()
});

btnDecrypter.addEventListener('click', function () {
	const decryptedText = toDecrypt(inputDecrypter.value);
	paragraphResult.innerText = decryptedText;
	hideResult()
});

btnCopy.addEventListener('click', function () {
	navigator.clipboard.writeText(paragraphResult.innerText);
	paragraphResult.innerText = '';
	hideResult();
});

function hideResult() {
	if (paragraphResult.innerText === '') {
		containerResult.style.display = 'none';
	} else {
		containerResult.style.display = 'flex';
	}
}
