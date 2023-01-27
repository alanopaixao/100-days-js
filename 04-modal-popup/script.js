const modal = document.querySelector("#modal"),
  modalContent = document.querySelector("#modal-content"),
  btn = document.querySelector("#btn"),
  closeBtn = document.querySelector("#close");

btn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

function openModal(e) {
  e.preventDefault();
  modalContent.classList.remove("slide-up");
  modal.style.display = "block";
}

function closeModal(e) {
  e.preventDefault();
  modalContent.classList.add("slide-up");

  setTimeout(() => {
    modal.style.display = "none";
  }, 500);
}
