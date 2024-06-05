
import BookShow from './BookShow'
import  './BookList.css'
  const BookList = ({ books, onDelete }) => {
  return (
    <div className='book-list'>
      {books.map((book) => (
        <BookShow book={book} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default BookList;
