import { Box, Container, Divider, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import type { CustomNextPage, GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "src/layout";
import { client } from "src/lib/microcms/client";
import { BlogContent, BlogContents } from "src/type/microcms";

type Props = BlogContent & MicroCMSContentId & MicroCMSDate;

const BlogDetail: CustomNextPage<Props> = (blog) => {
  return (
    <Box component="main">
      <Container size="md">
        <Stack spacing="lg">
          <Title order={1}>{blog.title}</Title>
          <Divider />
          <Box>
            <Text component="time" color="dark.2">
              {dayjs(blog.updatedAt).format("YYYY.MM.DD")}
            </Text>
            <Text
              component="article"
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

BlogDetail.getLayout = Layout;

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const blogs = await client.getList<BlogContents>({
    endpoint: "blog",
  });
  const paths = blogs.contents.map((content) => `/blog/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return {
      notFound: true,
    };
  }

  const blog = await client.getListDetail<BlogContent>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });

  return {
    props: blog,
  };
};

export default BlogDetail;
