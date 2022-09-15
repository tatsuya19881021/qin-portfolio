import { Box, Container } from "@mantine/core";
import type { CustomNextPage, GetStaticProps } from "next";
import { Layout } from "src/layout";
import { TitleSection } from "src/component/Home";
import { BlogSection } from "src/component/Blog/BlogSection";
import { PortfolioSection } from "src/component/Portfolio";
import { GithubSection } from "src/component/Github";
import { TwitterSection } from "src/component/Twitter";
import { useMediaQuery } from "src/lib/mantine";
import { client } from "src/lib/microcms/client";
import { BlogContent, PortfolioContent } from "src/type/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { CenterButton } from "src/component/common";
import { roTwitterClient } from "src/lib/twitter/client";
import {
  TweetUserTimelineV2Paginator,
  TweetV2,
  UserV2,
  UserV2Result,
} from "twitter-api-v2";

type Props = {
  blogs: MicroCMSListResponse<BlogContent>;
  portfolios: MicroCMSListResponse<PortfolioContent>;
  twitterUser: UserV2;
  tweets: TweetV2[];
};

const Home: CustomNextPage<Props> = ({
  blogs,
  portfolios,
  twitterUser,
  tweets,
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
      "tweet.fields": ["created_at"],
      max_results: 5,
    });

  return {
    props: {
      blogs,
      portfolios,
      twitterUser: twitterUser.data,
      tweets: timeline.tweets,
    },
  };
};

export default Home;
