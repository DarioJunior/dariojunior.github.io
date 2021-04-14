let book = document.querySelector('.book');
let modal = document.querySelector('#projectsModal');
let close = document.querySelector('#close');
let galleryModal = document.querySelector('#gallery');

book.addEventListener('click', () => {
  modal.style.visibility = 'visible';

})

close.addEventListener('click', () => {
  modal.style.visibility = 'hidden';
})