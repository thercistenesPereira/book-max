import { useState } from 'react';
import './App.css';
import Swal from 'sweetalert2';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './data.json';
import { BookInfoType } from './types';
import Modal from './components/Modal';
import Header from './components/Header';

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

  const listName = {
    wishList: 'Desejos',
    readList: 'Leitura',
    readingList: 'Lidos',
  };

  const alert = () => Swal.fire({
    title: 'Ops!',
    text: 'Livro já Adicionado',
    icon: 'error',
    confirmButtonText: 'OK',
  });

  const addToWishList = (book: BookInfoType) => {
    if (!wishList.some((item) => item.id === book.id)) {
      setWishList([...wishList, book]);
      handleOpenModal();
    } else {
      alert();
    }
  };

  const addToReadList = (book: BookInfoType) => {
    if (!readList.some((item) => item.id === book.id)) {
      setReadList([...readList, book]);
      handleOpenModal();
    } else {
      alert();
    }
  };

  const addToReadingList = (book: BookInfoType) => {
    if (!readingList.some((item) => item.id === book.id)) {
      setReadingList([...readingList, book]);
      handleOpenModal();
    } else {
      alert();
    }
  };

  return (

    <div>
      <Header />
      <div className="app">
        <div className="book-selector">
          <Book bookInfo={ data[currentBook] } showDetails />
          <div className="selector-buttons">
            <button
              className="buttonBook"
              onClick={ () => addToWishList(data[currentBook]) }
            >
              Adicionar à lista de desejos
            </button>
            <button
              className="buttonBook"
              onClick={ () => addToReadList(data[currentBook]) }
            >
              Adicionar à lista de leitura
            </button>
            <button
              className="buttonBook"
              onClick={ () => addToReadingList(data[currentBook]) }
            >
              Adicionar à lista de lidos
            </button>
            <button
              className="buttonBook"
              onClick={ () => setCurrentBook((currentBook + 1) % data.length) }
            >
              Próximo livro
            </button>
            <button
              className="buttonBook"
              onClick={ () => {
                const newBook = currentBook === 0 ? data.length - 1 : currentBook - 1;
                setCurrentBook(newBook);
              } }
            >
              Livro Anterior
            </button>
          </div>
        </div>
        <Modal
          isOpen={ isOpenModal }
          title={ data[currentBook].title }
          image={ data[currentBook].image }
          handleOpenModal={ handleOpenModal }
        />
        <div className="list-buttons">
          <button className="buttonList" onClick={ () => setCurrentList('wishList') }>
            Exibir lista de desejos
          </button>
          <button className="buttonList" onClick={ () => setCurrentList('readList') }>
            Exibir lista de leitura
          </button>
          <button className="buttonList" onClick={ () => setCurrentList('readingList') }>
            Exibir lista de lidos
          </button>
        </div>
        <h1 className="titleList">{`Lista de ${listName[currentList]}`}</h1>
        <BookList books={ list[currentList] } />
      </div>
    </div>
  );
}

export default App;
