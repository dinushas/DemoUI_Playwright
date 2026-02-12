import { test } from '@playwright/test';

class Home {
    constructor(page) {
        this.page = page;
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
    }


    async clickSignIn(){
        await this.signInButton.click()
        

    }
}

module.exports =  {  Home }

