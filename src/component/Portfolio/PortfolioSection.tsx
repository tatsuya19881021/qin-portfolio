import { Divider, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

const articles = [...Array(6)].map(() => {
  return {
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/08/09/22/06/field-7375948_960_720.jpg",
    title: "IT KINGDOM",
    description:
      "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
    creationTime: "2021.10 - 2021.12",
  };
});

export const PortfolioSection: FC = () => {
  const largerThanXs = useMediaQuery("xs");

  return (
    <Stack spacing="lg">
      <Title order={1}>Portfolio</Title>
      <Divider />
      <Grid justify="space-between">
        {articles.map((article, index) => (
          <Grid.Col xs={12} sm={6} md={6} lg={4} key={index}>
            <Stack spacing="lg">
              <Image
                width={largerThanXs ? 314 : 314 * 1.5}
                height={largerThanXs ? 184 : 184 * 1.5}
                src={article.thumbnail}
                alt="Home Page Image"
              />
              <Title order={2}>{article.title}</Title>
              <Text>{article.description}</Text>
              <Text>{article.creationTime}</Text>
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};
