
import dotenv from 'dotenv';
import path from 'path';

export function loadEnv() {
  const env = process.env.ENV || 'uat';

  dotenv.config({
    path: path.resolve(process.cwd(), `.env.${env}`)
  });

  return {
    baseURL: process.env.BASE_URL,
    appURL: process.env.APP_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    profileName: process.env.PROFILE_NAME
  };
}
