export default class ModalGaleria {
  constructor(imagens, modal) {
    this.imagens = document.querySelectorAll(imagens);
    this.modal = document.querySelector(modal);

    // this.addImagensEvent = this.addImagensEvent.bind(this);
    this.addModal = this.addModal.bind(this);
    this.foraModal = this.foraModal.bind(this);
  }
  addModal(event) {
    this.modal.classList.add("open");
    event.target.src;
    const imgModal = document.createElement("img");
    imgModal.src = event.target.src;
    this.modal.appendChild(imgModal);
  }
  removerModal() {
    const modalImagem = document.querySelector(".modal img");
    this.modal.classList.remove("open");
    modalImagem.remove();
  }
  foraModal(event) {
    if (event.target === this.modal) {
      this.removerModal();
    }
  }
  addImagensEvent() {
    this.imagens.forEach((imagem) => {
      imagem.addEventListener("click", this.addModal);
    });
    this.modal.addEventListener("click", this.foraModal);
  }

  init() {
    if (this.imagens.length) {
      this.addImagensEvent();
    }
    return this;
  }
}
