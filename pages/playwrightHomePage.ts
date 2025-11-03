import { expect, Locator, Page } from '@playwright/test'

export class PlaywrightHomePage {
  readonly page: Page
  readonly docsLink: Locator
  readonly releaseNotesLink: Locator

  constructor (page: Page) {
    this.page = page
    this.docsLink = page.getByRole('link', { name: 'Docs' })
    this.releaseNotesLink = page.getByRole('link', { name: 'Release notes' })
  }

  async navigateToReleaseNotesPage () {
    await this.docsLink.click()

    await this.releaseNotesLink.click();

    console.log('Navigated to the release notes page.')
  }
}