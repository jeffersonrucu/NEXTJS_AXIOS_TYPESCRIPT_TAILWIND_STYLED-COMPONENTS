import styled from 'styled-components'

export const Title = styled.h1.attrs({
  className: 'text-9xl font-extrabold',
})`
  color: ${(props) => props.theme.primary};
`
