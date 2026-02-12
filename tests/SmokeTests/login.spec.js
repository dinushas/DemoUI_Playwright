
import { test } from '@playwright/test';
import { Home } from '../PageObject/home';
import { Login } from '../PageObject/login';
import { CookieContainer } from '../PageObject/cookieContainer';
import { Profile } from '../PageObject/profile';
import dotenv from 'dotenv';
import path from 'path';

// Load .env only locally (not on CI)
if (!process.env.CI) {
    const env = process.env.ENV || 'uat';
    dotenv.config({
        path: path.resolve(process.cwd(), `.env.${env}`)
    });
}

//  Use environment variables (works locally and in CI)
const config = {
    baseURL: process.env.BASE_URL,
    appURL: process.env.APP_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    profileName: process.env.PROFILE_NAME
};

test('Verify Login and Profile', async ({ page }) => {

    // Initialize page objects
    const home = new Home(page);
    const cookie = new CookieContainer(page);
    const login = new Login(page);
    const profile = new Profile(page);

    //  Go to the base URL
    await page.goto(`${config.baseURL}/how-it-works`);

    //  Handle cookies
    await cookie.cookieContainerIsVisible();
    await cookie.acceptAllCookies();

    //  Click Sign In
    await home.clickSignIn();

    //  Login using environment variables
    await login.login(config.username, config.password);

    // Verify the user is on the correct profile URL
    await profile.verifyUrl(config.appURL);

    //  Verify wardrobe name
    await profile.verifyWardrobeName(config.profileName);
});
