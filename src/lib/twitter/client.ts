import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi(process.env.BEARER_TOKEN);
export const roTwitterClient = client.readOnly;
