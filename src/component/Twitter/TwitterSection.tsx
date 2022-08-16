import {
  Avatar,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { FC } from "react";

const articles = [...Array(3)].map((_, index) => {
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
      <Title order={1}>Twitter</Title>
      <Divider />
      {articles.map((article) => (
        <Grid
          key={article.id}
          justify="space-between"
          align="flex-start"
          columns={24}
        >
          <Grid.Col span={1}>
            <Avatar radius="xl" size={38} />
          </Grid.Col>
          <Grid.Col span={21}>
            <Group>
              <Text size="xl" weight={700}>
                {article.name}
              </Text>
              <Text>
                {article.userId} ・ {article.date}
              </Text>
            </Group>
            <Text>{article.content}</Text>
          </Grid.Col>
        </Grid>
      ))}
    </Stack>
  );
};
