import React, { useState, useEffect } from "react";
import axios from "axios";
import StockImage from "./Images/No-image-available.jpg";

function Bookshelf(props) {
  const [bookshelf, setBookshelf] = useState({});
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:7000/bookshelf")
      .then(data => {
        setBookshelf(data.data.books);
      })
      .catch(() => sethasError(true));
  }, []);

  const MoveBooktoShelf = async (bookid, shelf) => {
    await axios
      .get(`http://localhost:7000/bookshelf/update/${bookid}/${shelf}`)
      .then(data => {
        setBookshelf(data.data.books);
      })
      .catch(() => sethasError(true));
  };

  return (
    <div>
      {hasError && <h2>Error Retrieving Data from Server!</h2>}
      <div className="row-mb5">
        <h1>Want to Read</h1>
        {Object.keys(bookshelf).length > 0 &&
          bookshelf.wantToRead.map((book, idx) => {
            return (
              <div className="card" key={idx}>
                {book.imageLinks ? (
                  <img
                    className="card-img-top"
                    src={book.imageLinks.thumbnail}
                    alt=""
                    onClick={() =>
                      props.history.push(`/Bookdetails/${book.id}`)
                    }
                  />
                ) : (
                  <img
                    className="card-img-top"
                    src={StockImage}
                    alt=""
                    onClick={() =>
                      props.history.push(`/Bookdetails/${book.id}`)
                    }
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  {book.authors && (
                    <p className="card-text">
                      <b>Author:</b> {book.authors}
                    </p>
                  )}
                  {book.publisher && (
                    <p className="card-text">
                      <b>Publisher:</b> {book.publisher}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-primary float-middle"
                  onClick={() => MoveBooktoShelf(book.id, "currentlyReading")}
                >
                  Move to Currently Reading
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-middle"
                  onClick={() => MoveBooktoShelf(book.id, "read")}
                >
                  Move to Read
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={() => MoveBooktoShelf(book.id, "none")}
                >
                  Delete from bookshelf
                </button>
                <br />
              </div>
            );
          })}
      </div>
      <div className="row-mb5">
        <h1>Currently Reading</h1>
        {Object.keys(bookshelf).length > 0 &&
          bookshelf.currentlyReading.map((book, idx) => {
            return (
              <div className="card" key={idx}>
                {book.imageLinks ? (
                  <img
                    className="card-img-top"
                    src={book.imageLinks.thumbnail}
                    alt=""
                    onClick={() =>
                      props.history.push(`/Bookdetails/${book.id}`)
                    }
                  />
                ) : (
                  <img
                    className="card-img-top"
                    src={StockImage}
                    alt=""
                    onClick={() =>
                      props.history.push(`/Bookdetails/${book.id}`)
                    }
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  {book.authors && (
                    <p className="card-text">
                      <b>Author:</b> {book.authors}
                    </p>
                  )}
                  {book.publisher && (
                    <p className="card-text">
                      <b>Publisher:</b> {book.publisher}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-primary float-left"
                  onClick={() => MoveBooktoShelf(book.id, "wantToRead")}
                >
                  Move to Want to Read
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-middle"
                  onClick={() => MoveBooktoShelf(book.id, "read")}
                >
                  Move to Read
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={() => MoveBooktoShelf(book.id, "none")}
                >
                  Delete from bookshelf
                </button>
                <br />
              </div>
            );
          })}
      </div>
      <div className="row-mb5">
        <h1>Read</h1>
        {Object.keys(bookshelf).length > 0 &&
          bookshelf.read.map((book, idx) => {
            return (
              <div className="card" key={idx}>
                {book.imageLinks ? (
                  <img
                    className="card-img-top"
                    src={book.imageLinks.thumbnail}
                    alt=""
                    onClick={() =>
                      props.history.push(`/Bookdetails/${book.id}`)
                    }
                  />
                ) : (
                  <img
                    className="card-img-top"
                    src={StockImage}
                    alt=""
                    onClick={() =>
                      props.history.push(`/Bookdetails/${book.id}`)
                    }
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  {book.authors && (
                    <p className="card-text">
                      <b>Author:</b> {book.authors}
                    </p>
                  )}
                  {book.publisher && (
                    <p className="card-text">
                      <b>Publisher:</b> {book.publisher}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-primary float-left"
                  onClick={() => MoveBooktoShelf(book.id, "wantToRead")}
                >
                  Move to Want to Read
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-middle"
                  onClick={() => MoveBooktoShelf(book.id, "currentlyReading")}
                >
                  Move to Currently Reading
                </button>
                <button
                  type="button"
                  className="btn btn-primary float-right"
                  onClick={() => MoveBooktoShelf(book.id, "none")}
                >
                  Delete from bookshelf
                </button>
                <br />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Bookshelf;
