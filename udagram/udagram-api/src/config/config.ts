import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  db_port: Number(process.env.DB_PORT),
  port: Number(process.env.PORT),
  host: process.env.POSTGRES_HOST,
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  ep_app: process.env.EB_APP,
  ep_env: process.env.EB_ENV,
  aws_media_bucket: process.env.AWS_BUCKET,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
