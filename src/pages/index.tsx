import { Box, Button, Center, Group } from "@mantine/core";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { TitleSection } from "src/component/Home";
import { BlogSection } from "src/component/Blog/BlogSection";
import { PortfolioSection } from "src/component/Portfolio";
import { GithubSection } from "src/component/Github";
import { TwitterSection } from "src/component/Twitter";

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
      <Group mt={16}>
        <Box className="max-w-[50%]">
          <GithubSection />
          <Center mt="lg">
            <Button color="dark" className="rounded-full">
              View on GitHub
            </Button>
          </Center>
        </Box>
        <Box className="max-w-[50%]">
          <TwitterSection />
          <Center mt="lg">
            <Button color="dark" className="rounded-full">
              View on Twitter
            </Button>
          </Center>
        </Box>
      </Group>
    </Box>
  );
};

Home.getLayout = Layout;

export default Home;
