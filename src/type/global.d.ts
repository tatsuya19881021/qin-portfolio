/* eslint-disable unused-imports/no-unused-vars */
declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly BEARER_TOKEN: string;
    readonly GITHUB_ACCESS_TOKEN: string;
    readonly TWITTER_USER_ID: string;
  }
}
