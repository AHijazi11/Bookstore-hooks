import React, { Component } from "react";
import axios from "axios";

class Bookshelf extends Component {
  state = {
    bookshelf: {},
    hasError: false
  };

  componentDidMount = async () => {
    await axios
      .get("http://localhost:7000/bookshelf")
      .then(data => {
        this.setState({ bookshelf: data.data.books });
      })
      .catch(() => this.setState({ hasError: true }));
  };

  MoveBooktoShelf = async (bookid, shelf) => {
    await axios
      .get(`http://localhost:7000/bookshelf/update/${bookid}/${shelf}`)
      .then(data => {
        this.setState({ bookshelf: data.data.books });
      })
      .catch(() => this.setState({ hasError: true }));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">My Bookshelf</h1>
        <button
          type="button"
          className="btn btn-primary float-right"
          onClick={() => this.props.history.push("/Booksearch")}
        >
          Click here to search{" "}
        </button>
        {this.state.hasError && <h2>Error Retrieving Data from Server!</h2>}
        <div className="row-mb5">
          <h1>Want to Read</h1>
          {Object.keys(this.state.bookshelf).length > 0 &&
            this.state.bookshelf.wantToRead.map((book, idx) => {
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
                    onClick={() =>
                      this.props.history.push(`/Bookdetails/${book.id}`)
                    }
                  >
                    Book Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-middle"
                    onClick={() =>
                      this.MoveBooktoShelf(book.id, "currentlyReading")
                    }
                  >
                    Move to Currently Reading
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-middle"
                    onClick={() => this.MoveBooktoShelf(book.id, "read")}
                  >
                    Move to Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={() => this.MoveBooktoShelf(book.id, "none")}
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
          {Object.keys(this.state.bookshelf).length > 0 &&
            this.state.bookshelf.currentlyReading.map((book, idx) => {
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
                    onClick={() =>
                      this.props.history.push(`/Bookdetails/${book.id}`)
                    }
                  >
                    Book Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-left"
                    onClick={() => this.MoveBooktoShelf(book.id, "wantToRead")}
                  >
                    Move to Want to Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-middle"
                    onClick={() => this.MoveBooktoShelf(book.id, "read")}
                  >
                    Move to Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={() => this.MoveBooktoShelf(book.id, "none")}
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
          {Object.keys(this.state.bookshelf).length > 0 &&
            this.state.bookshelf.read.map((book, idx) => {
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
                    onClick={() =>
                      this.props.history.push(`/Bookdetails/${book.id}`)
                    }
                  >
                    Book Details
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-left"
                    onClick={() => this.MoveBooktoShelf(book.id, "wantToRead")}
                  >
                    Move to Want to Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-middle"
                    onClick={() =>
                      this.MoveBooktoShelf(book.id, "currentlyReading")
                    }
                  >
                    Move to Currently Reading
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    onClick={() => this.MoveBooktoShelf(book.id, "none")}
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
}

export default Bookshelf;
