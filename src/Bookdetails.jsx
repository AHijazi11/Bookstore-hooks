import React, { useState, useEffect } from "react";
import axios from "axios";

function Bookdetails(props) {
  const bookid = props.history.location.pathname.slice(13);

  const [bookinfo, setBookinfo] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/book/${bookid}`)
      .then(data => {
        setBookinfo(data.data.book);
      })
      .catch(() => {
        sethasError(true);
        setisLoading(false);
      });
  }, [bookid]);

  // AddBooktoShelf = async (bookid, shelf) => {
  //   await axios.get(
  //     `http://localhost:7000/bookshelf/update/${bookid}/${shelf}`
  //   );
  // };

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
        My Bookshelf
      </button>
      <br />
      <br />
      {Object.keys(bookinfo).length > 0 && (
        <div className="card">
          {bookinfo.imageLinks && (
            <img
              className="card-img-top"
              src={bookinfo.imageLinks.thumbnail}
              alt=""
            />
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
            onClick={() => this.AddBooktoShelf(bookid, "wantToRead")}
          >
            Add to Want to Read
          </button>
          <button
            type="button"
            className="btn btn-primary float-middle"
            onClick={() => this.AddBooktoShelf(bookid, "currentlyReading")}
          >
            Add to Currently Reading
          </button>
          <button
            type="button"
            className="btn btn-primary float-middle"
            onClick={() => this.AddBooktoShelf(bookid, "read")}
          >
            Add to Read
          </button>
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={() => this.AddBooktoShelf(bookid, "none")}
          >
            Delete from bookshelf
          </button>
        </div>
      )}
    </div>
  );
}

export default Bookdetails;
