import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Booksearch from "./Booksearch";
import Bookshelf from "./Bookshelf";
import Bookdetails from "./Bookdetails";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Bookshelf} />
        <Route exact path="/Booksearch" component={Booksearch} />
        <Route path="/Bookdetails/:bookid" component={Bookdetails} />
      </Router>
    </div>
  );
}

export default App;
