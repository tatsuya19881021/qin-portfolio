import { Button, Center } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { FC } from "react";

type Props = {
  target?: "_blank";
  href: string;
  text: string;
};

export const CenterButton: FC<Props> = ({ target, href, text }) => {
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
