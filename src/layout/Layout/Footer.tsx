import { FC } from "react";
import { Box, Center, Divider, Text } from "@mantine/core";

export const Footer: FC = () => {
  return (
    <Box>
      <Divider />
      <Center mt={16}>
        <Text color="gray.6">&copy;2022 T.Mae</Text>
      </Center>
    </Box>
  );
};
