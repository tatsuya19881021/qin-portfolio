import { Box, Button, Center, Container } from "@mantine/core";
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

type Props = {
  blogs: MicroCMSListResponse<BlogContent>;
  portfolios: MicroCMSListResponse<PortfolioContent>;
};

const Home: CustomNextPage<Props> = ({ blogs, portfolios }) => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Box component="main">
      <TitleSection />
      <Container size="md" py={16}>
        <BlogSection displayRow={5} blogs={blogs} />
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
          <TwitterSection />
        </Box>
      </Container>
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

  return {
    props: {
      blogs,
      portfolios,
    },
  };
};

export default Home;
