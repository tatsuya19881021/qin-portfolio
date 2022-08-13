import {
  Box,
  Center,
  Divider,
  Loader,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import type { CustomNextPage } from "next";
import { Layout } from "src/layout";

const articles = [...Array(10)].map(() => {
  return {
    header: "This is a header",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11",
  };
});

const Blog: CustomNextPage = () => {
  return (
    <Box component="main">
      <Stack spacing="lg">
        <Title order={1}>Blog</Title>
        <Divider />
        {articles.map((article, index) => (
          <Box key={index}>
            <Title order={2}>{article.header}</Title>
            <Text>{article.body}</Text>
            <Text>{article.date}</Text>
          </Box>
        ))}
        <Center>
          <Loader color="pink.6" />
        </Center>
      </Stack>
    </Box>
  );
};

Blog.getLayout = Layout;

export default Blog;
