const environment = {
  private: {
    apiKey: process.env.API_KEY,
    env: process.env.NODE_ENV,
  },
  public: {
    websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },
};

export default environment;
