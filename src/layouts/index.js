import React from 'react'
import './index.css'

const DefaultLayout = ({ children }) => <div>{children()}</div>

export default DefaultLayout


export const query = graphql`
  query BG {
    background: imageSharp(id: { regex: "/bg/" }) {
      sizes(maxWidth: 1240) {
        ... GatsbyImageSharpSizes
      }
    }
  }
`