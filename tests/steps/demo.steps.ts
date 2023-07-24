import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, expect, chromium } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async function () {
  try {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    page = await context.newPage();

    await page.setViewportSize({ width: 1366, height: 768 });
  } catch (error) {
    const errMsg = `Browser navigation to site failed due to ${error}`;
    console.error(errMsg);
    throw new Error(errMsg);
  }
});

After(async () => {
  await browser.close();
});

Given('I go to Google home page', async function () {
  // browser = await chromium.launch({headless: false});
  // const context = await browser.newContext();
  // page = await context.newPage();
  await page.goto('https://google.com.my');
});

When('I type in search bar', async function () {
  await page.locator('textarea[title="Search"]').type('abcd')
});

Then('I should see the text', async function () {
  await expect(page.locator('textarea[title="Search"]')).toHaveValue('abcd');
  // await browser.close();
});