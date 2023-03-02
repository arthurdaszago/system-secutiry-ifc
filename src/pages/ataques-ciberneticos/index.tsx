import { Page } from "@/components/Page";
import { Breadcrumbs, Card, Container, Divider, Link, Stack, Typography } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from '@mui/icons-material'
import { PATH } from "@/routes/routes";
import { Fragment } from "react";

export default function Index() {

    const zeroDayExploit = [{
        subtitle: 'Como o incidente é detectado?',
        description: 'Normalmente é detectado o ataque no “dia zero” ou nos primeiros dias em que aplicações são colocadas em produção, por meio da indisponibilidade deles. Ou ainda, por meio da identificação de  scripts suspeitos injetados por meio das vulnerabilidades.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: 'Logo aṕos a descoberta do ataque, pois desenvolvedores detêm de zero dias para contornar a situação, ou seja, em questão de minutos.'
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: 'Desenvolvedores e administradores de sistemas e o pessoal da equipe de segurança da informação.'
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: 'O primeiro procedimento a ser feito é temporariamente suspender o serviço e encontrar as vulnerabilidades utilizadas e outras possíveis, por meio de uma bateria de testes.'
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: 'Recomenda-se que a equipe avise os usuários que baixaram os possíveis malwares e que notifique eles de que devem remover imediatamente tais scripts. Camadas de segurança também devem ser implementadas, no caso em que existem seríssimas vulnerabilidades, pelos desenvolvedores e administradores de sistemas.'
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: 'Depende da gravidade do ataque e da complexidade/tamanho do ecossistema da aplicação. Para o primeiro procedimento, o tempo para executar é imediatamente, o mais rápido possível. Para notificar os usuários que baixaram os malwares, independente da quantidade deles, deve ser o mais rápido possível. A aplicação de camadas de segurança é bem variável, a depender de quantas forem necessárias. '
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: 'Primeiro deve-se revisar o procedimento e identificar o que pode ter falhado. Na sequência, a equipe deve executar os demais procedimentos de acordo com a ordem de prioridade. '
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: 'O que deve ser feito é uma análise identificando como o incidente ocorreu, como foi resolvido e quais medidas preventivas devem ser tomadas em eventuais eventos de zero day exploit.'
    },
    ]

    const trojanHorse = [{
        subtitle: 'Como o incidente é detectado?',
        description: 'Normalmente um cavalo de tróia aparece em um sistema por meio da exibição de um erro de DLL, arquivos perdidos, remoção de firewalls ou sistemas falhando.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: 'O primeiro procedimento deve ser iniciado imediatamente.'
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: 'Normalmente ataques de cavalo de tróia ocorrem em computadores pessoais ou em computadores empresariais, logo donos de computadores pessoais e técnicos da tecnologia da informação, respectivamente, devem exercer procedimento neles.'
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: 'Remover imediatamente o vírus, seja de forma automática por meio de ferramentas antivírus que removam malwares ou remover de forma manual, por mais que seja difícil.'
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: 'É altamente recomendável fazer verificações periódicas com scanner e ferramentas que detectam malwares de trojan horse para ter ciência de que não existem softwares com malwares.'
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: 'Se feito de maneira manual, depende do tamanho do malware e do conhecimento do agente que fizer a remoção do malware, mas se removido com ferramentas que identifiquem e removam malwares, podem demorar desde minutos até horas.'
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: 'Identificar o porquê os malwares ainda afetam mesmo após terem sido removidos. Entrar em contato com especialistas e até mesmo suporte das ferramentas utilizadas para remover os malwares para solicitar ajuda.'
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: 'Periodicamente utilizar scanners para identificar cavalos de tróia e caso necessário fazer uso de ferramentas que removam os malwares.'
    },
    ]

    const keyloggerAttack = [{
        subtitle: 'Como o incidente é detectado?',
        description: 'A dificuldade para detectar keyloggers é complicada, muitos keyloggers permanecem no escuro por muito tempo sem ser identificado por scanners de malwares pois por vezes falham, considerando que keyloggers na maioria das vezes não deixam problemas perceptíveis.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: 'Deve ser iniciado imediatamente.'
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: 'Administradores de sistemas e a equipe de tecnologia da informação.'
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: 'Remover todos os programas suspeitos instalados.'
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: 'Fazer backup de arquivos e reinstalar o sistema.'
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: 'Dependendo do tamanho do malware, se pequeno se resolve em questão de minutos e em grande tamanho até horas.'
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: 'Se o primeiro procedimento falhar, o procedimento recomendável na sequência é fazer backup de arquivos, posteriormente fazer a instalação de todo o sistema novamente.'
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: 'Fazer uso de ferramentas que possibilitem com maior assertividade identificar ataques de keylogger.'
    },
    ]

    const others = [{
        subtitle: 'Como o incidente é detectado?',
        description: 'Normalmente é detectado o ataque no “dia zero” ou nos primeiros dias em que aplicações são colocadas em produção, por meio da indisponibilidade deles. Ou ainda, por meio da identificação de  scripts suspeitos injetados por meio das vulnerabilidades.'
    }, {
        subtitle: 'Após detectado qual o tempo para iniciar o primeiro procedimento?',
        description: ''
    }, {
        subtitle: 'Quem são as pessoas que irão executar os procedimentos?',
        description: ''
    }, {
        subtitle: 'Qual o primeiro procedimento que precisa ser executado?',
        description: ''
    }, {
        subtitle: 'Quais os demais procedimentos e em que ordem de prioridade precisam ser executados?',
        description: ''
    }, {
        subtitle: 'Qual o tempo para executar cada procedimento?',
        description: ''
    }, {
        subtitle: 'Se um procedimento não foi efetivo, qual o próximo procedimento a ser executado?',
        description: ''
    }, {
        subtitle: 'O que fazer depois do incidente ser resolvido?',
        description: ''
    },
    ]

    const RenderPlaybooks = ({ playbookData }: { playbookData: { subtitle: string, description: string }[] }) => {

        return (
            <Stack>
                <Typography variant="h6" gutterBottom>Playbook</Typography>

                {playbookData.map((topic, index)=> (
                    <Fragment key={`${topic.subtitle}-${index}`}>
                        <Typography variant="h6" gutterBottom>{topic.subtitle}</Typography>
                        <Typography variant="body1" gutterBottom>{topic.description}</Typography>
                    </Fragment>
                ))}
            </Stack>
        )
    }

    const RenderAttackContent = ({ attackData }: { attackData: { attackName: string, content: string[] }[] } ) => {

        return (
            <Stack>
            {/* <Typography variant="h5" gutterBottom>{attackData.}</Typography> */}

            </Stack>
        )
    }

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

                        <Typography variant="body1" gutterBottom>Refere a ações maliciosas projetadas por adversários para comprometer ativos por meio de agentes (tipos de malwares) para obter vantagens </Typography>

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

                        <RenderPlaybooks playbookData={zeroDayExploit} />

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

                        <RenderPlaybooks playbookData={trojanHorse} />

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

                        <Divider sx={{ my: 2 }} />

                        <RenderPlaybooks playbookData={keyloggerAttack} />
                    </Card>

                </Stack>
            </Container>

        </Page>
    )
}
