// @ts-check
import { test, expect } from '@playwright/test';
import { Assert } from 'node:assert';

test('login', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    const myEement = page.getByLabel('dsada');
    expect(myEement).toBe(true);
});

test('truem', async ({ page }) => {
    await page.goto('https://google.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Google/);

});
test('method', async ({ page }) => {
    await page.goto('https://master.com');
})

test('master method', async ({ page }) => {
    console.log('master method');
})
test('mbr', async ({ page }) => {
    console.log("mbd");
})