import { Box, Divider, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";

const articles = [...Array(5)].map((_, index) => {
  return {
    id: index,
    icon: "",
    name: "ユーザー名",
    userId: "@user",
    date: "5月25日",
    content:
      "📣 新サービス「Noway Form」をリリースしました！\n\nNoway Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogle FormsでやっていたことがNotionだけで完結します✌✨\n\n試しに使っていただけると幸いです😊\n\nhttps://www.noway-form.com/ja",
  };
});

export const TwitterSection: FC = () => {
  return (
    <Stack spacing="lg">
      <Title order={1}>GitHub</Title>
      <Divider />
      {articles.map((article) => (
        <Box key={article.id}>
          <Title order={2}>{article.name}</Title>
          <Text>{article.userId}</Text>
          <Text>{article.date}</Text>
          <Text>{article.content}</Text>
        </Box>
      ))}
    </Stack>
  );
};
