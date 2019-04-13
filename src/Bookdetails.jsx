import React, { useState, useEffect } from "react";
import axios from "axios";
import StockImage from "./Images/No-image-available.jpg";
import { Media } from "react-bootstrap";
import StarRatings from "react-star-ratings";
import { Menu, Item } from "react-gooey-nav";
import Spinner from "./Spinner";

function Bookdetails(props) {
  const bookid = props.history.location.pathname.slice(13);
  const [bookinfo, setBookinfo] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [hasError, sethasError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/book/${bookid}`)
      .then(data => {
        setBookinfo(data.data.book);
        setisLoading(false);
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
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(bookinfo).length > 0 && (
          <Media>
            <img
              className="mr-3"
              src={
                bookinfo.imageLinks ? bookinfo.imageLinks.thumbnail : StockImage
              }
              alt=""
              width={150}
              height={200}
            />
            <Media.Body>
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
                    <i className="fa fa-trash fa-lg" />
                  </Item>
                </Menu>
              </div>
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
              {bookinfo.averageRating && (
                <StarRatings
                  rating={bookinfo.averageRating}
                  starDimension="25px"
                  starSpacing="5px"
                  starRatedColor="gold"
                />
              )}
              <p>{bookinfo.description}</p>
            </Media.Body>
          </Media>
        )
      )}
    </div>
  );
}

export default Bookdetails;
