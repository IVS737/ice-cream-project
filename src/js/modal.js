(() => {
  const newLocal = "[data-modal-open]";
  const refs = {
      openModalBtnMobile: document.querySelector("[data-modal-open-mobile]"), 
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
   };
  
    refs.openModalBtnMobile.addEventListener("click", toggleModal);
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();