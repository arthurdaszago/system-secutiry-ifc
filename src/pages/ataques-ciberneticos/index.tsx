import { Page } from "@/components/Page";
import {
  Breadcrumbs,
  Card,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";
import { PATH } from "@/routes/routes";
import { Fragment } from "react";
import { Attack, attacks } from "@/content/attacks";

export default function Index() {
  const RenderContent = ({ contentData }: { contentData: string[] }) => {
    return (
      <Stack spacing={2}>
        <Divider />

        {contentData.map((topic, index) => (
          <Fragment key={`${topic}-${index}`}>
            <Typography variant="body1" gutterBottom>
              {topic}
            </Typography>
          </Fragment>
        ))}
      </Stack>
    );
  };

  const RenderPlaybooks = ({
    playbookData,
  }: {
    playbookData: { subtitle: string; description: string }[];
  }) => {
    return (
      <Stack spacing={2} mt={2}>
        <Stack>
          <Typography variant="h6">Playbook</Typography>

          <Divider />
        </Stack>

        {playbookData.map((topic, index) => (
          <Fragment key={`${topic.subtitle}-${index}`}>
            <Typography variant="h6" gutterBottom>
              {topic.subtitle}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {topic.description}
            </Typography>
          </Fragment>
        ))}
      </Stack>
    );
  };

  const RenderAttackContent = ({ attacks }: { attacks: Attack[] }) => {
    return (
      <Stack>
        {attacks.map((attack) => (
          <Stack key={attack.name} pt={5}>
            <Typography variant="h5" gutterBottom>
              {attack.name}
            </Typography>

            <RenderContent contentData={attack.content} />
            <RenderPlaybooks playbookData={attack.playbook} />
          </Stack>
        ))}
      </Stack>
    );
  };

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

          <Card sx={{ p: 5, borderRadius: 10, textAlign: "justify" }}>
            <Typography variant="h4" gutterBottom>
              Ataques cibernéticos
            </Typography>

            <Typography variant="body1" gutterBottom>
              Refere a ações maliciosas projetadas por adversários para
              comprometer ativos por meio de agentes (tipos de malwares) para
              obter vantagens{" "}
            </Typography>

            <RenderAttackContent attacks={attacks} />
          </Card>
        </Stack>
      </Container>
    </Page>
  );
}
