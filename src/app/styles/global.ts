'use client'
import { createGlobalStyle } from 'styled-components'
import { baseTheme } from './theme'

export default createGlobalStyle`
  * {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
  }

  html,
  body {
  	max-width: 100vw;
  	overflow-x: hidden;
  }
  
  body {
	background: ${baseTheme.colors.bg};
  }

  a {
	color: inherit;
	text-decoration: none;
  }
`