import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap');
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.bodyBackground};
    color: ${({ theme }) => theme.colors.body};
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    margin: 0;
   
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`

export default GlobalStyles