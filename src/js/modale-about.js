(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
    document.getElementById('video-frame-close').src = 'not.found/404';
    document.getElementById('video-frame-open').src =
      'https://www.youtube.com/embed/2egyyEOYg5w';
  }
})();
