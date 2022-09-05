import { Divider, Grid, Image, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";
import { PortfolioContent } from "src/type/microcms";

type Props = MicroCMSListResponse<PortfolioContent>;

export const PortfolioSection: FC<{ portfolios: Props }> = ({ portfolios }) => {
  const largerThanXs = useMediaQuery("xs");

  return (
    <Stack spacing="lg">
      <Title order={1}>Portfolio</Title>
      <Divider />
      <Grid justify="space-between">
        {portfolios.contents.map((portfolio) => (
          <Grid.Col xs={12} sm={6} md={6} lg={4} key={portfolio.id}>
            <Stack spacing="lg">
              <Image
                width={largerThanXs ? 314 : 314 * 1.5}
                height={largerThanXs ? 184 : 184 * 1.5}
                src={portfolio.eyecatch.url}
                alt="Home Page Image"
              />
              <Title order={2}>{portfolio.title}</Title>
              <Text>{portfolio.content}</Text>
              <Text>
                {dayjs(portfolio.createdAt).format("YYYY.MM")} -{" "}
                {dayjs(portfolio.updatedAt).format("YYYY.MM")}
              </Text>
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};
