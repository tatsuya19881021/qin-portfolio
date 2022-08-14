import { Box, Button, Center } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { TitleSection } from "src/component/Home";
import { BlogSection } from "src/component/Blog/BlogSection";
import { PortfolioSection } from "src/component/Portfolio";

const Home: CustomNextPage = () => {
  return (
    <Box component="main">
      <TitleSection />
      <Box mt={16}>
        <BlogSection />
        <Center mt="lg">
          <Button color="dark" className="rounded-full">
            View All
          </Button>
        </Center>
      </Box>
      <Box mt={16}>
        <PortfolioSection />
        <Center mt="lg">
          <Button color="dark" className="rounded-full">
            View All
          </Button>
        </Center>
      </Box>
    </Box>
  );
};

Home.getLayout = Layout;

export default Home;
