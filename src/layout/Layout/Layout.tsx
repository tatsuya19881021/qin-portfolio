import type { CustomLayout } from "next";
import dynamic from "next/dynamic";
import { Box } from "@mantine/core";
import { LayoutErrorBoundary } from "src/layout/LayoutErrorBoundary";

const Header = dynamic(async () => {
  const { Header } = await import("./Header");
  return Header;
});

const Footer = dynamic(async () => {
  const { Footer } = await import("./Footer");
  return Footer;
});

export const Layout: CustomLayout = (page) => {
  return (
    <Box className="flex flex-col h-screen">
      <Header />
      <Box py="xl" className="flex-1">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
      <Footer />
    </Box>
  );
};
