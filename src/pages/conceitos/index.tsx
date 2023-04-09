import { Page } from "@/components/Page";
import { PATH } from "@/routes/routes";
import {
  Breadcrumbs,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";

export default function Index() {
  return (
    <Page title="Conceitos">
      <Container maxWidth="xl" sx={{ py: 12 }}>
        <Stack gap={3}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" key="1" color="inherit" href={PATH.root}>
              Página inicial
            </Link>
            <Typography key="3" color="text.primary">
              Conceitos gerais
            </Typography>
          </Breadcrumbs>

          <Card sx={{ borderRadius: 10, textAlign: "justify" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Segurança de sistemas
              </Typography>

              <Typography variant="body1" gutterBottom>
                {" "}
                Compreende-se como segurança de sistemas todo e qualquer norma,
                estratégia, prática, política e tecnologia para manter as partes
                fundamentais do funcionamento de sistemas (os ativos) protegidos
                de riscos e ataques por meio dos requisitos e contramedidas de
                segurança, livre de qualquer ameaça e impacto.
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={2}>
                <Typography variant="h5" gutterBottom>
                  Requisitos de segurança
                </Typography>

                <Typography variant="body1" gutterBottom>
                  Requisitos de segurança tratam-se das medidas e práticas para
                  garantir que haja segurança em sistemas, e são divididos em 6
                  conceitos.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  {" "}
                  <strong>Autenticação: </strong> garantia de que qualquer um
                  que acesse o sistema tenha a sua identificação e legitimidade.
                  Necessário para sistemas terem, além da identidade, dados a
                  seu respeito como se fosse um documento que identifica dados a
                  seu respeito, que diferem de outros.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <strong>Autorização: </strong> garantia de que apenas certas
                  pessoas autenticadas tenham acesso a partes de sistemas,
                  funcionalidade que exige maior grau de autorização para
                  realizarem certas ações, em resumo, a autorização se refere a
                  tarefas que os usuários podem desenvolver em um sistema.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <strong>Confidencialidade (privacidade): </strong> garantia de
                  que dados privados estejam somente a alcance de pessoas
                  autorizadas, mas não podem ser vistas por outros não
                  autorizados.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <strong>Integridade: </strong> integridade de dados refere-se
                  a garantia da exatidão ou a não alteração de dados por pessoas
                  desautorizadas, onde somente as autorizadas podem alterar
                  dados, como por exemplo, usuários não podem alterar dados de
                  usuários a não ser o seu.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <strong>Disponibilidade: </strong> refere-se a garantia de que
                  dados e serviços estejam disponíveis sempre nos momentos em
                  que os usuários precisarem, sejam eles autorizados e/ou
                  autenticados.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  <strong>Responsabilização (irretratabilidade): </strong>{" "}
                  garantia de que qualquer ação feita com acesso autorizado a
                  sistemas seja individualizada a quem a executa por meio da sua
                  identidade.
                </Typography>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={2}>
                <Typography variant="h5" gutterBottom>
                  Ativos, ameaças, riscos, contramedidas ...
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Ativos:</strong> Referem-se a todo e qualquer parte
                  que integre e mantém sistemas, como hardware (servidores),
                  softwares, serviços, dados, infraestrutura, ambiente de
                  operação, rede de energia e internet, pessoas. Em outras
                  palavras, são os meios que requerem a proteção de um carro
                  forte pois são o alvo de ataques por agentes maliciosos e
                  adversários, assim como podem sofrer possíveis ameaças.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Adversários:</strong> se tratam das pessoas mal
                  intencionadas que por meio de ataques cibernéticos afetam seus
                  alvos como sistemas, dispositivos, dados pessoais. Podem ser
                  encontrados em outras literaturas como hackers, agentes
                  maliciosos, criminosos digitais, atacantes ou agentes
                  maliciosos.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Agente malicioso:</strong> é um termo mais genérico e
                  pode se referir a qualquer pessoa ou programa que tenha a
                  intenção de causar danos ou prejuízos a sistemas de computador
                  ou a usuários da internet. Um agente malicioso pode ser um
                  indivíduo mal-intencionado, um grupo de hackers, um programa
                  malicioso ou um bot, ou seja, pode ser qualquer coisa ou
                  pessoa que tenha a intenção de causar danos na internet.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Atacante:</strong> é alguém que utiliza técnicas de
                  invasão para comprometer a segurança de sistemas de computador
                  ou redes. Eles podem tentar obter acesso não autorizado a
                  informações confidenciais, modificar ou apagar dados
                  importantes, ou realizar outras ações prejudiciais. Os
                  atacantes podem ser hackers, crackers ou script kiddies, ou
                  seja, atacante é alguém que usa técnicas específicas de
                  invasão para comprometer a segurança de sistemas de computador
                  ou redes.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Criminoso virtual:</strong> é um indivíduo que usa a
                  internet para cometer crimes, como fraudes, roubo de
                  identidade, extorsão, phishing, entre outros. Eles geralmente
                  têm motivações financeiras e podem usar técnicas avançadas de
                  engenharia social e hacking para alcançar seus objetivos, ou
                  seja, é um tipo específico de agente malicioso que usa a
                  internet para cometer crimes.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Agente:</strong> compreende-se como agente todo e
                  qualquer tipo de ataque cibernético, como malware, spyware,
                  ransomware, que venha a afetar qualquer tipo de ativo.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Vulnerabilidade:</strong> qualquer brecha ou falha de
                  segurança que permita a adversários usar agentes para projetar
                  ataques cibernéticos.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Contramedida:</strong> as contramedidas se tratam de
                  ações a serem providenciadas para, neste caso, sobre ameaças,
                  anular ataques e riscos que podem acontecer ou que estão
                  acontecendo. Contramedidas reativas são feitas após um ataque
                  ou falha, enquanto contramedidas preventivas são para garantir
                  que sistemas sofram menos riscos de ataques e ameaças.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Impacto:</strong> o grau e a situação que a integração
                  de sistemas, dados, infraestruturas ficam quando sofrem
                  ameaças, ataques e riscos.
                </Typography>

                <Typography variant="body1" gutterBottom display="block">
                  <strong>Ameaças:</strong> ameaças são todo e qualquer tipo de
                  ataque ou risco que venha a comprometer alguma ou todas as
                  partes de um sistema, pode ser falha humana com o
                  consentimento ou não, softwares instalados que permitem acesso
                  de adversários, acidentes naturais.{" "}
                  <Typography component="span" gutterBottom>
                    <br />
                    Alguns dos tipos e categorias são: Malware, ataques de
                    negação de serviço (DoS), ataque de força bruta, phishing,
                    engenharia social, ataques zero-day, ameaças internas, roubo
                    de dados, etc.
                  </Typography>
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Ataques:</strong> ataques são eventos projetados com
                  propósitos por parte de invasores, adversários e criminosos
                  digitais para espionar, coletar e roubar dados.
                </Typography>

                <Typography variant="body1" gutterBottom>
                  <strong>Riscos:</strong> riscos é a probabilidade de que uma
                  amaça se torne realidade que podem comprometer a integridade e
                  disponibilidade de sistemas.
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Page>
  );
}
