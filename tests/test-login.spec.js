import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Branch change' }).click();

});