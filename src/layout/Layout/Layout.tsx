import { FC } from "react";
import type { CustomLayout } from "next";
import dynamic from "next/dynamic";
import { Box, Center, Divider, Text } from "@mantine/core";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

const Header = dynamic(async () => {
  const { Header } = await import("./Header");
  return Header;
});

export const Layout: CustomLayout = (page) => {
  return (
    <Box className="flex flex-col h-screen">
      <Header />
      <Box py="xl" px="md" className="flex-1">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
      <Footer />
    </Box>
  );
};

const Footer: FC = () => {
  return (
    <Box>
      <Divider />
      <Center mt={16}>
        <Text color="gray.6">&copy;2022 T.Mae</Text>
      </Center>
    </Box>
  );
};
