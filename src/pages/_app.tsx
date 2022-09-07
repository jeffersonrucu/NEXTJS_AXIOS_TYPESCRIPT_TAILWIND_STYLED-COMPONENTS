import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import '../theme/tailwind.css'
import GlobalStyle from '../theme/global'
import { lightTheme } from '../theme/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
