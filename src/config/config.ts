const config = {
  app: {
    port: 3000,
    apiVersion: "v1"
  },
  api: {
    url: "https://hn.algolia.com/api/v1/search_by_date?query=nodejs"
  },
  mongo: {
    username: "hackernews",
    password: "qwerty12345"
  }
};

export default config;
