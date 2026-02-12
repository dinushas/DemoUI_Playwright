import { test } from '@playwright/test';

class Login {
    constructor(page) {
        this.page = page;
        this.email = page.locator('[data-testid="email-input"]');
        this.password = page.locator('[data-testid="password-input"]')
        this.submitButton = page.locator('[data-testid="login-button"]')
    }


    async login(email, password){
        await this.email.fill(email)
        await this.password.fill(password)
        await this.submitButton.click()
        

    }
}

module.exports =  {  Login }
