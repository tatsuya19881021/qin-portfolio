import {
  Box,
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
import { CenterButton } from "src/component/common";
import { useMediaQuery } from "src/lib/mantine";
import { GithubContent } from "src/type/github";

type Props = { github: GithubContent };

export const GithubSection: FC<Props> = ({ github }) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Stack spacing="lg" className={largerThanSm ? "w-1/2" : "w-full"}>
      <Title order={1}>GitHub</Title>
      <Divider />
      {github.user.repositories.map((repository) => (
        <Box key={repository.id}>
          <Title order={2}>{repository.name}</Title>
          <Text>{repository.description}</Text>
          <Group spacing={4}>
            <BiStar />
            <Text>{repository.stargazerCount}</Text>
            <Space w={4} />
            <BiGitRepoForked />
            <Text>{repository.forkCount}</Text>
          </Group>
          <Progress sections={repository.languages} />
          <Group>
            {repository.languages.map((language) => (
              <Group key={language.id} spacing={4}>
                <IoEllipse color={language.color} className="w-2 h-2" />
                <Text weight={700}>{language.name}</Text>
                <Text>{language.value}%</Text>
              </Group>
            ))}
          </Group>
        </Box>
      ))}
      <CenterButton
        target="_blank"
        href="https://github.com/tatsuya19881021"
        text="View on GitHub"
      />
    </Stack>
  );
};
