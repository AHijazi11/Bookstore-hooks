import React, { useState } from "react";
import "./Gooey Button.scss";

function GooeyButton(props) {
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

      {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg> */}
    </>
  );
}

export default GooeyButton;
