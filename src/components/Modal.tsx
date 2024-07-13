import './style/modal.css';

type ModalProps = {
  isOpen: boolean;
  title: string;
  image: string;
};

function Modal({ isOpen, title, image }: ModalProps) {
  return (
    <section>
      {isOpen && (
        <section className="container-modal">
          <div className="content-modal">
            <img src={ image } alt={ title } />
            <h4>{`LIVRO: ${title}`}</h4>
            <p>
              Adicionado com sucesso à lista de
              {' '}
              <span>desejo!!</span>
            </p>
            <button className="button-modal">OK</button>
          </div>
        </section>
      )}
    </section>
  );
}

export default Modal;
