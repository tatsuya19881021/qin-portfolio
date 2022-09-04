import { FC } from "react";
import { NextLink } from "@mantine/next";
import { Box, Group, Text, ActionIcon } from "@mantine/core";
import { TbMoon, TbSun } from "react-icons/tb";
import { useMediaQuery } from "src/lib/mantine";
import { HeaderMenu } from "src/layout/Layout/HeaderMenu";

const ITEMS = [
  { href: "/about", text: "About" },
  { href: "/blog", text: "Blog" },
  { href: "/portfolio", text: "Portfolio" },
  { href: "/contact", text: "Contact" },
];

export const Header: FC = () => {
  const largerThanSm = useMediaQuery("sm");
  const dark = false;

  return (
    <Box
      component="header"
      sx={(theme) => ({
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        backgroundColor: theme.white,
      })}
    >
      <Group position="apart" spacing="lg" noWrap>
        {largerThanSm ? null : <HeaderMenu items={ITEMS} />}

        <Text size="xl" weight={700} component={NextLink} href="/">
          My Portfolio
        </Text>

        <Group position="right">
          {largerThanSm ? (
            <Group spacing="md">
              {ITEMS.map((item) => (
                <Text
                  size="xl"
                  weight={700}
                  component={NextLink}
                  href={item.href}
                  key={item.href}
                >
                  {item.text}
                </Text>
              ))}
            </Group>
          ) : null}

          <ActionIcon
            variant="default"
            color={dark ? "yello" : "blue"}
            title="Toggle color scheme"
            sx={{ "&:not(:disabled):active": { transform: "none" } }}
          >
            {dark ? <TbSun size={18} /> : <TbMoon size={18} />}
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
};
