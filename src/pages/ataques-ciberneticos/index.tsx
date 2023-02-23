import { Page } from "@/components/Page";
import { Breadcrumbs, Card, Container, Divider, Link, Stack, Typography } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { PATH } from "@/routes/routes";

export default function Index() {

    return (
        <Page title="Ataques cibernéticos">
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
                            Ataques cibernéticos
                        </Typography>
                    </Breadcrumbs>

                    <Card sx={{ p: 5, borderRadius: 10, textAlign: 'justify' }}>
                        <Typography variant="h4" gutterBottom>Ataques cibernéticos</Typography>

                        <Stack>
                            <Typography variant="h5" gutterBottom>Zero day exploit</Typography>

                            <Typography variant="h6" gutterBottom>O que é, o que faz</Typography>
                            <Typography variant="body1" gutterBottom>O que faz/ o que é: trata-se de um ataque que acontece quando uma vulnerabilidade é descoberta por atacantes antes mesmo de desenvolvedores descobrirem, e no momento que descobrem, tem um tempo de aviso prévio de “zero dias” para contornar a vulnerabilidades antes que ataques aconteçam. Este tipo de ataque ocorre sempre que uma aplicação nova é lançada em produção, por meios de vulnerabilidades encontradas. Nesse instante, desenvolvedores detêm de zero dias para contornar o ataque. Normalmente este tipo de ataque ocorre com maior frequência em sistemas que testes para encontrar falhas de segurança não ocorrem ou são falhos.</Typography>

                            <Typography variant="h6" gutterBottom>Como funciona</Typography>
                            <Typography variant="body1" gutterBottom>como funciona: quando a vulnerabilidade é encontrada, o que atacantes fazem é primeiramente analisar as brechas, posteriormente criar e distribuir códigos malwares por meio delas. O malware, se usado/executado, prejudica e explora os dispositivos com o intuito de roubo de dados para que criminosos o utilizem para obter ganhos financeiros.</Typography>

                            <Typography variant="h6" gutterBottom>Operacionalização</Typography>
                            <Typography variant="body1" gutterBottom>operacionalização: a primeira etapa é identificar softwares que foram recentemente lançados para encontrar vulnerabilidades e por meio delas espalhar malwares. Encontrado um software com vulnerabilidades, a segunda etapa é explorar o que é possível ser feito por meio dela, como injetar scripts de códigos malwares. Se possível então, os criminosos injetam malwares nestes softwares, e nisso usuários do softwares podem executar os scripts que permitirão que os criminosos possam roubar informações.</Typography>

                            <Typography variant="h6" gutterBottom>Recursos/ativos afetados</Typography>
                            <Typography variant="body1" gutterBottom>recursos/ativos afetados: como o zero day exploit funciona através de malwares injetados em softwares, então o principal ativo afetado são dados dos usuários que existem em seus dispositivos, com o intuito de os utilizar para obter ganhos financeiros.</Typography>

                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <Stack>
                            <Typography variant="h5" gutterBottom>Trojan horse</Typography>

                            <Typography variant="h6" gutterBottom>O que é, o que faz</Typography>
                            <Typography variant="body1" gutterBottom> inspirado na guerra de Tróia, o cavalo de tróia atua como um disseminador de malwares, no qual utilizam de engenharia social para enganar os utilizadores a utilizar os softwares por justa causa de que se trata de um software benigno, mas na verdade oculta suas funcionalidades maliciosas, uma analogia ao cavalo de madeira deixado supostamente como “rendição” pelos gregos aos troianos, mas que na verdade dentro Ulisses e seus homens estavam escondidos para contra atacar de dentro das muralhas os troianos.   </Typography>

                            <Typography variant="h6" gutterBottom>Como funciona</Typography>
                            <Typography variant="body1" gutterBottom>cavalo de tróia é projetado pelos agentes maliciosos com o intuito de disseminar ameaças, podendo ser ransomware para extorquir dinheiro e a criptografia de dados e sistemas, bem como spywares, para roubar dados, por meio de softwares crackeados (jogos, aplicações proprietárias), arquivos de músicas, anúncios de navegadores que são executados, podem levar a infecção por trojans. Softwares crackeados e que dizem gerar chaves de ativação quando são executados são casos comuns de ataques de trojans, bem como anexos infectados podem se prover de engenharia social com a intenção de persuadir usuários a clicar no arquivo infectado. </Typography>

                            <Typography variant="h6" gutterBottom>Operacionalização</Typography>
                            <Typography variant="body1" gutterBottom>a primeira etapa da operacionalização é montar um script que de alguma forma roube e até mesmo criptografe dados de dispositivos de usuários. Na sequência, esse script é adicionado a um software amplamente conhecido. Pode ser ele algum software proprietário a ser crackeado, um jogo crackeado, algum anexo que por meio de engenharia social estimule o usuário a clicar nele. Trojan Horse está intimamente ligado à engenharia social, pois normalmente ocorrem com usuários que querem ferramentas proprietárias por meio de ferramentas crackeadas, ou por documentos que estimulem usuários a clicar neles.</Typography>

                            <Typography variant="h6" gutterBottom>Recursos/ativos afetados</Typography>
                            <Typography variant="body1" gutterBottom>considerando que cavalo de tróia usa em sumo malwares como spyware e ransomware, que tem como foco o roubo de dados, exigir pagamentos para receber de volta seus dados que foram criptografados, ou que sistemas sejam criptografados, os ativos e recursos afetados são os dados, usados para obter ganhos financeiros, o comprometimento de integridade de sistemas por meio da criptografia dos mesmos, dinheiro no caso em que pessoas julgam ser necessário para ter novamente acesso aos dados nos casos de ransomware.</Typography>

                        </Stack>

                        <Divider sx={{ my: 2 }} />

                        <Stack>
                            <Typography variant="h5" gutterBottom>Keylogger attack</Typography>

                            <Typography variant="h6" gutterBottom>O que é, o que faz</Typography>
                            <Typography variant="body1" gutterBottom>keylogger se trata de um spyware em que um adversário monitora todo o registro de teclas digitadas por dispositivos sem o devido conhecimento do usuário do dispositivo, ou seja, de maneira imperceptível. No geral, serve para o adversário observar digitação de usuários, a fim de descobrir credenciais, dados sensíveis que possibilitam quebrar privacidade de usuários. </Typography>

                            <Typography variant="h6" gutterBottom>Como funciona</Typography>
                            <Typography variant="body1" gutterBottom>keylogger basicamente informa ao hacker toda e qualquer tecla digitada pelo usuário em seu dispositivo. Entretanto, esse tipo de ataque evoluiu tanto que já pode gravar tela, ações de mouse, copiar o que existe na área de transferência e afins, e o hacker simplesmente visualizar. Então, esse tipo de spyware não se trata apenas de um informador de teclas digitadas, mas todo e qualquer meio de espionar o que usuários fazem em seus dispositivos.</Typography>

                            <Typography variant="h6" gutterBottom>Operacionalização</Typography>
                            <Typography variant="body1" gutterBottom>pode infiltrar dispositivos por meio de meios físicos ou sem fio, como pen drives, outros periféricos com ou sem fio, dispositivos podem ser infectados por download de softwares e apps, acesso de sites duvidosos que sugerem cliques que infectam seus dispositivos, e-mails maliciosos, SMSs com links suspeitos.  </Typography>

                            <Typography variant="h6" gutterBottom>Recursos/ativos afetados</Typography>
                            <Typography variant="body1" gutterBottom>os ativos e recursos afetados são as informações sensíveis, credenciais e dados pessoais que permitem a hackers mal intencionados usarem deles para obterem ganhos financeiros, assim como para infringir princípios de autenticidade, autorização e privacidade para fazer alguma ação mal intencionada.</Typography>

                        </Stack>
                    </Card>

                </Stack>
            </Container>

        </Page>
    )
}
