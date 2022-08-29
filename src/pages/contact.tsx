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
import axios from "axios";
import type { CustomNextPage } from "next";
import toast, { Toaster } from "react-hot-toast";
import { Layout } from "src/layout";

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
      const sendMessage = axios
        .post("/api/contact", values, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          form.reset();
        });
      toast.promise(sendMessage, {
        loading: "メッセージ送信中。",
        success: "メッセージの送信が完了しました！",
        error: "メッセージの送信に失敗しました。",
      });
    } catch (err) {
      toast.error("メッセージの送信に失敗しました。");
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
      <Toaster />
    </Box>
  );
};

Contact.getLayout = Layout;

export default Contact;
