export type GithubResponse = {
  user: {
    login: string;
    repositories: {
      edges: [
        {
          node: {
            id: string;
            name: string;
            description: string;
            forkCount: number;
            languages: {
              edges: [
                {
                  node: {
                    id: string;
                    name: string;
                    color: string;
                  };
                  size: number;
                }
              ];
            };
            stargazerCount: number;
          };
        }
      ];
    };
  };
};

export type GithubRepositoryContent = {
  id: string;
  name: string;
  description: string;
  forkCount: number;
  languages: {
    id: string;
    name: string;
    color: string;
    value: number;
  }[];
  stargazerCount: number;
};

export type GithubContent = {
  user: {
    login: string;
    repositories: GithubRepositoryContent[];
  };
};
