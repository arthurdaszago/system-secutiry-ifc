import Menu from "@/components/menu";
import type { AppProps } from "next/app";
import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });
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
  );
}
