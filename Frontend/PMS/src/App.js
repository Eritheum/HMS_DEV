import React from "react";

//components
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Nav from "./components/nav/Nav";
import About from "./components/pages/About";
import Booking from "./components/pages/booking/Booking";
import Reservation from "./components/pages/booking/Reservation";
import Record from "./components/pages/booking/Record";

//routers
import {BrowserRouter as Router, Switch, Route}

//Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div className="App">
    <Header />
    <Home />
    <div>App Page</div>
    <GlobalStyle />
  </div>
);

export default App;
