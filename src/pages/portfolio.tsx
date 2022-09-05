import { Box } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { CustomNextPage, GetStaticProps } from "next";
import { PortfolioSection } from "src/component/Portfolio";
import { Layout } from "src/layout";
import { client } from "src/lib/microcms/client";
import { PortfolioContent } from "src/type/microcms";

type Props = MicroCMSListResponse<PortfolioContent>;

const Portfolio: CustomNextPage<Props> = (portfolios) => {
  return (
    <Box component="main">
      <PortfolioSection portfolios={portfolios} />
    </Box>
  );
};

Portfolio.getLayout = Layout;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const portfolios = await client.getList<PortfolioContent>({
    endpoint: "portfolio",
  });

  return {
    props: portfolios,
  };
};

export default Portfolio;
