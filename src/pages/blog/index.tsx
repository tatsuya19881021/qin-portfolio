import { Box, Center, Loader, Space } from "@mantine/core";
import type { CustomNextPage } from "next";
import { BlogSection } from "src/component/Blog/BlogSection";
import { Layout } from "src/layout";

type Props = {
  blogs: {
    id: string;
    title: string;
    content: string;
    updatedAt: string /* TODO: 日付へのフォーマット対応 */;
  }[];
};

const Blog: CustomNextPage<Props> = ({ blogs }) => {
  return (
    <Box component="main">
      <BlogSection displayRow={10} blogs={blogs} />
      <Space h="lg" />
      <Center>
        <Loader color="pink.6" />
      </Center>
    </Box>
  );
};

Blog.getLayout = Layout;

export default Blog;
