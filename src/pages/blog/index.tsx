import { Box, Center, Container, Loader, Space } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { CustomNextPage, GetStaticProps } from "next";
import { BlogSection } from "src/component/Blog/BlogSection";
import { Layout } from "src/layout";
import { client } from "src/lib/microcms/client";
import { BlogContent } from "src/type/microcms";

type Props = MicroCMSListResponse<BlogContent>;

const Blog: CustomNextPage<Props> = (blogs) => {
  return (
    <Box component="main">
      <Container size="md">
        <BlogSection displayRow={10} blogs={blogs} />
        <Space h="lg" />
        <Center>
          <Loader color="pink.6" />
        </Center>
      </Container>
    </Box>
  );
};

Blog.getLayout = Layout;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogs = await client.getList<BlogContent>({
    endpoint: "blog",
  });

  return {
    props: blogs,
  };
};

export default Blog;
