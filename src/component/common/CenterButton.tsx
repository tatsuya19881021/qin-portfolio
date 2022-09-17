import { Button, Center } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FC } from "react";

type Props = {
  href: string;
  target?: "_blank";
  text: string;
};

export const CenterButton: FC<Props> = ({ href, target, text }) => {
  return (
    <Center mt="lg">
      <Button
        component={NextLink}
        target={target}
        color="dark"
        className="rounded-full"
        href={href}
      >
        {text}
      </Button>
    </Center>
  );
};
