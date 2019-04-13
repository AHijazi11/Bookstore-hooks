import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Booksearch from "./Booksearch";
import Bookshelf from "./Bookshelf";
import Bookdetails from "./Bookdetails";
import CustomNavbar from "./CustomNavbar";

//To do:
//Pass search argument into prop history
//Change bookshelf to media
//Replace gooey menu words with icons
//Fix bookshelf logo
//Add spinner to bookshelf & bookdetails
//Compare to project requirements
//Readme file & test instructions

function App() {
  return (
    <div>
      <CustomNavbar />
      <Router>
        <Route exact path="/" component={Bookshelf} />
        <Route exact path="/Booksearch" component={Booksearch} />
        <Route path="/Bookdetails/:bookid" component={Bookdetails} />
      </Router>
    </div>
  );
}

export default App;
