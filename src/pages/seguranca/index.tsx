import { PATH } from "@/routes/routes";
import { Page } from "@/components/Page";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import {
  Breadcrumbs,
  Card,
  Container,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export default function Index() {
  return (
    <Page title="Segurança mobile">
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Stack gap={3}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" key="1" color="inherit" href={PATH.root}>
              Pagina inicial
            </Link>
            <Typography key="3" color="text.primary">
              Segurança mobile
            </Typography>
          </Breadcrumbs>

          <Card sx={{ p: 5, borderRadius: 10 }}>
            <Stack spacing={3}>
              <Stack spacing={3}>
                <Typography variant="h5">
                  <strong>
                    Riscos e vulnerabilidades mais comuns em dispositivos
                    mobiles a importância de proteger seus dispositivos móveis
                  </strong>
                </Typography>

                <Typography paragraph variant="body1">
                  Os dispositivos móveis são frequentemente utilizados para
                  acessar informações sensíveis e realizar transações
                  financeiras. Como resultado, eles se tornaram alvos populares
                  para ataques cibernéticos, sendo que os principais riscos e
                  vulnerabilidades giram em torno de malwares baixados
                  indevidamente, tanto para riscos como roubo de dados bem como
                  para também a invasão de privacidade.
                </Typography>

                <Typography paragraph variant="body1">
                  Tradicionalmente, malwares instalados são as principais
                  vulnerabilidades em dispositivos móveis, podendo ser vírus,
                  trojans e spywares, onde pode ser possível roubar informações
                  pessoais, danificar o dispositivo ou controlá-lo remotamente.
                  De longe, o que mais acompanha nos dias de hoje as pessoas são
                  os dispositivos móveis, logo são eles quem armazenam uma
                  grande quantidade de informações confidenciais, como senhas,
                  dados bancários e informações pessoais. Se o dispositivo for
                  roubado ou perdido, esses dados podem ser comprometidos. Além
                  disso, aplicativos móveis têm acesso a informações pessoais,
                  como contatos, localização e histórico de navegação. Alguns
                  aplicativos podem coletar informações sem o conhecimento ou
                  consentimento do usuário, o que pode ser uma violação da
                  privacidade.
                </Typography>

                <Typography paragraph variant="body1">
                  A proteção dos dispositivos móveis é extremamente importante
                  para garantir a segurança das informações pessoais e
                  financeiras, estando livre de riscos e vulnerabilidades.
                  Algumas medidas de segurança tradicionais são essenciais para
                  evitar riscos e vulnerabilidades de segurança e garantir a
                  privacidade e a segurança das informações pessoais. O uso de
                  um software antivírus pode ajudar a proteger o dispositivo
                  contra malwares e outras ameaças cibernéticas, visto que elas
                  averiguam todo o seu dispositivo em busca de eventuais
                  comportamentos estranhos. Usar senhas fortes e exclusivas para
                  proteger o dispositivo e os aplicativos móveis são fortemente
                  influentes na segurança do seu dispositivo, no geral, não se
                  deve usar senhas fáceis de adivinhar, como datas de nascimento
                  ou nomes de animais de estimação. Manter o software do
                  dispositivo móvel e dos aplicativos atualizados para corrigir
                  vulnerabilidades e falhas de segurança, visto que se seu
                  dispositivo permanecer desatualizado ao longo do tempo, mais
                  frágil a certas nuances de malwares ele se tornará. Também é
                  recomendado usar redes Wi-Fi seguras, evitando qualquer tipo
                  de redes Wi-Fi públicas e não seguras, que podem ser
                  facilmente interceptadas por hackers. Então, sempre use redes
                  Wi-Fi seguras, como as fornecidas por empresas ou instituições
                  de confiança. Deve-se limitar o acesso dos aplicativos por
                  meio das permissões de acesso dos aplicativos e também
                  restringir o acesso a informações confidenciais, como contatos
                  e localização.
                </Typography>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h5">
                  <strong>
                    Principais medidas de proteção que os usuários podem adotar
                    para minimizar os riscos de segurança em dispositivos móveis
                  </strong>
                </Typography>

                <Typography paragraph variant="body1">
                  Existem várias medidas de proteção que os usuários podem
                  adotar para minimizar os riscos de segurança em dispositivos
                  móveis e garantir que seu dispositivo móvel fique livre de
                  qualquer risco e vulnerabilidades. Adotando medidas de
                  proteção, os usuários podem minimizar significativamente os
                  riscos de segurança em dispositivos móveis e manter suas
                  informações pessoais e financeiras seguras, tais como:
                </Typography>

                <List>
                  <ListItem>
                    <ListItemText>
                      Atualizar regularmente o software do dispositivo e dos
                      aplicativos: As atualizações de software geralmente
                      incluem correções de segurança para proteger contra
                      vulnerabilidades conhecidas, em especial, das mais
                      recentemente descobertas.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Utilizar senhas fortes e exclusivas: É importante escolher
                      senhas difíceis de adivinhar e diferentes para cada conta
                      e aplicativo instalado. É altamente recomendável usar uma
                      combinação de letras maiúsculas e minúsculas, números e
                      caracteres especiais e também, com um comprimento de ao
                      menos 15 caracteres.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Instalar aplicativos somente de fontes confiáveis: A
                      instalação de aplicativos de fontes desconhecidas pode
                      colocar o dispositivo em risco de malware e outras
                      ameaças. Então, é recomendável usar apenas lojas de
                      aplicativos confiáveis, como o Google Play ou a App Store,
                      e nunca instalar apps suspeitos além destes aplicativos.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Usar redes Wi-Fi seguras: Evite se conectar a redes Wi-Fi
                      públicas e não seguras, que podem ser interceptadas por
                      hackers. É recomendável usar redes Wi-Fi protegidas com
                      senha ou uma conexão de dados móveis.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Verificar as permissões de aplicativos: Ao instalar um
                      novo aplicativo, sempre verifique as permissões que ele
                      solicita e limite o acesso às informações pessoais sempre
                      que possível.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Ativar o bloqueio de tela: O bloqueio de tela pode impedir
                      o acesso não autorizado ao dispositivo caso ele seja
                      perdido ou roubado.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Fazer backup dos dados regularmente: Realizar backups
                      regulares dos dados do dispositivo pode ajudar a recuperar
                      informações em caso de perda ou roubo.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Utilizar ferramentas de segurança adicionais: Além das
                      medidas acima, os usuários podem instalar aplicativos de
                      segurança adicionais, como antivírus e firewalls, para
                      proteger seus dispositivos.
                    </ListItemText>
                  </ListItem>
                </List>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h5">
                  <strong>
                    Configurações de segurança disponíveis nos dispositivos
                    móveis
                  </strong>
                </Typography>

                <Typography paragraph variant="body1">
                  Existem várias configurações de segurança disponíveis nos
                  dispositivos móveis que podem ajudar a proteger contra ameaças
                  cibernéticas. Ao configurar essas opções de segurança, os
                  usuários podem minimizar os riscos de segurança e proteger
                  suas informações pessoais e financeiras. Dentre elas, podem se
                  destacar:
                </Typography>

                <List>
                  <ListItem>
                    <ListItemText>
                      Bloqueio por senha: A ativação do bloqueio por senha é uma
                      das medidas de segurança mais básicas, mas eficazes. Os
                      usuários podem definir uma senha, PIN ou padrão para
                      desbloquear o dispositivo, impedindo o acesso não
                      autorizado.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Verificação em duas etapas: A verificação em duas etapas é
                      um método adicional de proteção de contas. Além de uma
                      senha, os usuários precisam fornecer outra forma de
                      autenticação, como um código enviado por SMS ou gerado por
                      um aplicativo, para fazer login em uma conta.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      VPNs: Uma rede privada virtual (VPN) criptografa a conexão
                      à internet, tornando difícil para hackers interceptar
                      dados ou invadir a privacidade do usuário. As VPNs podem
                      ser particularmente úteis quando se conectam a redes Wi-Fi
                      públicas e não seguras.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Autenticação biométrica: Os dispositivos móveis modernos
                      podem usar tecnologia de autenticação biométrica, como
                      leitura de impressões digitais ou reconhecimento facial,
                      como método de autenticação. Isso pode ser uma alternativa
                      mais segura e conveniente para senhas tradicionais.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Restrições de aplicativos: Os usuários podem limitar o
                      acesso a aplicativos em seus dispositivos, restringindo as
                      permissões e desativando a instalação de aplicativos de
                      fontes desconhecidas.
                    </ListItemText>
                  </ListItem>

                  <ListItem>
                    <ListItemText>
                      Controles parentais: Os controles parentais permitem que
                      os pais restrinjam o acesso de seus filhos a conteúdo
                      inadequado e monitorem suas atividades online.
                    </ListItemText>
                  </ListItem>
                </List>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h5">
                  <strong>
                    Como as atualizações de software são importantes para manter
                    o dispositivo móvel seguro e como configurá-las
                  </strong>
                </Typography>

                <Typography paragraph variant="body1">
                  As atualizações de software são importantes para manter o
                  dispositivo móvel seguro, pois elas geralmente incluem
                  correções de segurança para vulnerabilidades conhecidas. Essas
                  vulnerabilidades podem ser exploradas por hackers para acessar
                  dados pessoais, instalar malware ou causar outros danos. Ao
                  configurar as atualizações de software para serem instaladas
                  automaticamente, os usuários podem garantir que seus
                  dispositivos estejam sempre protegidos contra as ameaças mais
                  recentes. As etapas para configurar as atualizações
                  automáticas variam de acordo com o dispositivo e o sistema
                  operacional, no geral seguem padrões.
                </Typography>

                <List>
                  <ListItem>
                    <ListItemText>
                      Verifique as configurações de atualização do sistema: Em
                      dispositivos Android, vá para Configurações / Sistema /
                      Atualizações de software. Em dispositivos iOS, vá para
                      Configurações / Geral / Atualização de software.
                      Certifique-se de que a opção de atualização automática
                      esteja ativada para garantir que quando uma atualização
                      estiver disponível, seu dispositivo seja atualizado
                      imediatamente.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      Verifique se há atualizações manualmente: Mesmo com as
                      atualizações automáticas ativadas, é importante verificar
                      regularmente se há atualizações disponíveis. Em
                      dispositivos Android, vá para Configurações / Sistema /
                      Atualizações de software / Verificar atualizações. Em
                      dispositivos iOS, vá para Configurações / Geral /
                      Atualização de software.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>
                      Verifique as configurações de atualização de aplicativos:
                      Em dispositivos Android, abra o Google Play Store e vá
                      para Configurações / Atualizar aplicativos
                      automaticamente. Em dispositivos iOS, vá para
                      Configurações / App Store / Downloads automáticos e ative
                      a opção de atualização automática.
                    </ListItemText>
                  </ListItem>
                </List>

                <Typography paragraph variant="body1">
                  Manter o dispositivo conectado à internet é requerido para os
                  itens anteriores. Para que as atualizações automáticas
                  funcionem, o dispositivo precisa estar conectado à internet.
                  Certifique-se de que o dispositivo esteja conectado a uma rede
                  Wi-Fi confiável ou a uma conexão de dados móveis.
                </Typography>
              </Stack>

              <Stack spacing={3}>
                <Typography variant="h5">
                  <strong>
                    Como identificar e evitar aplicativos maliciosos e a
                    importância de baixar apenas aplicativos de fontes
                    confiáveis
                  </strong>
                </Typography>

                <Typography paragraph variant="body1">
                  Aplicativos maliciosos são programas de software projetados
                  para causar danos aos dispositivos móveis ou aos dados
                  pessoais armazenados neles. Esses aplicativos podem ser
                  baixados de fontes não confiáveis, como lojas de aplicativos
                  de terceiros ou sites de download suspeitos. Ao baixar e
                  instalar um aplicativo malicioso, os usuários podem
                  comprometer a segurança de seus dispositivos móveis, expondo
                  seus dados pessoais e financeiros a hackers e outras ameaças
                  cibernéticas. Em geral, apk de aplicativos baixados por meio
                  de sites suspeitos são os vilões que instalam malwares
                  secretamente.
                </Typography>

                <Typography paragraph variant="body1">
                  Para evitar aplicativos maliciosos, é importante baixar apenas
                  aplicativos de fontes confiáveis, como as lojas de aplicativos
                  oficiais do sistema operacional do dispositivo. Essas lojas de
                  aplicativos, como play store e app store, verificam os
                  aplicativos antes de listá-los para download e geralmente têm
                  políticas de segurança rigorosas para garantir que os
                  aplicativos sejam seguros para uso.
                </Typography>

                <Typography paragraph variant="body1">
                  Ao baixar apenas aplicativos de fontes confiáveis e verificar
                  cuidadosamente as permissões e as avaliações dos aplicativos,
                  os usuários podem minimizar o risco de baixar aplicativos
                  maliciosos em seus dispositivos móveis. Isso pode ajudar a
                  manter seus dados pessoais e financeiros seguros contra
                  ameaças cibernéticas. Para tanto, sempre é bom saber
                  identificar e evitar aplicativos maliciosos.
                </Typography>

                <Typography paragraph variant="body1">
                  Primeiro de tudo, sempre evite baixar aplicativos de fontes
                  não confiáveis, como lojas de aplicativos de terceiros ou
                  sites de download suspeitos. Esses aplicativos podem conter
                  malware ou outros programas maliciosos. Verificar as
                  avaliações e os comentários de outros usuários que baixaram
                  aplicativos é uma maneira de identificar aplicativos
                  maliciosos. Se houver muitas avaliações negativas ou
                  comentários desfavoráveis, é melhor evitar o aplicativo. Antes
                  de fazer o download dele, verifique se o desenvolvedor do
                  aplicativo é legítimo. Os desenvolvedores legítimos geralmente
                  têm informações detalhadas sobre sua empresa e seus
                  aplicativos em seus sites. Após baixado, para cada aplicativo,
                  é válido verificar as permissões, pois ao baixar um
                  aplicativo, verifique as permissões solicitadas. Se um
                  aplicativo solicitar acesso a dados pessoais, como contatos ou
                  fotos, sem uma razão clara, pode ser um sinal de que o
                  aplicativo é malicioso.
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Page>
  );
}
