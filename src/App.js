import React from "react";
import Home from "./pages/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";

import Tour from "./pages/Tour";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import { useAuth } from "./contexts/AuthContext";
import Footer from "./components/Footer";

const App = () => {
  const { currentUser } = useAuth();
  if (currentUser)
    return (
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tour" component={Tour} />

          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  else
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} />
          <Route
            path="/signup"
            component={() => {
              <h1>sign up</h1>;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
};

export default App;
