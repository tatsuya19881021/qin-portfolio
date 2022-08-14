import { Box } from "@mantine/core";
import type { CustomNextPage } from "next";
import { PortfolioSection } from "src/component/Portfolio";
import { Layout } from "src/layout";

const Portfolio: CustomNextPage = () => {
  return (
    <Box component="main">
      <PortfolioSection />
    </Box>
  );
};

Portfolio.getLayout = Layout;

export default Portfolio;
