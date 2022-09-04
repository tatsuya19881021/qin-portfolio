import { FC, useState } from "react";
import { NextLink } from "@mantine/next";
import { Text, ActionIcon, Drawer, Stack, CloseButton } from "@mantine/core";
import { TbMenu2 } from "react-icons/tb";

type Props = {
  items: {
    href: string;
    text: string;
  }[];
};

export const HeaderMenu: FC<Props> = ({ items }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        styles={{ drawer: { backgroundColor: "#E64980" } }}
        withCloseButton={false}
      >
        <Stack>
          <CloseButton
            size="xl"
            color="white"
            onClick={() => setOpened(false)}
          />

          {items.map((item) => (
            <Text
              size="xl"
              weight={700}
              component={NextLink}
              href={item.href}
              color="white"
              key={item.href}
              onClick={() => setOpened(false)}
            >
              {item.text}
            </Text>
          ))}
        </Stack>
      </Drawer>

      <ActionIcon color="dark.6" onClick={() => setOpened(true)}>
        <TbMenu2 size={18} />
      </ActionIcon>
    </>
  );
};
