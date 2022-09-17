import { Anchor, Divider, Stack, Text, Title } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { FC } from "react";
import { BlogContent } from "src/type/microcms";

type Props = {
  blogs: MicroCMSListResponse<BlogContent>;
};

export const BlogSection: FC<Props> = ({ blogs }) => {
  return (
    <Stack spacing="lg">
      <Title order={1}>Blog</Title>
      <Divider />
      {blogs.contents.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`} passHref>
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
