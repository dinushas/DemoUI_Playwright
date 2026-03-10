**DemoUI Playwright Automation Framework**

This repository contains a UI automation testing framework built using Playwright. The project demonstrates modern end-to-end testing practices, scalable test structure, and Continuous Integration using GitHub Actions.

The framework is designed to showcase automation best practices suitable for real-world web applications.

**Tech Stack**

- Playwright

- JavaScript (Node.js)

- Playwright Test Runner

- GitHub Actions (CI/CD)

- HTML Reporting

**Project Structure**

<img width="344" height="120" alt="image" src="https://github.com/user-attachments/assets/e047f13d-552c-4f55-bf48-e759c67f91c8" />


**Features**

- Cross-browser testing (Chromium, Firefox, WebKit)

- Parallel test execution

- Headless and headed execution

- Automatic screenshots and traces on failure

- HTML test reporting

- CI execution with GitHub Actions

- Scalable and maintainable test structure

**Prerequisites**

- Ensure the following are installed:

- Node.js (v16 or higher)

- npm

- Git

**Installation**

- Clone the repository:

- git clone https://github.com/dinushas/DemoUI_Playwright.git
- cd DemoUI_Playwright

**Install dependencies:**

- npm install

**Install Playwright browsers:**

- npx playwright install


**Running Tests**

- npx playwright test


**Run tests in headed mode:**

- npx playwright test --headed

**Run a specific test file:**

- npx playwright test tests/example.spec.js


**Test Reports**

- After test execution, open the Playwright HTML report:

- npx playwright show-report


**Continuous Integration (GitHub Actions)**

- This project uses GitHub Actions to automatically execute tests on:

- Every push to the main branch

- Every pull request

- The CI workflow performs the following steps:

- Checks out the repository

- Installs Node.js dependencies

- Installs Playwright browsers

- Runs all automated tests

- Uploads the Playwright HTML report as an artifact

- You can view test execution results in the Actions tab of the repository.

**Purpose of This Project**

- This project is created to:

- Demonstrate Playwright UI automation framework design

- Showcase CI/CD integration for automation testing

- Serve as a portfolio project for QA automation roles

- Practice modern automation engineering techniques



Login Data Driven 

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { DataProvider } from '../utils/dataProvider';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';


//Load JSON test data logindata.json

const jsonPath="testdata/logindata.json";
const jsonTestData=DataProvider.getTestDataFromJson(jsonPath);


for(const data of jsonTestData)
{
   test(`Login Test with JSON Data: ${data.testName} @datadriven`, async({page})=>{

        const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccountPage=new MyAccountPage(page);
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getloginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');
        }
    })

}



//Load CSV test data logindata.json

const csvPath = "testdata/logindata.csv";
const csvTestData = DataProvider.getTestDataFromCsv(csvPath);


for(const data of csvTestData)
{
   test(`Login Test with CSV Data: ${data.testName} @datadriven`, async({page})=>{

        const config = new TestConfig(); // create instance
        await page.goto(config.appUrl);    // getting appURL from test.config.ts file

        const homePage = new HomePage(page);
        await homePage.clickMyAccount();
        await homePage.clickLogin();

        const loginPage = new LoginPage(page);
        await loginPage.login(data.email, data.password);

        if(data.expected.toLowerCase()==='success')
        {
            const myAccountPage=new MyAccountPage(page);
            const isLoggedIn=await myAccountPage.isMyAccountPageExists();
            expect(isLoggedIn).toBeTruthy();

        }
        else{
            const errorMessage=await loginPage.getloginErrorMessage();
            //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
            expect(errorMessage).toContain('Warning: No match');    
        }
    })

}




utils -> DataPrivider

import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider{

static getTestDataFromJson(filePath:string)
{
    let data:any =JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
}


static getTestDataFromCsv(filePath:string)
{
     let data:any= parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
    return data;
    }


}


TestData -> testdata/logindata.json

[
    {
        "testName": "Valid login",
        "email": "kelly@.com",
        "password": "",
        "expected": "success"
    },

    {
        "testName": "Invalid Login",
        "email": "kelly@.com",
        "password": "",
        "expected": "Failure"
    }
]


test.config.js

export class TestConfig{

appURL = "https://naveenautomationlabs.com/opencart"

//Valid login credentials
email=" "
password=" "

//Production details
productName= " "
productQuantity=" "
totalPrice=" "

firstName='Kelly'
lastName='Felder'



}

=========================================================================

How to Read Data from a File (JSON example)

{
  "email": "test@example.com",
  "password": "123456"
}

Step 2: Create a data reader class

Create a file DataProvider.js

import fs from 'fs';

export class DataProvider {

  static getTestData(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
  }

}

Step 3: Use the data in your test

import { test, expect } from '@playwright/test';
import { DataProvider } from '../utils/DataProvider.js';

test('login test', async ({ page }) => {

  const data = DataProvider.getTestData('./testData.json');

  await page.goto('https://example.com');

  await page.fill('#email', data.email);
  await page.fill('#password', data.password);

});




