import { Anchor, Box, Divider, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import Link from "next/link";
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
        <Link key={blog.id} href={`/blog/detail/${blog.id}`} passHref>
          <Anchor component="a">
            <Text size={24} weight={700} color="dark.6">
              {blog.title}
            </Text>
            <Text
              color="dark.6"
              dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
            />
            <Text color="dark.2">
              {dayjs(blog.updatedAt).format("YYYY.MM.DD")}
            </Text>
          </Anchor>
        </Link>
      ))}
    </Stack>
  );
};
