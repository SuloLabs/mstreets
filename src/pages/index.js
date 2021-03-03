import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Jumbotron from 'react-bootstrap/Jumbotron'
import HeaderImage from "../images/header-image.jpg"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron fluid >
  <Container style={{paddingTop: '7vh'}}>
     <img src={HeaderImage} alt="" className="img-fluid"/>
    <h1>THE DUBAI EXPERIENCE</h1>
    <p>
    <strong>The Ultimate Urban Party - STOP EXISTING & START LIVING!</strong><br></br>
      5 Star Hotel w/Daily Breakfast -- Desert Safari with BBQ Dinner --Dubai and Abu Dhabi City Tour -- Day and Night Events -- Yacht and Pool Party
    </p>
    <Button variant="primary" href="https://www.eventbrite.com/e/the-dubai-experience-april-1-7-2021-tickets-96656834193?aff=malachistreets">Learn more</Button>
  </Container>
</Jumbotron>
    <Carousel className="d-none d-sm-block">
      {data.carouselPhotos.edges.map(image => (
        <Carousel.Item key={image.node.id}>
          <Img style={{maxHeight: '90vh'}}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('-').join(' ').split('.')[0]}
          />
          <Carousel.Caption>
            <h2>
            {image.node.base.split('-').join(' ').split('.')[0]}
            {' '}<Button href="#">Learn More</Button>
            </h2>
          </Carousel.Caption>
        </Carousel.Item>  
        
      ))}
    </Carousel>
    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql `
  query {
    carouselPhotos: allFile(filter: {relativeDirectory: {eq: "carousel"}, extension: {regex: "/(jpg)|(png)|(jpg)/"}}) {
      edges {
        node {
            id
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    }
  }
`
