import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Booksearch from "./Booksearch";
import Bookshelf from "./Bookshelf";
import Bookdetails from "./Bookdetails";
import CustomNavbar from "./CustomNavbar";

//To do:
//Readme file & test installation instructions
//Clean up comments from App.jsx

//Nice to have:
//Search results display as a grid
//Pass search argument into prop history
//Port to react-native

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
