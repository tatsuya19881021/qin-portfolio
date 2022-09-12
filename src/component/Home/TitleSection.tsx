import { Container, Text, Box } from "@mantine/core";
import { FC } from "react";
import { FaTwitter, FaFacebookSquare, FaRss } from "react-icons/fa";
import { TitleIcon } from "src/component/Home/TitleIcon";
import { useMediaQuery } from "src/lib/mantine";

export const TitleSection: FC = () => {
  const largerThanSm = useMediaQuery("sm");

  return (
    <Box className="bg-pink-600 h-60">
      <Container size="md">
        <Box
          className={
            largerThanSm
              ? "flex justify-between items-center h-60"
              : "flex flex-col justify-center h-60"
          }
        >
          <Box>
            <Text
              weight={700}
              size={largerThanSm ? 36 : 28}
              className="text-white"
            >
              My Portfolio
            </Text>
            <Text weight={700} size="xs" className="text-white">
              私のポートフォリオのためのページです
            </Text>
          </Box>

          <Box
            className={largerThanSm ? "flex space-x-2" : "flex space-x-2 mt-10"}
          >
            <TitleIcon>
              <FaTwitter />
            </TitleIcon>
            <TitleIcon>
              <FaFacebookSquare />
            </TitleIcon>
            <TitleIcon>
              <FaRss />
            </TitleIcon>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
