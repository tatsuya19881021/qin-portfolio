import Client from "twitter-api-sdk";

export const twitterClient = new Client(process.env.BEARER_TOKEN);
