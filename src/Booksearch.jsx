import React, { useState, useEffect } from "react";
import axios from "axios";

function Booksearch(props) {
  const [searchfield, setSearchfield] = useState("");
  const [searchresults, setSearchresults] = useState([]);
  const [searchcomplete, setSearchcomplete] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [hasError, sethasError] = useState(false);

  const Search = e => {
    setSearchfield(e.target.value);
  };

  useEffect(() => {
    if (searchfield) {
      setisLoading(true);
      sethasError(false);
      axios
        .get(`http://localhost:7000/books/search/${searchfield}`)
        .then(data => {
          setSearchresults(data.data.books);
          setisLoading(false);
          setSearchcomplete(true);
        })
        .catch(() => {
          sethasError(true);
          setisLoading(false);
        });
    }
  }, [searchfield]);

  return (
    <div>
      <h1 className="text-center">Search for any book</h1>
      <input
        value={searchfield}
        onChange={Search}
        placeholder="Enter Book Title or Author"
      />
      <button
        type="button"
        className="btn btn-primary float-right"
        onClick={() => props.history.push("/")}
      >
        My Bookshelf
      </button>
      <br />
      <br />
      {hasError && <h2>Error Retrieving Data from Server!</h2>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : Array.isArray(searchresults) &&
        searchcomplete &&
        searchresults.length === 0 ? (
        <h2>No results found</h2>
      ) : (
        Array.isArray(searchresults) &&
        searchresults.length > 0 &&
        searchresults.map((book, idx) => {
          return (
            <div className="card" key={idx}>
              {book.imageLinks && (
                <img
                  className="card-img-top"
                  src={book.imageLinks.thumbnail}
                  alt=""
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => props.history.push(`/Bookdetails/${book.id}`)}
                >
                  {" "}
                  Book Details
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Booksearch;
