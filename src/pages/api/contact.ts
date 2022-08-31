import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "src/lib/microcms/client";

const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const content = await client
    .create({
      endpoint: "contact",
      content: JSON.parse(JSON.stringify(req.body)),
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
