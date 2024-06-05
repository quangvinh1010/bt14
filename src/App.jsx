import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import { useState, useEffect } from "react";

const fetchBooks = async () => {
  try {
      const response = await axios.get('http://localhost:3000/api/books');
      console.log(response.data);
  } catch (error) {
      console.error('Error fetching books:', error);
  }
};

fetchBooks();
 const App = () => {
  const [books, setBooks ] = useState([]);

  const deleteBook =  (id) => {
    const books = axios.delete(`http://localhost:3001/books/${id}`);
    return books;
  };

  const fetchBooks = async() => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    };
  
    const createBook = async (term) => {
      const resp = await axios.post("http://localhost:3001/books", term);
      if (resp.data) {
        setBooks([...books, resp.data]);
      }
    };

    useEffect(() => {
      fetchBooks();
    }, []);
  return (
    <div className="wraper">
        <h1> Reading Book</h1>
        <div>
          <BookList books={books} onDelete={deleteBook} />
        </div>  
        <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;