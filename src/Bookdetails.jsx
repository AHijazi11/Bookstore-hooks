import React, { useState, useEffect } from "react";
import axios from "axios";
import StockImage from "./Images/No-image-available.jpg";
import { Media } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { Menu, Item } from "react-gooey-nav";

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
      {hasError && <h2>Error Retrieving Data from Server!</h2>}
      {Object.keys(bookinfo).length > 0 && (
        <Media>
          <img
            className="mr-3"
            src={
              bookinfo.imageLinks ? bookinfo.imageLinks.thumbnail : StockImage
            }
            alt=""
            width={180}
            height={260}
          />
          <Media.Body>
            <h5>{bookinfo.title}</h5>
            {bookinfo.authors && (
              <p>
                <b>Author:</b> {bookinfo.authors}
              </p>
            )}
            {bookinfo.publisher && (
              <p>
                <b>Publisher:</b> {bookinfo.publisher}
              </p>
            )}
            <p>{bookinfo.description}</p>
            {bookinfo.averageRating && (
              <StarRatings
                rating={bookinfo.averageRating}
                starDimension="25px"
                starSpacing="5px"
                starRatedColor="gold"
              />
            )}
          </Media.Body>
        </Media>
      )}
      <div className="d-flex justify-content-center">
        <Menu orientation="bottom">
          <Item
            title="Cool!"
            componentProps={{
              onClick: e => {
                AddBooktoShelf(bookid, "wantToRead");
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
                AddBooktoShelf(bookid, "currentlyReading");
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
                AddBooktoShelf(bookid, "read");
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
                AddBooktoShelf(bookid, "none");
                e.preventDefault();
              }
            }}
          >
            Delete
          </Item>
        </Menu>
      </div>
    </div>
  );
}

export default Bookdetails;
