**DemoUI Playwright Automation Framework**

This repository contains a UI automation testing framework built using Playwright. The project demonstrates modern end-to-end testing practices, scalable test structure, and Continuous Integration using GitHub Actions.

The framework is designed to showcase automation best practices suitable for real-world web applications.

**Tech Stack**

Playwright

JavaScript (Node.js)

Playwright Test Runner

GitHub Actions (CI/CD)

HTML Reporting

**Project Structure**

DemoUI_Playwright/
│
├── tests/                     # Test specifications
├── .github/workflows/         # GitHub Actions CI configuration
├── playwright.config.js       # Playwright configuration
├── package.json               # Dependencies and scripts
└── README.md

**Features**

Cross-browser testing (Chromium, Firefox, WebKit)

Parallel test execution

Headless and headed execution

Automatic screenshots and traces on failure

HTML test reporting

CI execution with GitHub Actions

Scalable and maintainable test structure

**Prerequisites**

Ensure the following are installed:

Node.js (v16 or higher)

npm

Git

**Installation**

Clone the repository:

git clone https://github.com/dinushas/DemoUI_Playwright.git
cd DemoUI_Playwright

**Install dependencies:**

npm install

**Install Playwright browsers:**

npx playwright install


**Running Tests**

npx playwright test


**Run tests in headed mode:**

npx playwright test --headed

**Run a specific test file:**

npx playwright test tests/example.spec.js


**Test Reports**

After test execution, open the Playwright HTML report:

npx playwright show-report


**Continuous Integration (GitHub Actions)**

This project uses GitHub Actions to automatically execute tests on:

Every push to the main branch

Every pull request

The CI workflow performs the following steps:

Checks out the repository

Installs Node.js dependencies

Installs Playwright browsers

Runs all automated tests

Uploads the Playwright HTML report as an artifact

You can view test execution results in the Actions tab of the repository.

**Purpose of This Project**

This project is created to:

Demonstrate Playwright UI automation framework design

Showcase CI/CD integration for automation testing

Serve as a portfolio project for QA automation roles

Practice modern automation engineering techniques




