import React from 'react'
import { injectGlobal } from 'emotion'
import globalStyle from './globalStyle';


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