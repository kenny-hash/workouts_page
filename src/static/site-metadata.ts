interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://blog.kenny-hash.com',
  logo: 'https://avatars.githubusercontent.com/u/23119736',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://blog.kenny-hash.com',
    },
    {
      name: 'About',
      url: 'https://github.com/kenny-hash',
    },
  ],
};

export default data;
