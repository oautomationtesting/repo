// @ts-check
import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('method', async ({ page }) => {
    await page.goto('https://google.com');
})
