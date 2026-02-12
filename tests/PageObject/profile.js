import { test, expect } from '@playwright/test';

class Profile {
    constructor(page) {
        this.page = page;
        this.wardrobeName = page.locator('p.wardrobe_name__I6azo').nth(0)
       
    }


    async verifyUrl(url) {
        await expect(this.page).toHaveURL(url);
    }

    async verifyWardrobeName(name) {
        await expect(this.wardrobeName).toHaveText(name);
    }
}

module.exports =  {  Profile }
