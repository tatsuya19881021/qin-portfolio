import { Divider, Stack, Title } from "@mantine/core";
import { FC } from "react";
import { CenterButton } from "src/component/common";
import { GithubRepository } from "src/component/Github/GithubRepository";
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
        <GithubRepository key={repository.id} repository={repository} />
      ))}
      <CenterButton
        target="_blank"
        href="https://github.com/tatsuya19881021"
        text="View on GitHub"
      />
    </Stack>
  );
};
