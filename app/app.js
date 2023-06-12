 
const inputNumer = document.getElementById('input');
const resultOfNumber = document.querySelector('#result');

input.addEventListener('input', () => {
  const value = parseInt(input.value);
  if (value > 50) {
    resultOfNumber.textContent = value * 2;
  } else {
    resultOfNumber.textContent = value;
  }
});