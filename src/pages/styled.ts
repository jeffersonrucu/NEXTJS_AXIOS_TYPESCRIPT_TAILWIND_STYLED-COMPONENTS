import styled from 'styled-components'

export const Title = styled.div.attrs({
  className: 'font-extrabold text-3xl sm:text-5xl 2xl:text-8xl',
})`
  color: ${(props) => props.theme.secondary};

  @media (min-width: 1536px) {
    line-height: 5rem;
  }

  strong,
  b {
    color: ${(props) => props.theme.primary} !important;
  }
`

export const SubTitle = styled.div.attrs({
  className: 'font-normal mt-10 text-sm 2xl:text-xl',
})`
  color: ${(props) => props.theme.secondary};

  strong,
  b {
    color: ${(props) => props.theme.primary} !important;
  }
`

export const Hero = styled.div`
  &::before {
    content: '';
    display: block;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: linear-gradient(${(props) => props.theme.gradient});
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    @media (min-width: 640px) {
      width: 80%;
    }
  }
`
