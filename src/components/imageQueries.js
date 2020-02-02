import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {Link} from 'gatsby'
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// ... component class

const GridItem = ({image, item, backSideColor, backSideText, title}) => {
  const data = useStaticQuery(graphql`
    query {
      canvas: file(relativePath: { eq: "canva.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
          }
      }
      }
      puzzle: file(relativePath: { eq: "puzzl.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
          }
      }
      }
      bigBen: file(relativePath: { eq: "bigBen.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400) {
              ...GatsbyImageSharpFluid
          }
      }
      }
      socket: file(relativePath: { eq: "chat.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 500) {
              ...GatsbyImageSharpFluid
          }
      }
      }
      tetris: file(relativePath: { eq: "tetri.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 267) {
              ...GatsbyImageSharpFluid
          }
      }
      }
      winter: file(relativePath: { eq: "winter.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 400) {
              ...GatsbyImageSharpFluid
          }
      }
      }
      life: file(relativePath: { eq: "life.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid
          }
      }
      }
    }
  `)


  return <Link className={item} to={`/${image}/`}>

      <Flippy
          flipOnHover={true} // default false
          flipDirection="horizontal" // horizontal or vertical
          // to use toggle method like this.flippy.toggle()
          // if you pass isFlipped prop component will be controlled component.
          // and other props, which will go to div
        >
          <FrontSide
          style={{ padding:'0px'}}
          >

          <Img fluid={data[image].childImageSharp.fluid} />

          </FrontSide>
          <BackSide style={{color:'black', backgroundColor: backSideColor, padding:'0px'}}>
              <h3 style={{textAlign: 'center'}}>{title}</h3>
              <p style={{padding:'10px'}}>{backSideText}</p>
          </BackSide>
        </Flippy>

  </Link>
}

export default GridItem
