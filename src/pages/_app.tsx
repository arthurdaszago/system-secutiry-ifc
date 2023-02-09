import Menu from '@/components/menu'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  return (
    <ThemeProvider theme={theme}>

      <Menu />

      <Box component="main">
        <Container maxWidth="xl">
          <Component {...pageProps} />
        </Container>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  )
}
