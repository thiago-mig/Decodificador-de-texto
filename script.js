const input = document.querySelector('.input');
const outputWrapper = document.querySelector('.output-wrapper')
const output = document.querySelector('.output');
const encryptBtn = document.querySelector('.encrypt');
const decryptBtn = document.querySelector('.decrypt');
const notFoundLogo = document.querySelector('.output-img-container');
const notFoundInstructions = document.querySelector('.output-instructions');
const copyBtn = document.querySelector('.copy');
const outputHidden = document.querySelector('.output-hidden');


const encrypt = () => {
  let result = '';
  if (input.value !== '') {
    for (let n of input.value) {
      switch (n) {
        case 'a':
          result += 'ai';
          break;
        
        case 'e':
          result += 'enter';
          break;

        case 'i':
          result += 'imes';
          break;
        
        case 'o':
          result += 'ober';
          break;
        
        case 'u':
          result += 'ufat';
          break;
      
        default:
          result += n;
          break;
      }
    }
    notFoundLogo.style.display = 'none';
    notFoundInstructions.style.display = 'none';
    copyBtn.style.display = 'block';
    outputWrapper.style.display = 'flex'
    output.style.display = 'block';
    output.innerHTML = result;
    outputHidden.value = result;
  } else {
    notFoundLogo.style.display = 'block';
    notFoundInstructions.style.display = 'block';
    copyBtn.style.display = 'none';
    outputWrapper.style.display = 'none';
    output.style.display = 'none';
    output.innerHTML = '';
    outputHidden.value = '';
  }
}

const decrypt = () => {
  if (input.value !== '') {
    let result = input.value;
    result = result.replace(/ai/g, 'a');
    result = result.replace(/enter/g, 'e');
    result = result.replace(/imes/g, 'i');
    result = result.replace(/ober/g, 'o');
    result = result.replace(/ufat/g, 'u');

    notFoundLogo.style.display = 'none';
    notFoundInstructions.style.display = 'none';
    copyBtn.style.display = 'block';
    outputWrapper.style.display = 'block'
    output.style.display = 'block';
    output.innerHTML = result;
    outputHidden.value = result;
  } else {
    notFoundLogo.style.display = 'block';
    notFoundInstructions.style.display = 'block';
    copyBtn.style.display = 'none';
    outputWrapper.style.display = 'flex'
    output.style.display = 'none';
    output.innerHTML = '';
    outputHidden.value = '';
  }
}

const copy = () => {
  outputHidden.select();
  navigator.clipboard.writeText(outputHidden.value);
}

window.onload = () => {
  encryptBtn.addEventListener('click', encrypt);
  decryptBtn.addEventListener('click', decrypt);
  copyBtn.addEventListener('click', copy);
}