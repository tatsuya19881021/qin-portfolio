import {
  Box,
  Button,
  Center,
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
import { Layout } from "src/layout";
import { TbCheck, TbX } from "react-icons/tb";

const Contact: CustomNextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
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
        loading: true,
        title: "送信中",
        message: "メッセージを送信しています。",
        autoClose: false,
        disallowClose: true,
      });
      await axios.post("/api/contact", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      form.reset();
      updateNotification({
        id: "send-message",
        color: "teal",
        title: "送信完了",
        message: "メッセージの送信が完了しました！",
        icon: <TbCheck size={16} />,
        autoClose: 5000,
      });
    } catch (err) {
      updateNotification({
        id: "send-message",
        loading: false,
        color: "red",
        title: "送信失敗",
        message: "メッセージの送信が失敗しました。",
        icon: <TbX size={16} />,
        autoClose: 5000,
        disallowClose: true,
      });
      console.log(err);
    }
  };

  return (
    <Box component="main">
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
    </Box>
  );
};

Contact.getLayout = Layout;

export default Contact;
