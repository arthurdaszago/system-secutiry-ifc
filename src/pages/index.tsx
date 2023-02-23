import { Page } from "@/components/Page";
import { Card, Container, Divider, Stack, Typography } from "@mui/material";

export default function Index() {
  return (
    <Page title="Root">
      <Container maxWidth="xl" sx={{ py: 12 }}>

        <Card sx={{ p: 5, borderRadius: 10, textAlign: 'justify' }}>
          <Typography variant="h4" gutterBottom>Segurança de sistemas</Typography>

          <Typography variant="body1" gutterBottom> Compreende-se como segurança de sistemas todo e qualquer norma, estratégia, prática, política e tecnologia para manter as partes fundamentais do funcionamento de sistemas (os ativos) protegidos de riscos e ataques por meio dos requisitos e contramedidas de segurança, livre de qualquer ameaça e impacto.
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Stack>

            <Typography variant="h5" gutterBottom>Ativos, ameaças, riscos, contramedidas ...</Typography>

            <Typography variant="body1" gutterBottom>
              Ativos: Referem-se a todo e qualquer parte que integre e mantém sistemas, como hardware (servidores), softwares, serviços, dados, infraestrutura, ambiente de operação, rede de energia e internet, pessoas. Em outras palavras, são os meios que requerem a proteção de um carro forte pois são o alvo de ataques por agentes maliciosos e adversários, assim como podem sofrer possíveis ameaças.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Contramedida: as contramedidas se tratam de ações a serem providenciadas para, neste caso, sobre ameaças, anular ataques e riscos que podem acontecer ou que estão acontecendo. Contramedidas reativas são feitas após um ataque ou falha, enquanto contramedidas preventivas são para garantir que sistemas sofram menos riscos de ataques e ameaças.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Impacto: o grau e a situação que a integração de sistemas, dados, infraestruturas ficam quando sofrem ameaças, ataques e riscos.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Agente: compreende-se como agente todo e qualquer tipo de ataque cibernético, como malware, spyware, ransomware, que venha a afetar qualquer tipo de ativo.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Adversários: se tratam das pessoas mal intencionadas que por meio de ataques cibernéticos afetam seus alvos como sistemas, dispositivos, dados pessoais. Podem ser encontrados em outras literaturas como hackers, agentes maliciosos, criminosos digitais, atacantes ou agentes maliciosos.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Diferença entre ameaças, ataques e riscos: ameaças são todo e qualquer tipo de ataque ou risco que venha a comprometer alguma ou todas as partes de um sistema, pode ser falha humana com o consentimento ou não, softwares instalados que permitem acesso de adversários, acidentes naturais. Os ataques vêm com um propósito por parte de invasores, adversários e criminosos digitais como espionagem, coleta e roubo de dados, enquanto riscos são vulnerabilidades que podem comprometer a integridade e disponibilidade de sistemas.
            </Typography>

            <Typography variant="body1" gutterBottom>
              Vulnerabilidade: qualquer brecha ou falha de segurança que permita a adversários usar agentes para projetar ataques cibernéticos.
            </Typography>

          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack>
            <Typography variant="h5" gutterBottom>Requisitos de segurança</Typography>

            <Typography variant="body1" gutterBottom>
              Requisitos de segurança tratam-se das medidas e práticas para garantir que haja segurança em sistemas, e são divididos em 6 conceitos.
            </Typography>

            <Typography variant="body2" gutterBottom>  <strong>Autenticação: </strong> garantia de que qualquer um que acesse o sistema tenha a sua identificação e legitimidade. Necessário para sistemas terem, além da identidade, dados a seu respeito como se fosse um documento que identifica dados a seu respeito, que diferem de outros.</Typography>
            <Typography variant="body2" gutterBottom>  <strong>Autorização: </strong> garantia de que apenas certas pessoas autenticadas tenham acesso a partes de sistemas, funcionalidade que exige maior grau de autorização para realizarem certas ações, em resumo, a autorização se refere a tarefas que os usuários podem desenvolver em um sistema.</Typography>
            <Typography variant="body2" gutterBottom>  <strong>Confidencialidade (privacidade): </strong> garantia de que dados privados estejam somente a alcance de pessoas autorizadas, mas não podem ser vistas por outros não autorizados.</Typography>
            <Typography variant="body2" gutterBottom>  <strong>Integridade: </strong> integridade de dados refere-se a garantia da exatidão ou a não alteração de dados por pessoas desautorizadas, onde somente as autorizadas podem alterar dados, como por exemplo, usuários não podem alterar dados de usuários a não ser o seu.</Typography>
            <Typography variant="body2" gutterBottom>  <strong>Disponibilidade: </strong> refere-se a garantia de que dados e serviços estejam disponíveis sempre nos momentos em que os usuários precisarem, sejam eles autorizados e/ou autenticados.</Typography>
            <Typography variant="body2" gutterBottom>  <strong>Responsabilização (irretratabilidade): </strong> garantia de que qualquer ação feita com acesso autorizado a sistemas seja individualizada a quem a executa por meio da sua identidade.</Typography>
          </Stack>
        </Card>

      </Container>
    </Page>
  );
}
