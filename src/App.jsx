import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Booksearch from "./Booksearch";
import Bookshelf from "./Bookshelf";
import Bookdetails from "./Bookdetails";
import CustomNavbar from "./CustomNavbar";

//To do:
//Fix bookshelf gooey menu
//Readme file & test installation instructions
//Clean up comments from App.jsx

//Nice to have:
//Pass search argument into prop history
//Search results display as a grid
//Replace gooey menu words with icons
//Nicer font for bookshelf categories

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
