import { test, expect } from '@playwright/test';

test('test', {tag: ['']}, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Docs' }).click();
  await page.getByRole('link', { name: 'Release notes' }).click();
  await page.getByRole('link', { name: 'Version 1.55', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Version 1.55Direct link to' })).toBeVisible();
  await expect(page.locator('#version-155')).toContainText('Version 1.55');
});