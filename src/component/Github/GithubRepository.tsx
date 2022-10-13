import { Box, Group, Progress, Space, Text, Title } from "@mantine/core";
import { FC } from "react";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import { IoEllipse } from "react-icons/io5";
import { GithubRepositoryContent } from "src/type/github";

type Props = { repository: GithubRepositoryContent };

export const GithubRepository: FC<Props> = ({ repository }) => {
  return (
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
  );
};
