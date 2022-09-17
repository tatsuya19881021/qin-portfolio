export type BlogContent = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogContents = BlogContent[];

export type PortfolioContent = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  eyecatch: {
    url: string;
  };
  updatedAt: string;
};

export type PortfolioContents = PortfolioContent[];
