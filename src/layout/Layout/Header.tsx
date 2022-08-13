import { FC } from "react";
import { NextLink } from "@mantine/next";
import {
  Box,
  Group,
  Title,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Space,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons";

export const Header: FC = () => {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const dark = colorScheme === "dark";
  const dark = false;

  return (
    <Box
      component="header"
      sx={(theme) => ({
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        backgroundColor: theme.white,
      })}
    >
      <Group spacing="lg" noWrap>
        <Title order={3}>My Portfolio</Title>
        <Space w="xl" />
        <Text size="xl" weight={700} component={NextLink} href="/about">
          About
        </Text>
        <Text size="xl" weight={700} component={NextLink} href="/blog">
          Blog
        </Text>
        <Text size="xl" weight={700} component={NextLink} href="/portfolio">
          Portfolio
        </Text>
        <Text size="xl" weight={700} component={NextLink} href="/contact">
          Contact
        </Text>
        <ActionIcon
          variant="outline"
          color={dark ? "yello" : "blue"}
          // onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
          sx={{ "&:not(:disabled):active": { transform: "none" } }}
        >
          {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
        </ActionIcon>
      </Group>
    </Box>
  );
};
