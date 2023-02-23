import { Page } from "@/components/Page";
import { Breadcrumbs, Card, Container, Divider, Link, Stack, Typography } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { PATH } from "@/routes/routes";

export default function Index() {

    return (
        <Page title="Podcasts">
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
                            Podcasts
                        </Typography>
                    </Breadcrumbs>

                    <Card sx={{ p: 5, borderRadius: 10, textAlign: 'justify' }}>
                        <Typography variant="h4" gutterBottom>Podcast Cyber morning call #227</Typography>

                        <Stack>
                            <Typography variant="h5" gutterBottom>Ativos afetados</Typography>

                            <Typography variant="h6" gutterBottom>Crescimento exponencial de uso de IA</Typography>
                            <Typography gutterBottom>Considerando que IAs podem ser manipuladas considerando estratégias políticas, a reputação de empresas e os países pode ser comprometida bem como pessoas podem ser manipuladas, de modo que elas não consigam distinguir o fato da ficção.</Typography>

                            <Typography variant="h6" gutterBottom>Dados vazados</Typography>
                            <Typography gutterBottom>Falhas de injeções SQL permitiram com que informações fossem vazadas de instituições financeiras e utilizadas em e-mails de phishing para torna-los mais verossímeis</Typography>

                            <Typography variant="h6" gutterBottom>Invasão de sistemas</Typography>
                            <Typography gutterBottom>Com o acesso a apps e sistemas utilizados dentro de montadores de veículos, foi possível ter acesso remoto e fazer todo e qualquer acionamento em carros, bem como foi possível também ter acesso a partes administrativas como adulterar emplacamento </Typography>

                            <Typography variant="h6" gutterBottom>Phishing</Typography>
                            <Typography gutterBottom>Flipper zero, uma ferramenta que proporcionava fazer hacking de hardware em ondas de radio frequência, foi divulgado amplamente por algumas contas que diziam vender o aparelho, mas atuavam apenas por phishing de dados e dinheiro. </Typography>



                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <Stack>
                            <Typography variant="h5" gutterBottom>Requisitos de segurança afetados</Typography>

                            <Typography variant="h6" gutterBottom>Crescimento exponencial de uso de IA</Typography>
                            <Typography gutterBottom>Irretratabilidade pela justa causa de que IAs podem, por meio de estratégias, pôr pessoas em duvída em saber o que é fato ou fake</Typography>
                            <Typography gutterBottom>Autenticidade pela justa causa de que IAs podem manipular resultados como quiser, onde uma mentira pode se tornar verdade</Typography>

                            <Typography variant="h6" gutterBottom>Dados vazados</Typography>
                            <Typography gutterBottom>Confidencialidade pois dados vazados podem ser parte de dados privados que somente pessoas autorizadas tinham acesso</Typography>

                            <Typography variant="h6" gutterBottom>Invasão de sistemas</Typography>
                            <Typography gutterBottom>Confidencialidade, visto que com o acesso ao sistema dados podem ser espionados e roubados, sejam eles privados ou não</Typography>
                            <Typography gutterBottom>Integridade pela justa causa de que uma vez função não pretendidas sejam executadas, a integridade de sistemas e dados podem cair</Typography>
                            <Typography gutterBottom>Disponibilidade pela justa causa de que integridade de serviços afetam diretamente na disponibilidade dos mesmos</Typography>

                            <Typography variant="h6" gutterBottom>Phishing</Typography>
                            <Typography gutterBottom>Irretratabilidade pela justa causa de que as pessoas não tinham noção se a loja que fazia a venda do flipper zero era verdadeira ou não </Typography>
                            <Typography gutterBottom>Autenticidade pela justa causa de que contas e empresas atuavam como uma loja falsa para fazer a venda do flipper zero </Typography>


                        </Stack>
                    </Card>

                </Stack>
            </Container>

        </Page>
    )
}
