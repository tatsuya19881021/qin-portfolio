import {
  Avatar,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import dayjs from "dayjs";
import { FC } from "react";
import { CenterButton } from "src/component/common";
import { useMediaQuery } from "src/lib/mantine";
import { TweetV2, UserV2 } from "twitter-api-v2";

type Props = {
  twitterUser: UserV2;
  tweets: TweetV2[];
};

export const TwitterSection: FC<Props> = ({ twitterUser, tweets }) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Stack spacing="lg" className={largerThanSm ? "w-1/2" : "w-full"}>
      <Title order={1}>Twitter</Title>
      <Divider />
      {tweets.map((tweet) => (
        <Grid
          key={tweet.id}
          justify="space-between"
          align="flex-start"
          columns={24}
        >
          <Grid.Col span={1}>
            <Avatar radius="xl" size={38} src={twitterUser.profile_image_url} />
          </Grid.Col>
          <Grid.Col span={21}>
            <Group>
              <Text size="xl" weight={700}>
                {twitterUser.name}
              </Text>
              <Text>
                @{twitterUser.username} ・{" "}
                {dayjs(tweet.created_at).format("M月DD日")}
              </Text>
            </Group>
            <Text>{tweet.text}</Text>
          </Grid.Col>
        </Grid>
      ))}
      <CenterButton
        target="_blank"
        href="https://twitter.com/tmae94854943"
        text="View on Twitter"
      />
    </Stack>
  );
};
