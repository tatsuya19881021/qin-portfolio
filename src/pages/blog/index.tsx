import { Box, Center, Loader, Space } from "@mantine/core";
import type { CustomNextPage } from "next";
import { BlogSection } from "src/component/Blog/BlogSection";
import { Layout } from "src/layout";

const Blog: CustomNextPage = () => {
  return (
    <Box component="main">
      <BlogSection />
      <Space h="lg" />
      <Center>
        <Loader color="pink.6" />
      </Center>
    </Box>
  );
};

Blog.getLayout = Layout;

export default Blog;
