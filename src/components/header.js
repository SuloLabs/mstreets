import { Img, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import container from 'react-bootstrap/Container';
import Container from "react-bootstrap/Container";
import LogoImg from "../images/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

//import Button from 'react-bootstrap/Button';

const Header = ({ siteTitle, data }) => (
  <header>
    <Navbar bg="primary" expand="md" variant="dark" fixed="top" style={{minHeight: '5vh'}}>
      <Container>
        <Navbar.Brand href="/"><img src={LogoImg} alt="" style={{maxHeight: '40px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav as="ul" className="ml-auto">
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
                About Me
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
                News
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
                Events
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
                Store
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
                Blog
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
                Contact
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
                Management Team
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/page-2" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faInstagram} size="1x" />
              </Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


