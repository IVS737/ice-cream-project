(() => {
  const newLocal = "[data-products-open]";
    const refs = {
      openModalBtn: document.querySelector("[data-products-open]"),
      openModalBtn: document.querySelector("[data-products-second-open]"),
      closeModalBtn: document.querySelector("[data-products-close]"),
      modal: document.querySelector("[data-products]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();