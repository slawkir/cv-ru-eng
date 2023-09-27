
const btnRu = document.querySelector('.lang-switch');
let engLang = document.querySelectorAll('.eng');
let ruLang = document.querySelector('.ru');

function toggleLang() { 
  changeBtn();
  changeClassLang();
}
function changeBtn() { 
  if (btnRu.textContent === 'ENG') { 
    btnRu.textContent = 'RU';
  } else if (btnRu.textContent = 'RU') {
    btnRu.textContent = 'ENG';
  }
}

function changeClassLang() { 
  // if (ruLang.style.display === 'none' && (engLang.style.display === 'inline-block' || engLang.style.display === 'block')) {
  //   engLang.style.display = 'none';
  //   ruLang.style.display = 'inline-block';
  // }
  engLang.classList.add('unvisible');
  // ruLang.style.display = 'inline-block';
}

// ru.style.display = 'inline-block';

btnRu.addEventListener('click', toggleLang);
// engLang.addEventListener('click', () => {
//   console.log('+');
// });
console.log(engLang.classList.contains('eng'));
console.log(engLang.classList.value);