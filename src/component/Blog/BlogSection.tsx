import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FC } from "react";

type Props = {
  displayRow: number;
  blogs: {
    id: string;
    title: string;
    content: string;
    updatedAt: string /* TODO: 日付へのフォーマット対応 */;
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
          <Text>{blog.content}</Text>
          <Text>{blog.updatedAt}</Text>
        </Box>
      ))}
    </Stack>
  );
};
