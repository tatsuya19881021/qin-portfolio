import { Box, Button, Center } from "@mantine/core";
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
      <Box mt={16}>
        <BlogSection displayRow={5} blogs={blogs} />
        <Center mt="lg">
          <Button color="dark" className="rounded-full">
            View All
          </Button>
        </Center>
      </Box>
      <Box mt={16}>
        <PortfolioSection portfolios={portfolios} />
        <Center mt="lg">
          <Button color="dark" className="rounded-full">
            View All
          </Button>
        </Center>
      </Box>
      <Box
        mt={16}
        className={largerThanSm ? "flex justify-between space-x-10" : undefined}
      >
        <GithubSection />
        <TwitterSection twitterUser={twitterUser} tweets={tweets} />
      </Box>
    </Box>
  );
};

Home.getLayout = Layout;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await client.getList<BlogContent>({
    endpoint: "blog",
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
