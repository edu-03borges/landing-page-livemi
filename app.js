// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

// Pages Config
// --------------------------------------------------

function changePage(page) {
  const pages = ['home-page', 'about-page', 'contact-page', 'product-page'];
  const header = document.querySelector('header');
  const shape = document.querySelector('.shape');
  const appStores = document.querySelector('.app-stores');

  pages.forEach(p => document.getElementById(p).style.display = 'none');

  document.getElementById(page).style.display = 'flex';

  if (page === 'home-page') {
    header.style.backgroundColor = 'transparent';
    header.style.margin = '0';
    header.style.borderRadius = '0';
    appStores.style.display = 'flex';
  } else {
    header.style.backgroundColor = '#fff';
    header.style.margin = '0 20px';
    header.style.borderRadius = '20px 20px 0 0';
    appStores.style.display = 'none';
  }

  shape.style.display = 'none';

  setTimeout(() => {
    shape.style.display = 'flex';
  }, 100);
}

document.getElementById('link-home').addEventListener('click', (event) => {
  event.preventDefault();
  changePage('home-page');
});

document.getElementById('link-product').addEventListener('click', (event) => {
  event.preventDefault();
  changePage('product-page');
});

document.getElementById('link-about').addEventListener('click', (event) => {
  event.preventDefault();
  changePage('about-page');
});

document.getElementById('link-contact').addEventListener('click', (event) => {
  event.preventDefault();
  changePage('contact-page');
});

// 
// window.addEventListener('DOMContentLoaded', (event) => {
//   function checkTextContent() {
//     const currentInfoText = document.querySelector('.current--info .text.name').textContent.trim();

//     if (currentInfoText === 'Geometria') {
//       console.log('Ação para Geometria');

//     } else if (currentInfoText === 'Álgebra') {
//       console.log('Ação para Álgebra');

//     } else if (currentInfoText === 'Aritmética') {
//       console.log('Ação para Aritmética');

//     } else {
//       console.log('Texto não reconhecido');
//     }
//   }

//   const checkOpacityButton = document.querySelector('.button-container');
//   checkOpacityButton.addEventListener('click', () => {
//     checkTextContent();
//   });
// });

// window.addEventListener('DOMContentLoaded', (event) => {
//   function changeButtonText() {
//     const currentInfoText = document.querySelector('.current--info .text.name').textContent.trim();
//     const button = document.querySelector('.button-container');  

//     console.log(`Texto atual: ${currentInfoText}`); 

//     button.classList.remove('fade-out', 'fade-in');

//     button.classList.add('fade-out');

//     setTimeout(() => {
//       if (currentInfoText === 'Geometria') {
//         button.textContent = 'BAIXAR PDF DE GEOMETRIA';
//       } else if (currentInfoText === 'Álgebra') {
//         button.textContent = 'BAIXAR PDF DE ÁLGEBRA';
//       } else if (currentInfoText === 'Aritmética') {
//         button.textContent = 'BAIXAR PDF DE ARITMÉTICA';
//       } else {
//         button.textContent = 'BAIXAR PDF';
//       }

//       button.classList.remove('fade-out');
//       button.classList.add('fade-in');
//     }, 500);
//   }

//   const leftButton = document.querySelector('.btn--left');
//   const rightButton = document.querySelector('.btn--right');

//   leftButton.addEventListener('click', changeButtonText);  
//   rightButton.addEventListener('click', changeButtonText); 
// });







