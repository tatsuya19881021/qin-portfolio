import { Box, Button, Center, Group } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { TitleSection } from "src/component/Home";
import { BlogSection } from "src/component/Blog/BlogSection";
import { PortfolioSection } from "src/component/Portfolio";
import { GithubSection } from "src/component/Github";
import { TwitterSection } from "src/component/Twitter";
import { useMediaQuery } from "src/lib/mantine";

const Home: CustomNextPage = () => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Box component="main">
      <TitleSection />
      <Box mt={16}>
        <BlogSection displayRow={5} />
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
