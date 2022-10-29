import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Nunito,'sans-serif'; 
    background: #071422;
  }

  ul{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`
