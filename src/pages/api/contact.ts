import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/microcms/client";

type Content = {
  name: string;
  email: string;
  message: string;
};

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const content = await client
    .create<Content>({
      content: req.body,
      endpoint: "contact",
    })
    .then(() => "Created")
    .catch(() => null);

  // CMS側で正しく作成されたかチェック
  if (content !== "Created") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  res.status(200).json({ message: "OK" });
};

export default contact;
