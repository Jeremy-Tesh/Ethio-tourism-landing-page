import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../App.css";
import { ReactComponent as Facebook } from "../assets/svg/facebook.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../assets/svg/linkedin.svg";
import { ReactComponent as Instagram } from "../assets/svg/instagram.svg";

class Footer extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="footerBody">
        <Container>
          <header className="headerTitle text-center">
            <p>
              <b>CAN'T WAIT TO GET INVOLVED</b>
            </p>
            <p>
              <b>CONNECT WITH US NOW</b>
            </p>
          </header>
          <footer className="svg-group text-center">
            <Row>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Facebook
                      width="40"
                      height="45"
                      strokeWidth="1"
                      style={{ color: "959ca4" }}
                    />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Twitter
                      width="45"
                      height="45"
                      strokeWidth="1"
                      style={{ color: "959ca4" }}
                    />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Linkedin
                      width="45"
                      height="45"
                      strokeWidth="1"
                      style={{ color: "959ca4" }}
                    />
                  </a>
                </div>
              </Col>
              <Col md="3" xs="6">
                <div className="svg-card-3">
                  <a href="#">
                    <Instagram
                      width="45"
                      height="45"
                      strokeWidth="1"
                      style={{ color: "959ca4" }}
                    />
                  </a>
                </div>
              </Col>
            </Row>
            <hr />
            <br />
            <p>copyright 2021 | Ethiopia Tourism </p>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;
