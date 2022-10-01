import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";

const link = createHttpLink({
  headers: {
    authorizattion: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
  uri: "https://api.github.com/graphql",
});

export const githubClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export const FETCH_GIT_USERS = gql`
  query {
    user(login: "tatsuya19881021") {
      login
      repositories(last: 10) {
        edges {
          node {
            name
            description
            stargazerCount
            forkCount
            languages(last: 10) {
              edges {
                node {
                  color
                  name
                }
                size
              }
            }
          }
        }
      }
    }
  }
`;
