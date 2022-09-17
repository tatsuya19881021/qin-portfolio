import { Burger, Drawer, Stack, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FC } from "react";

type Props = {
  items: {
    href: string;
    text: string;
  }[];
  onClick: () => void;
  opened: boolean;
};

export const HeaderMenu: FC<Props> = ({ items, onClick, opened }) => {
  return (
    <Drawer
      opened={opened}
      onClose={onClick}
      padding="xl"
      size="full"
      styles={{ drawer: { backgroundColor: "#E64980" } }}
      withCloseButton={false}
    >
      <Stack>
        <Burger opened={opened} onClick={onClick} color="white" mb={8} />

        {items.map((item) => (
          <Text
            size="xl"
            weight={700}
            component={NextLink}
            href={item.href}
            color="white"
            key={item.href}
            onClick={onClick}
          >
            {item.text}
          </Text>
        ))}
      </Stack>
    </Drawer>
  );
};
