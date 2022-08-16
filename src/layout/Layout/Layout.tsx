import { FC } from "react";
import type { CustomLayout } from "next";
import dynamic from "next/dynamic";
import { Box, Center, Container, Divider, Text } from "@mantine/core";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

const Header = dynamic(async () => {
  const { Header } = await import("./Header");
  return Header;
});

export const Layout: CustomLayout = (page) => {
  return (
    <Box
    // padding="md"
    // styles={(theme) => ({
    //   body: { minHeight: "100vh" },
    //   main: { padding: 0, backgroundColor: theme.colors.gray[0] },
    // })}
    >
      <Header />
      <Box py="xl" px="md">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
      <Footer />
    </Box>
  );
};

const Footer: FC = () => {
  return (
    <Container>
      <Divider />
      <Center mt={16}>
        <Text>© ️2022 T.Mae</Text>
      </Center>
    </Container>
  );
};
