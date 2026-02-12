import { test } from '@playwright/test';

class CookieContainer {
    constructor(page) {
        this.page = page;
        this.cookieContainer = page.locator('.cookie-container');
        this.acceptCookies = page.getByRole('button', {name: 'Accept all cookies' })
    }


    async cookieContainerIsVisible(){
        await this.cookieContainer.waitFor();
        await this.cookieContainer.isVisible();
        

    }

    async acceptAllCookies() {
        await this.acceptCookies.click()
    }
}

module.exports =  {  CookieContainer }

