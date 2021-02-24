import { Img, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import container from 'react-bootstrap/Container';
import Container from "react-bootstrap/Container";
import LogoImg from "../images/logo.png"

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
                Page 2
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

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
