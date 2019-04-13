import React, { useState, useEffect } from "react";
import axios from "axios";
import StockImage from "./Images/No-image-available.jpg";
import Spinner from "./Spinner";

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
      <div className="text-center">
        <br />
        <br />
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control text-center"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            value={searchfield}
            onChange={Search}
            placeholder="Enter Book Title or Author"
          />
        </div>
      </div>
      <br />
      <br />
      {hasError && <h2>Error Retrieving Data from Server!</h2>}
      {isLoading ? (
        <Spinner />
      ) : Array.isArray(searchresults) &&
        searchcomplete &&
        searchresults.length === 0 ? (
        <h2>No results found</h2>
      ) : (
        Array.isArray(searchresults) &&
        searchresults.length > 0 &&
        searchresults.map((book, idx) => {
          return (
            <div key={idx}>
              <div className="card">
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
                  <h4 className="card-title">{book.title}</h4>
                  <p>{book.authors}</p>
                </div>
              </div>
              <br />
            </div>
          );
        })
      )}
    </div>
  );
}

export default Booksearch;
