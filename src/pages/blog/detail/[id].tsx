import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import type { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "src/layout";

const articles = [...Array(10)].map((_, index) => {
  return {
    id: index,
    title: `This is a header ${index}`,
    content:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    updatedAt: "2022.07.11",
  };
});

const BlogDetail: CustomNextPage = () => {
  const router = useRouter();
  const id = router.query.id ? Number(router.query.id) : 0;

  return (
    <Box component="main">
      <Stack spacing="lg">
        <Title order={1}>{articles[id].title}</Title>
        <Divider />
        <Box>
          <Text>{articles[id].updatedAt}</Text>
          <Text>{articles[id].content}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

BlogDetail.getLayout = Layout;

export default BlogDetail;
