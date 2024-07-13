import { BookInfoType } from '../types';
import './style/book.css';

type BookProps = {
  bookInfo: BookInfoType;
  showDetails: boolean;
};

export default function Book(props: BookProps) {
  const {
    bookInfo: { title, image, author, description },
    showDetails,
  } = props;

  return (
    <div className="book">
      <img src={ image } alt={ title } />
      <div className="card-information">
        <h1>{ title }</h1>
        <h3>{ author }</h3>
        { showDetails && (
          <div>
            <p>{ description }</p>
          </div>
        ) }
      </div>
    </div>
  );
}
