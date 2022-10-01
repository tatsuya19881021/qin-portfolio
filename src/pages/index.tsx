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
import { FETCH_GIT_USERS, githubClient } from "src/lib/github/client";
import { useMediaQuery } from "src/lib/mantine";
import { client } from "src/lib/microcms/client";
import { GithubContent, GithubResponse } from "src/type/github";
import { BlogContent, PortfolioContent } from "src/type/microcms";
import { TwitterContents } from "src/type/twitter";
import useSWR from "swr";

type Props = {
  blogs: MicroCMSListResponse<BlogContent>;
  github: GithubContent;
  portfolios: MicroCMSListResponse<PortfolioContent>;
};

const fetchTwitter = async (url: string): Promise<TwitterContents> => {
  const response = await axios.get(url);
  return response.data;
};

const Home: CustomNextPage<Props> = ({ blogs, github, portfolios }) => {
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
          <GithubSection github={github} />
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

  const { data: resultGithub } = await githubClient.query<GithubResponse>({
    query: FETCH_GIT_USERS,
  });
  const github = {
    user: {
      login: resultGithub?.user.login,
      repositories: resultGithub?.user.repositories.edges.map((edge) => {
        const total = edge.node.languages.edges.reduce(
          (sum, element) => sum + element.size,
          0
        );
        const languages = edge.node.languages.edges.map((language) => {
          return {
            id: language.node.id,
            name: language.node.name,
            color: language.node.color,
            value: Number(((language.size / total) * 100).toFixed(1)),
          };
        });

        return {
          id: edge.node.id,
          name: edge.node.name,
          description: edge.node.description,
          forkCount: edge.node.forkCount,
          languages,
          stargazerCount: edge.node.stargazerCount,
        };
      }),
    },
  };

  // console.log(github.user.repositories.edges.map((edge) => edge.node.id));

  return {
    props: {
      blogs,
      github,
      portfolios,
    },
  };
};

export default Home;
