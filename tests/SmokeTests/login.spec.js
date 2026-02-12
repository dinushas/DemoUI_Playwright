import { test } from '@playwright/test';
import { Home } from '../PageObject/home';
import { Login } from '../PageObject/login';
import { CookieContainer } from '../PageObject/cookieContainer';
import { Profile } from '../PageObject/profile';
import { config } from '../../utils/env';

test('Verify Login and Profile', async ({ page }) => {
  const home = new Home(page);
  const cookie = new CookieContainer(page);
  const login = new Login(page);
  const profile = new Profile(page);

  // Go to base URL
  await page.goto('/how-it-works');

  // Handle cookies
  await cookie.cookieContainerIsVisible();
  await cookie.acceptAllCookies();

  // Click Sign In
  await home.clickSignIn();

  // Login using GitHub Secrets or local .env
  await login.login(config.username, config.password);

  // Verify user is on correct profile URL
  // Use regex to avoid username masking issues on CI
  await profile.verifyUrl(new RegExp('/profile/.*/pieces'));

  // Verify wardrobe name
  await profile.verifyWardrobeName(config.profileName);

  // Debug output
  console.log('Username:', config.username);
  console.log('Profile Name:', config.profileName);
  console.log('App URL:', config.appURL);
});
