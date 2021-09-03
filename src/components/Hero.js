import React from "react";
import { Button } from "reactstrap";
import "../App.css";
import { Redirect, Link } from "react-router-dom";
const Hero = () => (
  <div>
    <main className="cover-page" id="hero">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Ethiopia Tourism</h1>
          <h3>Tours | Travel | Guide</h3>
          <Link className="btn btn-primary" outline color="warning" to="/about">
            Explore More
          </Link>
        </div>
      </section>
    </main>
  </div>
);

export default Hero;
