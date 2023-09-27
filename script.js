
const btnRu = document.querySelector('.lang-switch');
let engLang = document.querySelectorAll('.eng');
let ruLang = document.querySelectorAll('.ru');

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

  engLang.forEach(el => {
    if (el.classList.contains('unvisible')) {
      return el.classList.remove('unvisible');
    } else if (!el.classList.contains('unvisible'))
    return el.classList.add('unvisible');
  })
  ruLang.forEach(el => {
    if (el.classList.contains('unvisible')) {
      return el.classList.remove('unvisible');
    } else if (!el.classList.contains('unvisible'))
    return el.classList.add('unvisible');
  })
  

}


btnRu.addEventListener('click', toggleLang);

