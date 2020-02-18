import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Routes from "./components/Routes";

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav auth={auth} />
        <Routes auth={auth} setAuth={setAuth} />
        <Footer />
      </div>
    </Router>
  );
}
