(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open-modal]'),
      closeModalBtn: document.querySelector('[data-modal-close-button]'),
      modal: document.querySelector('[data-menu]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-cover');
    }
  })();

