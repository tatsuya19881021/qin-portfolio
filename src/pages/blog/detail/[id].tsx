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
import { useRouter } from "next/router";
import { Layout } from "src/layout";

const articles = [...Array(10)].map((_, index) => {
  return {
    id: index,
    header: `This is a header ${index}`,
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
    date: "2022.07.11",
  };
});

const BlogDetail: CustomNextPage = () => {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <Box component="main">
      <Stack spacing="lg">
        <Title order={1}>{articles[id].header}</Title>
        <Divider />
        <Box>
          <Text>{articles[id].date}</Text>
          <Text>{articles[id].body}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

BlogDetail.getLayout = Layout;

export default BlogDetail;
