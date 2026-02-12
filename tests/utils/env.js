import dotenv from 'dotenv';
import path from 'path';

const isCI = process.env.CI === 'true';
const env = process.env.ENV || 'uat';

// Only load local .env if not on CI
if (!isCI) {
  dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });
}

export const config = {
  baseURL: process.env.BASE_URL,
  appURL: process.env.APP_URL,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  profileName: process.env.PROFILE_NAME,
};
