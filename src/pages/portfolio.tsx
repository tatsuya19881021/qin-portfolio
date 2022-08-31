import { Box } from "@mantine/core";
import type { CustomNextPage } from "next";
import { PortfolioSection } from "src/component/Portfolio";
import { Layout } from "src/layout";
import { client } from "src/lib/microcms/client";

type Props = {
  portfolios: {
    id: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    eyecatch: {
      url: string;
    };
  }[];
};

const Portfolio: CustomNextPage<Props> = ({ portfolios }) => {
  return (
    <Box component="main">
      <PortfolioSection portfolios={portfolios} />
    </Box>
  );
};

Portfolio.getLayout = Layout;

export default Portfolio;

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "portfolio",
  });

  return {
    props: {
      portfolios: data.contents,
    },
  };
};
