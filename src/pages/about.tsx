import { Box, Container, Divider, Stack, Text, Title } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";

const About: CustomNextPage = () => {
  return (
    <Box component="main">
      <Container size="md">
        <Stack spacing="lg">
          <Title order={1}>About</Title>
          <Divider />
          <Title order={2}>T.Mae</Title>
          <Text>
            ITエンジニア。最終学歴。学生時代にC言語やJava、その他IT関連の知識を学び、中小企業に就職。
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

About.getLayout = Layout;

export default About;
