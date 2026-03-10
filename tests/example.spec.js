// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Branch change' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();

  await page.goto("myurl");

  await page.getByRole('link', { name: 'Branch change' }).click();
  await page.getByRole('link', { name: 'Get started' }).click();

});
