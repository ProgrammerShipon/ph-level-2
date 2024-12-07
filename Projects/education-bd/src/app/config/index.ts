import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const node_env = process.env.NODE_ENV;

export default {
  port: process.env.PORT,
  database_url:
    node_env === "production"
      ? process.env.DATABASE_URL
      : process.env.LOCAL_DATABASE,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
