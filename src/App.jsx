import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Booksearch from "./Components/Booksearch";
import Bookshelf from "./Components/Bookshelf";
import Bookdetails from "./Components/Bookdetails";
import CustomNavbar from "./Components/CustomNavbar";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Router>
        <Route exact path="/" component={Bookshelf} />
        <Route path="/Booksearch" component={Booksearch} />
        <Route path="/Bookdetails/" component={Bookdetails} />
      </Router>
    </div>
  );
}

export default App;
