'use client'
import { createGlobalStyle } from 'styled-components'
import { baseTheme } from './theme'

export default createGlobalStyle`
  * {
	  box-sizing: border-box;
	  padding: 0;
	  margin: 0;
    font-family: Courier New, monospace;
  }

  html,
  body {
  	max-width: 100vw;
  	overflow-x: hidden;
  }
  
  body {
	  background: ${baseTheme.colors.bg};
    width: 95%;
  }

  a {
	  color: inherit;
	  text-decoration: none;
  }
`