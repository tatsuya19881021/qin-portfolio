import {
  Container,
  Stack,
  Title,
  Group,
  ActionIcon,
  Text,
  Box,
} from "@mantine/core";
import { FC } from "react";
import { FaTwitter, FaFacebookSquare, FaRss } from "react-icons/fa";

export const TitleSection: FC = () => {
  return (
    <Box className="bg-pink-600 h-60">
      {/* TODO: 垂直方向で中央に配置したいが、今のコンポーネントだと調整が上手く行かない */}
      <Container>
        <Group position="apart">
          <Stack>
            <Title order={1} className="text-white">
              My Portfolio
            </Title>
            <Text size="lg" className="text-white">
              私のポートフォリオのためのページです
            </Text>
          </Stack>
          <Group position="right" spacing={4}>
            <ActionIcon
              size="md"
              className="bg-pink-600 text-white"
              sx={{ "&:not(:disabled):active": { transform: "none" } }}
            >
              <FaTwitter />
            </ActionIcon>
            <ActionIcon
              size="md"
              className="bg-pink-600 text-white"
              sx={{ "&:not(:disabled):active": { transform: "none" } }}
            >
              <FaFacebookSquare />
            </ActionIcon>
            <ActionIcon
              size="md"
              className="bg-pink-600 text-white"
              sx={{ "&:not(:disabled):active": { transform: "none" } }}
            >
              <FaRss />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </Box>
  );
};
