import { Box, Button, Center } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { TitleSection } from "src/component/Home";
import { BlogSection } from "src/component/Blog/BlogSection";
import { PortfolioSection } from "src/component/Portfolio";
import { GithubSection } from "src/component/Github";
import { TwitterSection } from "src/component/Twitter";
import { useMediaQuery } from "src/lib/mantine";
import { client } from "src/lib/microcms/client";

type Props = {
  blogs: {
    id: string;
    title: string;
    content: string;
    createdAt: string /* TODO: 日付へのフォーマット対応 */;
    updatedAt: string /* TODO: 日付へのフォーマット対応 */;
  }[];
  portfolios: {
    id: string;
    title: string;
    content: string;
    createdAt: string /* TODO: 日付へのフォーマット対応 */;
    updatedAt: string /* TODO: 日付へのフォーマット対応 */;
    eyecatch: {
      url: string;
    };
  }[];
};

const Home: CustomNextPage<Props> = ({ blogs, portfolios }) => {
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
        <TwitterSection />
      </Box>
    </Box>
  );
};

Home.getLayout = Layout;

export default Home;

export const getStaticProps = async () => {
  const blog = await client.get({
    endpoint: "blogs",
  });
  const portfolio = await client.get({
    endpoint: "portfolios",
  });

  return {
    props: {
      blogs: blog.contents,
      portfolios: portfolio.contents,
    },
  };
};
