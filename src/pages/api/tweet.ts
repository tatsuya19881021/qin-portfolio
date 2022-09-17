import type { NextApiRequest, NextApiResponse } from "next";
import { twitterClient } from "src/lib/twitter/client";

const tweet = async (req: NextApiRequest, res: NextApiResponse) => {
  const usersTweets = await twitterClient.tweets.usersIdTweets(
    process.env.TWITTER_USER_ID,
    {
      expansions: ["author_id"],
      max_results: 5,
      "tweet.fields": ["author_id", "created_at"],
      "user.fields": ["profile_image_url"],
    }
  );

  const error = usersTweets.errors
    ? {
        title: usersTweets.errors[0].title,
        detail: usersTweets.errors[0].detail,
      }
    : {
        title: "no data",
        detail: "user or data",
      };
  if (usersTweets.errors || !usersTweets.includes?.users || !usersTweets.data) {
    return res.status(400).json(error);
  }

  const data = usersTweets.data;
  const user = usersTweets.includes.users[0];
  const tweets =
    data?.map((value) => {
      return {
        id: value.id,
        name: "tmae94854943",
        created_at: value.created_at,
        profile_image_url: user.profile_image_url,
        text: value.text,
        username: user.name,
      };
    }) ?? [];

  res.status(200).json(tweets);
};

export default tweet;
