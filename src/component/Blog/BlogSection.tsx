import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FC } from "react";

const articles = [...Array(10)].map((_, index) => {
  return {
    id: index,
    header: `This is a header ${index}`,
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11",
  };
});

export const BlogSection: FC = () => {
  return (
    <Stack spacing="lg">
      <Title order={1}>Blog</Title>
      <Divider />
      {articles.map((article) => (
        <Box
          key={article.id}
          component={NextLink}
          href={`/blog/detail/${article.id}`}
        >
          <Title order={2}>{article.header}</Title>
          <Text>{article.body}</Text>
          <Text>{article.date}</Text>
        </Box>
      ))}
    </Stack>
  );
};
