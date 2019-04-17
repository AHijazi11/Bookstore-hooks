import React, { useState } from "react";
import "./Custom Button.scss";

function CustomButton(props) {
  const [clickedclass, setClickedclass] = useState(false);

  const ToggleClass = () => setClickedclass(!clickedclass);

  const AddBooktoShelf = props.MoveBooktoShelf;

  return (
    <>
      <div>
        <div className="button" onClick={ToggleClass}>
          <i className="fa fa-bars fa-1x" />
        </div>
        <div
          className={"ShelfManagement " + (clickedclass && "clicked")}
          onClick={() => {
            if (props.shelf !== "wantToRead") {
              AddBooktoShelf(props.bookid, "wantToRead");
            }
          }}
        >
          <i className="fa fa-heart" />
        </div>
        <div
          className={"ShelfManagement " + (clickedclass && "clicked")}
          onClick={() => {
            if (props.shelf !== "currentlyReading") {
              AddBooktoShelf(props.bookid, "currentlyReading");
            }
          }}
        >
          <i className="fa fa-hourglass" />
        </div>
        <div
          className={"ShelfManagement " + (clickedclass && "clicked")}
          onClick={() => {
            if (props.shelf !== "read") {
              AddBooktoShelf(props.bookid, "read");
            }
          }}
        >
          <i className="fa fa-check-square" />
        </div>
        <div
          className={"ShelfManagement " + (clickedclass && "clicked")}
          onClick={() => {
            AddBooktoShelf(props.bookid, "none");
          }}
        >
          <i className="fa fa-trash" />
        </div>
      </div>
    </>
  );
}

export default CustomButton;
