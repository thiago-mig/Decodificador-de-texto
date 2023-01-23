const input = document.querySelector('.input');
const outputResult = document.querySelector('.output-result');
const outputDefault = document.querySelector('.output-default');
const output = document.querySelector('.output');
const encryptBtn = document.querySelector('.encrypt');
const decryptBtn = document.querySelector('.decrypt');
const notFoundLogo = document.querySelector('.output-img-container');
const notFoundInstructions = document.querySelector('.output-instructions');
const copyBtn = document.querySelector('.copy');
const outputHidden = document.querySelector('.output-hidden');
const tooltip = document.querySelector('.tooltip');


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
    outputDefault.style.display = 'none';
    outputResult.style.display = 'flex';
    output.innerHTML = result;
    outputHidden.value = result;
  } else {
    outputDefault.style.display = 'flex';
    outputResult.style.display = 'none';
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

    outputDefault.style.display = 'none';
    outputResult.style.display = 'flex';
    output.innerHTML = result;
    outputHidden.value = result;
  } else {
    outputDefault.style.display = 'flex';
    outputResult.style.display = 'none';
    output.innerHTML = '';
    outputHidden.value = '';
  }
}

const copy = () => {
  outputHidden.select();
  navigator.clipboard.writeText(outputHidden.value);
  setTimeout(() => tooltip.style.display = 'none', 3000);
  tooltip.style.display = 'block';
}

window.onload = () => {
  encryptBtn.addEventListener('click', encrypt);
  decryptBtn.addEventListener('click', decrypt);
  copyBtn.addEventListener('click', copy);
}