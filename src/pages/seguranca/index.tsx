import { PATH } from "@/routes/routes"
import { Page } from "@/components/Page"
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { Breadcrumbs, Card, Container, Link, Stack, Typography } from "@mui/material"

export default function Index() {
    return (
        <Page title="Segurança">
            <Container maxWidth="xl" sx={{ py: 12 }}>

                <Stack gap={3}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        <Link underline="hover" key="1" color="inherit" href={PATH.root}>
                            Conceitos gerais
                        </Link>
                        <Typography key="3" color="text.primary">
                            Segurança
                        </Typography>
                    </Breadcrumbs>

                    <Card sx={{ p: 30, borderRadius: 10 }}>
                        <Stack>

                        </Stack>
                    </Card>
                </Stack>
            </Container>

        </Page>
    )
}
