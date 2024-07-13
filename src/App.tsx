import { useState } from 'react';
import './App.css';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types';
import Modal from './components/Modal';

type CurrentListType = 'wishList' | 'readingList' | 'readList';

function App() {
  const [currentBook, setCurrentBook] = useState(0);
  const [wishList, setWishList] = useState<BookInfoType[]>([]);
  const [readingList, setReadingList] = useState<BookInfoType[]>([]);
  const [readList, setReadList] = useState<BookInfoType[]>([]);
  const [currentList, setCurrentList] = useState<CurrentListType>('wishList');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const list = { wishList, readList, readingList };

  const handleOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="app">
      <div className="book-selector">
        <Book bookInfo={ data[currentBook] } showDetails />
        <div className="selector-buttons">
          <button
            onClick={ () => {
              setWishList([...wishList, data[currentBook]]);
              handleOpenModal();
            } }
          >
            Adicionar à lista de desejos
          </button>
          <button
            onClick={ () => setReadingList([...readingList, data[currentBook]]) }
          >
            Adicionar à lista de leitura
          </button>
          <button
            onClick={ () => setReadList([...readList, data[currentBook]]) }
          >
            Adicionar à lista de lidos
          </button>
          <button
            onClick={ () => setCurrentBook((currentBook + 1) % data.length) }
          >
            Próximo livro
          </button>
        </div>
      </div>

      <Modal
        isOpen={ isOpenModal }
        title={ data[currentBook].title }
        image={ data[currentBook].image }
      />

      <div className="list-buttons">
        <button onClick={ () => setCurrentList('wishList') }>
          Exibir lista de desejos
        </button>
        <button onClick={ () => setCurrentList('readingList') }>
          Exibir lista de leitura
        </button>
        <button onClick={ () => setCurrentList('readList') }>
          Exibir lista de lidos
        </button>
      </div>
      <h1>Lista de ...</h1>
      <BookList books={ list[currentList] } />
    </div>
  );
}

export default App;
