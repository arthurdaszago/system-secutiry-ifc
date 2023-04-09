import { Page } from "@/components/Page";
import { PATH } from "@/routes/routes";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export default function Index() {
  return (
    <Page title="Página inicial">
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Box>
          <Typography paragraph variant="h6" sx={{ textAlign: 'center' }}>
            Portfólio - Segurança de sistemas
          </Typography>

          <Stack mt={6}>
            <Box
              sx={{
                rowGap: 3,
                columnGap: 2,
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  xl: "repeat(3, 1fr)",
                },
              }}
            >
              <Link href={PATH.concepts}>
                <Card>
                  <CardContent>
                    <Typography>Conceitos gerais</Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link href={PATH.podcasts.root}>
                <Card>
                  <CardContent>
                    <Typography>Podcasts</Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link href={PATH.ataques_ciberneticos.root}>
                <Card>
                  <CardContent>
                    <Typography>Ataques cibernéticos / Playbooks</Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link href={PATH.security.root}>
                <Card>
                  <CardContent>
                    <Typography>Segurança mobile</Typography>
                  </CardContent>
                </Card>
              </Link>

              <Link href={PATH.firewall}>
                <Card>
                  <CardContent>
                    <Typography>Firewall</Typography>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Page>
  );
}
