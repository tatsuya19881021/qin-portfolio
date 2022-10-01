import { Box, Container } from "@mantine/core";
import axios from "axios";
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
import { BlogContent, PortfolioContent } from "src/type/microcms";
import { TwitterContents } from "src/type/twitter";
import useSWR from "swr";

type Props = {
  blogs: MicroCMSListResponse<BlogContent>;
  portfolios: MicroCMSListResponse<PortfolioContent>;
};

const fetchTwitter = async (url: string): Promise<TwitterContents> => {
  const response = await axios.get(url);
  return response.data;
};

const Home: CustomNextPage<Props> = ({ blogs, portfolios }) => {
  const largerThanSm = useMediaQuery("sm");
  const response = useSWR("/api/tweet", fetchTwitter);
  const tweets = response.data ?? [];

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
          <TwitterSection tweets={tweets} />
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

  // const { data: { users } = {} } = await githubClient.query({
  //   query: FETCH_GIT_USERS,
  // });

  // console.log(users);

  return {
    props: {
      blogs,
      portfolios,
    },
  };
};

export default Home;
