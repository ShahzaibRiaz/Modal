'use strict';
const btnsModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');

const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsModal.forEach(btn => {
  btn.addEventListener('click', showModal);
});
console.log(modal.classList);
document.addEventListener('keydown', e => {
  if (e.key.toLowerCase() === 'escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
