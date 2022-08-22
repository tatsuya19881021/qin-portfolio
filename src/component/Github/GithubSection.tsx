import {
  Box,
  Button,
  Center,
  Divider,
  Group,
  Progress,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { FC } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { IoEllipse } from "react-icons/io5";
import { useMediaQuery } from "src/lib/mantine";

const articles = [...Array(5)].map((_, index) => {
  return {
    id: index,
    name: "lightsound/nexst-tailwind",
    description: "Next.js starter template.",
    star: 117,
    fork: 18,
    languages: [
      {
        color: "#3178C6",
        name: "TypeScript",
        value: 65.4,
      },
      {
        color: "#F1E05A",
        name: "JavaScript",
        value: 33.8,
      },
      {
        color: "#EDEDED",
        name: "Other",
        value: 0.8,
      },
    ],
  };
});

export const GithubSection: FC = () => {
  const largerThanSm = useMediaQuery("sm");

  return (
      <Stack spacing="lg" className={largerThanSm ? "w-1/2" : "w-full"}>
        <Title order={1}>GitHub</Title>
        <Divider />
        {articles.map((article) => (
          <Box key={article.id}>
            <Title order={2}>{article.name}</Title>
            <Text>{article.description}</Text>
            <Group spacing={4}>
              <BiStar />
              <Text>{article.star}</Text>
              <Space w={4} />
              <BiGitRepoForked />
              <Text>{article.fork}</Text>
            </Group>
            <Progress sections={article.languages} />
            <Group>
              {article.languages.map((language, index) => (
                <Group key={index} spacing={4}>
                  <IoEllipse color={language.color} className="w-2 h-2" />
                  <Text weight={700}>{language.name}</Text>
                  <Text>{language.value}%</Text>
                </Group>
              ))}
            </Group>
          </Box>
        ))}
        <Center mt="lg">
          <Button color="dark" className="rounded-full">
            View on GitHub
          </Button>
        </Center>
      </Stack>
  );
};
