
import { test } from '@playwright/test';
import { Home } from '../PageObject/home';
import { Login } from '../PageObject/login';
import { CookieContainer } from '../PageObject/cookieContainer';
import { Profile } from '../PageObject/profile';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables dynamically
const env = process.env.ENV || 'uat';
dotenv.config({
    path: path.resolve(process.cwd(), `.env.${env}`)
});

const config = {
    baseURL: process.env.BASE_URL,
    appURL: process.env.APP_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    profileName: process.env.PROFILE_NAME
};

test('Verify Login and Profile', async ({ page }) => {

    const home = new Home(page);
    const cookie = new CookieContainer(page);
    const login = new Login(page);
    const profile = new Profile(page);

    // 1️⃣ Go to base URL
    await page.goto('/how-it-works'); // Uses baseURL from config

    // 2️⃣ Handle cookies
    await cookie.cookieContainerIsVisible();
    await cookie.acceptAllCookies();

    // 3️⃣ Click Sign In
    await home.clickSignIn();

    // 4️⃣ Login using env credentials
    await login.login(config.username, config.password);

    // 5️⃣ Verify user is on correct profile URL
    await profile.verifyUrl(config.appURL);

    // 6️⃣ Verify wardrobe name
    await profile.verifyWardrobeName(config.profileName);
});
