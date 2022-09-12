import { ActionIcon } from "@mantine/core";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const TitleIcon: FC<Props> = ({ children }) => {
  return (
    <ActionIcon
      size="md"
      className="bg-pink-600 text-white"
      sx={{ "&:not(:disabled):active": { transform: "none" } }}
    >
      {children}
    </ActionIcon>
  );
};
