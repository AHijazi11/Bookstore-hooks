import React, { useState, useEffect } from "react";
import axios from "axios";
import StockImage from "./Images/No-image-available.jpg";

function Bookdetails(props) {
  const bookid = props.history.location.pathname.slice(13);

  const [bookinfo, setBookinfo] = useState({});
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/book/${bookid}`)
      .then(data => {
        setBookinfo(data.data.book);
      })
      .catch(() => {
        sethasError(true);
      });
  }, [bookid]);

  const AddBooktoShelf = async (bookid, shelf) => {
    await axios.get(
      `http://localhost:7000/bookshelf/update/${bookid}/${shelf}`
    );
  };

  return (
    <div>
      <h1>Book Details</h1>
      <button
        type="button"
        className="btn btn-primary float-right"
        onClick={() => props.history.push("/Booksearch")}
      >
        Search
      </button>
      <button
        type="button"
        className="btn btn-primary float-left"
        onClick={() => props.history.push("/")}
      >
        Bookshelf
      </button>
      <br />
      <br />
      {hasError && <h2>Error Retrieving Data from Server!</h2>}
      {Object.keys(bookinfo).length > 0 && (
        <div className="card">
          {bookinfo.imageLinks ? (
            <img
              className="card-img-top"
              src={bookinfo.imageLinks.thumbnail}
              alt=""
            />
          ) : (
            <img className="card-img-top" src={StockImage} alt="" />
          )}
          <div className="card-body">
            <h5 className="card-title">{bookinfo.title}</h5>
            {bookinfo.authors && (
              <p className="card-text">
                <b>Author:</b> {bookinfo.authors}
              </p>
            )}
            {bookinfo.publisher && (
              <p className="card-text">
                <b>Publisher:</b> {bookinfo.publisher}
              </p>
            )}
            {bookinfo.averageRating && (
              <p className="card-text">
                <b>Rating:</b> {bookinfo.averageRating}
              </p>
            )}
            <p>{bookinfo.description}</p>
          </div>
          <button
            type="button"
            className="btn btn-primary float-left"
            onClick={() => AddBooktoShelf(bookid, "wantToRead")}
          >
            Add to Want to Read
          </button>
          <button
            type="button"
            className="btn btn-primary float-middle"
            onClick={() => AddBooktoShelf(bookid, "currentlyReading")}
          >
            Add to Currently Reading
          </button>
          <button
            type="button"
            className="btn btn-primary float-middle"
            onClick={() => AddBooktoShelf(bookid, "read")}
          >
            Add to Read
          </button>
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={() => AddBooktoShelf(bookid, "none")}
          >
            Delete from bookshelf
          </button>
        </div>
      )}
    </div>
  );
}

export default Bookdetails;
