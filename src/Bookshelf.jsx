import React, { useState, useEffect } from "react";
import axios from "axios";
import StockImage from "./Images/No-image-available.jpg";
import { Media } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { Menu, Item } from "react-gooey-nav";
import Spinner from "./Spinner";

function Bookshelf(props) {
  const [bookshelf, setBookshelf] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:7000/bookshelf")
      .then(data => {
        setBookshelf(data.data.books);
        setisLoading(false);
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
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <div className="row-mb5">
            <h1>Want to Read</h1>
            {Object.keys(bookshelf).length > 0 &&
              bookshelf.wantToRead.map((book, idx) => {
                return (
                  <Media key={idx}>
                    <img
                      className="mr-3"
                      src={
                        book.imageLinks ? book.imageLinks.thumbnail : StockImage
                      }
                      alt=""
                      width={150}
                      height={200}
                      onClick={() =>
                        props.history.push(`/Bookdetails/${book.id}`)
                      }
                    />
                    <Media.Body>
                      <div className="d-flex justify-content-center">
                        <Menu orientation="bottom">
                          <Item
                            title="Cool!"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "currentlyReading");
                                e.preventDefault();
                              }
                            }}
                          >
                            Reading
                          </Item>
                          <Item
                            title="Add to read"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "read");
                                e.preventDefault();
                              }
                            }}
                          >
                            Read
                          </Item>
                          <Item
                            title="Add to read"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "none");
                                e.preventDefault();
                              }
                            }}
                          >
                            <i className="fa fa-trash fa-lg" />
                          </Item>
                        </Menu>
                      </div>
                      <h5>{book.title}</h5>
                      {book.authors && (
                        <p>
                          <b>Author:</b> {book.authors}
                        </p>
                      )}
                      {book.publisher && (
                        <p>
                          <b>Publisher:</b> {book.publisher}
                        </p>
                      )}
                      {book.averageRating && (
                        <StarRatings
                          rating={book.averageRating}
                          starDimension="25px"
                          starSpacing="5px"
                          starRatedColor="gold"
                        />
                      )}
                    </Media.Body>
                  </Media>
                );
              })}
          </div>
          <div className="row-mb5">
            <h1>Currently Reading</h1>
            {Object.keys(bookshelf).length > 0 &&
              bookshelf.currentlyReading.map((book, idx) => {
                return (
                  <Media key={idx}>
                    <img
                      className="mr-3"
                      src={
                        book.imageLinks ? book.imageLinks.thumbnail : StockImage
                      }
                      alt=""
                      width={150}
                      height={200}
                      onClick={() =>
                        props.history.push(`/Bookdetails/${book.id}`)
                      }
                    />
                    <Media.Body>
                      <div className="d-flex justify-content-center">
                        <Menu orientation="bottom">
                          <Item
                            title="Cool!"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "wantToRead");
                                e.preventDefault();
                              }
                            }}
                          >
                            Wishlist
                          </Item>
                          <Item
                            title="Add to read"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "read");
                                e.preventDefault();
                              }
                            }}
                          >
                            Read
                          </Item>
                          <Item
                            title="Add to read"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "none");
                                e.preventDefault();
                              }
                            }}
                          >
                            <i className="fa fa-trash fa-lg" />
                          </Item>
                        </Menu>
                      </div>
                      <h5>{book.title}</h5>
                      {book.authors && (
                        <p>
                          <b>Author:</b> {book.authors}
                        </p>
                      )}
                      {book.publisher && (
                        <p>
                          <b>Publisher:</b> {book.publisher}
                        </p>
                      )}
                      {book.averageRating && (
                        <StarRatings
                          rating={book.averageRating}
                          starDimension="25px"
                          starSpacing="5px"
                          starRatedColor="gold"
                        />
                      )}
                    </Media.Body>
                  </Media>
                );
              })}
          </div>
          <div className="row-mb5">
            <h1>Read</h1>
            {Object.keys(bookshelf).length > 0 &&
              bookshelf.read.map((book, idx) => {
                return (
                  <Media key={idx}>
                    <img
                      className="mr-3"
                      src={
                        book.imageLinks ? book.imageLinks.thumbnail : StockImage
                      }
                      alt=""
                      width={150}
                      height={200}
                      onClick={() =>
                        props.history.push(`/Bookdetails/${book.id}`)
                      }
                    />
                    <Media.Body>
                      <div className="d-flex justify-content-center">
                        <Menu orientation="bottom">
                          <Item
                            title="Cool!"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "wantToRead");
                                e.preventDefault();
                              }
                            }}
                          >
                            Wishlist
                          </Item>
                          <Item
                            title="Cool!"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "currentlyReading");
                                e.preventDefault();
                              }
                            }}
                          >
                            Reading
                          </Item>
                          <Item
                            title="Add to read"
                            componentProps={{
                              onClick: e => {
                                MoveBooktoShelf(book.id, "none");
                                e.preventDefault();
                              }
                            }}
                          >
                            <i className="fa fa-trash fa-lg" />
                          </Item>
                        </Menu>
                      </div>
                      <h5>{book.title}</h5>
                      {book.authors && (
                        <p>
                          <b>Author:</b> {book.authors}
                        </p>
                      )}
                      {book.publisher && (
                        <p>
                          <b>Publisher:</b> {book.publisher}
                        </p>
                      )}
                      {book.averageRating && (
                        <StarRatings
                          rating={book.averageRating}
                          starDimension="25px"
                          starSpacing="5px"
                          starRatedColor="gold"
                        />
                      )}
                    </Media.Body>
                  </Media>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookshelf;
