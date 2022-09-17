import {
  ActionIcon,
  Box,
  Container,
  Group,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FC, useState } from "react";
import { TbMenu2, TbMoon, TbSun } from "react-icons/tb";
import { HeaderMenu } from "src/layout/Layout/HeaderMenu";
import { useMediaQuery } from "src/lib/mantine";

const ITEMS = [
  { href: "/about", text: "About" },
  { href: "/blog", text: "Blog" },
  { href: "/portfolio", text: "Portfolio" },
  { href: "/contact", text: "Contact" },
];

export const Header: FC = () => {
  const largerThanSm = useMediaQuery("sm");
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const handleClick = (prevOpened: boolean) => {
    prevOpened ? setOpened(false) : setOpened(true);
  };

  return (
    <Box className="w-full">
      {largerThanSm ? null : (
        <HeaderMenu
          items={ITEMS}
          opened={opened}
          onClick={() => handleClick(opened)}
        />
      )}
      <Container size="md">
        <Box
          component="header"
          className={
            largerThanSm
              ? "w-full flex items-center justify-between h-16 bg"
              : "w-full flex items-center justify-center h-16"
          }
        >
          <ActionIcon
            color="dark.6"
            className={largerThanSm ? "hidden" : undefined}
            onClick={() => handleClick(opened)}
          >
            <TbMenu2 size={18} />
          </ActionIcon>

          <Text
            size="xl"
            weight={700}
            component={NextLink}
            href="/"
            className={largerThanSm ? undefined : "m-auto"}
          >
            My Portfolio
          </Text>

          <Group position="right" spacing="xl" align="center">
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
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
              sx={{ "&:not(:disabled):active": { transform: "none" } }}
            >
              {dark ? <TbSun size={18} /> : <TbMoon size={18} />}
            </ActionIcon>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};
