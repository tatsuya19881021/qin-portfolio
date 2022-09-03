import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";
import { client } from "src/lib/microcms/client";

type Content = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
};

type Props = {
  blog: Content;
};

const BlogDetail: CustomNextPage<Props> = ({ blog }) => {
  return (
    <Box component="main">
      <Stack spacing="lg">
        <Title order={1}>{blog.title}</Title>
        <Divider />
        <Box>
          <Text>{dayjs(blog.updatedAt).format("YYYY.MM.DD")}</Text>
          <Text dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
        </Box>
      </Stack>
    </Box>
  );
};

BlogDetail.getLayout = Layout;

export default BlogDetail;

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map(
    (content: { id: string }) => `/blog/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id;
  const blog = await client.getListDetail<Content>({
    endpoint: "blog",
    contentId: id,
  });

  return {
    props: {
      blog,
    },
  };
};