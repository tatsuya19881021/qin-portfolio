import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Stack,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import axios from "axios";
import type { CustomNextPage } from "next";
import { TbCheck, TbX } from "react-icons/tb";
import { Layout } from "src/layout";

const Contact: CustomNextPage = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      showNotification({
        id: "send-message",
        title: "送信中",
        autoClose: false,
        disallowClose: true,
        loading: true,
        message: "メッセージを送信しています。",
      });
      await axios.post("/api/contact", JSON.stringify(values), {
        headers: {
          "Content-Type": "application/json",
        },
      });
      form.reset();
      updateNotification({
        id: "send-message",
        title: "送信完了",
        autoClose: 5000,
        color: "teal",
        icon: <TbCheck size={16} />,
        message: "メッセージの送信が完了しました！",
      });
    } catch (err) {
      updateNotification({
        id: "send-message",
        title: "送信失敗",
        autoClose: 5000,
        color: "red",
        disallowClose: true,
        icon: <TbX size={16} />,
        loading: false,
        message: "メッセージの送信が失敗しました。",
      });
      console.log(err);
    }
  };

  return (
    <Box component="main">
      <Container size="md">
        <Stack spacing="lg">
          <Title order={1}>Contact</Title>
          <Divider />

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              mt="lg"
              label="Name"
              placeholder="Taro Yamada"
              {...form.getInputProps("name")}
            />
            <Textarea
              mt="lg"
              label="Your message"
              placeholder="I want to order your goods"
              {...form.getInputProps("message")}
            />

            <Center mt="lg">
              <Button type="submit" color="dark" className="rounded-full">
                Send message
              </Button>
            </Center>
          </form>
        </Stack>
      </Container>
    </Box>
  );
};

Contact.getLayout = Layout;

export default Contact;
