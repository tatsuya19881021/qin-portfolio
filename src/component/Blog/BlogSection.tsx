import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";
import dayjs from "dayjs";
import { FC } from "react";

type Props = {
  displayRow: number;
  blogs: {
    id: string;
    title: string;
    content: string;
    updatedAt: string;
  }[];
};

export const BlogSection: FC<Props> = ({ displayRow, blogs }) => {
  return (
    <Stack spacing="lg">
      <Title order={1}>Blog</Title>
      <Divider />
      {blogs?.map((blog) => (
        <Box
          key={blog.id}
          component={NextLink}
          href={`/blog/detail/${blog.id}`}
        >
          <Title order={2}>{blog.title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: `${blog.content}` }} />
          <Text>{dayjs(blog.updatedAt).format("YYYY.MM.DD")}</Text>
        </Box>
      ))}
    </Stack>
  );
};
