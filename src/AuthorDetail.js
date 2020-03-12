import React from "react";
import BookDetail from "./bookDetail";

const AuthorDetail = props => {
  const author = props.author;
  const authorName = `${author.first_name} ${author.last_name}`;

  const books = author.books.map(book => (
    <BookDetail book={book} key={book.title} author={author} />
  ));

  return (
    <div className="author col-xs-10">
      <div>
        <h3>{authorName}</h3>
        <img src={author.imageUrl} className="img-thumbnail" alt={authorName} />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{books}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;