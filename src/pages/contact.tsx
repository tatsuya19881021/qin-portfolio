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
import { Layout } from "src/layout";

const Contact: CustomNextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    try {
      await axios
        .post("/api/contact", values, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
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
