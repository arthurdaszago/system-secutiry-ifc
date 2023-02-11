import { Page } from "@/components/Page";
import { Breadcrumbs, Card, Container, Link, Stack, Typography } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { PATH } from "@/routes/routes";


function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
}

export default function Index() {

    return (
        <Page title="Podcasts">
            <Container maxWidth="xl" sx={{ py: 12 }}>

                <Stack gap={3}>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        <Link underline="hover" key="1" color="inherit" href={PATH.root} onClick={handleClick}>
                            Conceitos gerais
                        </Link>
                        <Typography key="3" color="text.primary">
                            Podcasts
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
