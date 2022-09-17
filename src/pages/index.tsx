import { Box, Container } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { CustomNextPage, GetStaticProps } from "next";
import { BlogSection } from "src/component/Blog/BlogSection";
import { CenterButton } from "src/component/common";
import { GithubSection } from "src/component/Github";
import { TitleSection } from "src/component/Home";
import { PortfolioSection } from "src/component/Portfolio";
import { TwitterSection } from "src/component/Twitter";
import { Layout } from "src/layout";
import { useMediaQuery } from "src/lib/mantine";
import { client } from "src/lib/microcms/client";
import { roTwitterClient } from "src/lib/twitter/client";
import { BlogContent, PortfolioContent } from "src/type/microcms";
import {
  TweetUserTimelineV2Paginator,
  TweetV2,
  UserV2,
  UserV2Result,
} from "twitter-api-v2";

type Props = {
  blogs: MicroCMSListResponse<BlogContent>;
  portfolios: MicroCMSListResponse<PortfolioContent>;
  tweets: TweetV2[];
  twitterUser: UserV2;
};

const Home: CustomNextPage<Props> = ({
  blogs,
  portfolios,
  tweets,
  twitterUser,
}) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Box component="main">
      <TitleSection />
      <Container size="md" py={16}>
        <BlogSection blogs={blogs} />
        <CenterButton href="/blog" text="View All" />
        <PortfolioSection portfolios={portfolios} />
        <CenterButton href="/portfolio" text="View All" />
        <Box
          py={16}
          className={
            largerThanSm ? "flex justify-between space-x-10" : undefined
          }
        >
          <GithubSection />
          <TwitterSection twitterUser={twitterUser} tweets={tweets} />
        </Box>
      </Container>
    </Box>
  );
};

Home.getLayout = Layout;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await client.getList<BlogContent>({
    endpoint: "blog",
    queries: { limit: 5 },
  });
  const portfolios = await client.getList<PortfolioContent>({
    endpoint: "portfolio",
  });
  const twitterUser: UserV2Result = await roTwitterClient.v2.userByUsername(
    "tmae94854943",
    {
      "user.fields": ["profile_image_url"],
    }
  );
  const timeline: TweetUserTimelineV2Paginator =
    await roTwitterClient.v2.userTimeline(twitterUser.data.id, {
      max_results: 5,
      "tweet.fields": ["created_at"],
    });

  return {
    props: {
      blogs,
      portfolios,
      tweets: timeline.tweets,
      twitterUser: twitterUser.data,
    },
  };
};

export default Home;
