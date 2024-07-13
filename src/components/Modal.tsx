import './style/modal.css';

type ModalProps = {
  isOpen: boolean;
  title: string;
  image: string;
  handleOpenModal: () => void;
};

function Modal({ isOpen, title, image, handleOpenModal }: ModalProps) {
  return (
    <section>
      {isOpen && (
        <section className="container-modal">
          <div className="content-modal">
            <img src={ image } alt={ title } />
            <h4>{`LIVRO: ${title}`}</h4>
            <p>
              Adicionado com sucesso!!
            </p>
            <button
              className="button-modal"
              onClick={ () => handleOpenModal() }
            >
              OK
            </button>
          </div>
        </section>
      )}
    </section>
  );
}

export default Modal;
