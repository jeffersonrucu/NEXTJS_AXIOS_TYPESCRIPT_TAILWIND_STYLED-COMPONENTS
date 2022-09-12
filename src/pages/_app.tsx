import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../theme/tailwind.css'
import GlobalStyle from '../theme/global'
import { lightTheme } from '../theme/theme'
import { useEffect } from 'react'
import { setJWTToken } from '../middleware/auth'
import { getLocalStorange } from '../utils/localStorage'

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!getLocalStorange('token')) setJWTToken(window.location.pathname)
  }, [])

  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
