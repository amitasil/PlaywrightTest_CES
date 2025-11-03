import { test, expect } from '@playwright/test'
import { TemplatePage } from './page_template'
import { PlaywrightHomePage } from '../pages/playwrightHomePage';

test.describe('Sample test description', () => {
  test('test', { tag: ['@playwrightVersionCheck'] }, async ({ page }) => {
    const templatePage = new TemplatePage(page)
    const playwrightHomePage = new PlaywrightHomePage(page)

    await test.step('Navigate to playwright release notes page', async () => {
      await page.goto('https://playwright.dev/');

      playwrightHomePage.navigateToReleaseNotesPage()

      await page.getByRole('link', { name: 'Version 1.55', exact: true }).click()

      await expect(page.getByRole('heading', { name: 'Version 1.55Direct link to' })).toBeVisible()

      await expect(page.locator('#version-155')).toContainText('Version 1.55')
    })
  })
})
