const modalOverlay        = document.getElementById('modal-overlay');
const modalCard           = modalOverlay.querySelector('.modal-card');
const openModalBtn        = document.getElementById('open-modal-btn');
const closeModalIconBtn   = document.getElementById('close-modal-icon-btn');
const closeModalActionBtn = document.getElementById('close-modal-action-btn');

const openModal = () => {
  modalOverlay.removeAttribute('hidden');
};

const closeModal = () => {
  modalOverlay.setAttribute('hidden', '');
};

openModalBtn.addEventListener('click', openModal);
closeModalIconBtn.addEventListener('click', closeModal);
closeModalActionBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', closeModal);

modalCard.addEventListener('click', event => {
  event.stopPropagation();
});