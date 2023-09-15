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


  .alert {
    position: absolute;
    left: 0;
    width: 96%;
    height: auto;
    padding: 10px;
    margin: 10px;
    line-height: 1.8;
    border-radius: 5px;
    font-family: sans-serif;
    font-weight: 400;
    transition: opacity 0.4s, visibility 0.4s;
  }
  .error {
    background-color: rgba(255, 186, 186, 0.95);
    border: 1px solid #FF333E;
    color: #D8000C;
  }
  .errorText {
    display: table;
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
  }
  .clear {
    clear: both;
  }

  .success{
    background-color: rgba(223, 242, 191, 0.95);
    border: 1px solid #4F8A10;
    color: #4F8A10;
  }
`