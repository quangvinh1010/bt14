import React from "react";
import BookEdit from "./BookEdit";
import { useState } from "react";
import './BookShow.css'


const BookShow = ({ book, onDelete, onEdit }) => {
  const image = `https://picsum.photos/${book.id}/237/200/300`

  const handleDelete = () => {
    onDelete(book.id);
  }

  const [isEdit, setIsEdit] = useState(false)
  const handleEdit = (id, term) => {
    onEdit(id, term)
    setIsEdit(false)
  }
  return (
    <div className="item">
      <div className="image">

        <img src={image} alt="" />
      </div>
      {!isEdit && (
        <>
          <h2>{book.title}</h2>
          <p>{book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
      {!isEdit && (

        <>
          <button onClick={() => onDelete(book.id)}>Delete</button>
          <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
        </>
      )}
    </div>
  )
}


export default BookShow;