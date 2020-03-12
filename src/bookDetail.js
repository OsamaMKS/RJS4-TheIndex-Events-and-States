import React from "react";

const BookDetail = props => {
  const book = props.book;
  const author = props.author;
  return (
    <tr>
      <td>{book.title}</td>
      <td>
        {author.first_name} {author.last_name}
      </td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
};

export default BookDetail;
