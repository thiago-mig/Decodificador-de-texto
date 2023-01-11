const input = document.querySelector('.input');
const output = document.querySelector('.output');
const encryptBtn = document.querySelector('.encrypt');
const decryptBtn = document.querySelector('.decrypt');
const notFoundLogo = document.querySelector('.output-img-container');
const notFoundInstructions = document.querySelector('.output-instructions');
const copyBtn = document.querySelector('.copy');


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
    output.style.display = 'block';
    output.innerHTML = result;
  } else {
    notFoundLogo.style.display = 'block';
    notFoundInstructions.style.display = 'block';
    copyBtn.style.display = 'none';
    output.style.display = 'none';
    output.innerHTML = '';
  }
}

window.onload = () => {
  encryptBtn.addEventListener('click', encrypt);
}