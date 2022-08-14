import {
  Box,
  Divider,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { FC } from "react";

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
  return (
    <Stack spacing="lg">
      <Title order={1}>Portfolio</Title>
      <Divider />
      <SimpleGrid cols={3} spacing="lg">
        {articles.map((article, index) => (
          <Stack key={index} spacing="lg">
            <Image
              width={316}
              height={184}
              src={article.thumbnail}
              alt="Home Page Image"
            />
            <Title order={2}>{article.title}</Title>
            <Text>{article.description}</Text>
            <Text>{article.creationTime}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};
