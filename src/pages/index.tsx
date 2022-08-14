import { Box } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { TitleSection } from "src/component/Home";

const Home: CustomNextPage = () => {
  return (
    <Box component="main">
      <TitleSection />
    </Box>
  );
};

Home.getLayout = Layout;

export default Home;
