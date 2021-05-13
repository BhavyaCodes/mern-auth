const config = {
  dbUrl:
    process.env.NODE_ENV === "production"
      ? process.env.DB_URL
      : "mongodb://localhost:27017/mern-auth",
  port: process.env.PORT || 5000,
  cookieKey: process.env.COOKIE_KEY,
};

export default config;
