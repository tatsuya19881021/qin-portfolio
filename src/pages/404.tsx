import { Box } from "@mantine/core";
import { CustomNextPage } from "next";

const Custom404: CustomNextPage = () => {
  return (
    <Box component="main">
      <Box component="p">ページがありません。</Box>
    </Box>
  );
};

export default Custom404;
