import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Carousel from "react-bootstrap/Carousel"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Carousel>
      {data.carouselPhotos.edges.map(image => (
        <Carousel.Item key={image.node.id}>
          <Img
            
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('-').join(' ').split('.')[0]}
          />
        </Carousel.Item>
        
      ))}
    </Carousel>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
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
