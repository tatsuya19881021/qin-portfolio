import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "tmae-portfolio",
  apiKey: process.env.API_KEY,
});
