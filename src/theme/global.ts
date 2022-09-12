import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  .button-primary {
    background-color: ${(props) => props.theme.primary};
    border: 3px solid ${(props) => props.theme.primary};
    transition: 0.6s all;
    display: flex;
    justify-content: center;

    @media (min-width: 1536px) {
      min-width: 17.188rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.primary_hover};
    }

  }
  
  .button-primary-light {
    background-color: ${(props) => props.theme.light};
    border: 3px solid ${(props) => props.theme.primary};
    transition: 0.6s all;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.primary};

    @media (min-width: 1536px) {
      min-width: 17.188rem;
    }

    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.light};
    }
  }
`
