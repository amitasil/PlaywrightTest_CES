import { expect, Locator, Page } from '@playwright/test'

export class TemplatePage {
  readonly page: Page
  readonly sampleButtonLocator: Locator
  readonly sampleTextFieldLocator: Locator

  constructor (page: Page) {
    this.page = page
    this.sampleButtonLocator = page.getByRole('link', { name: 'Release notes' })
    this.sampleTextFieldLocator = page.locator('input[aria-label="Status"]')
  }

  async filterBatchJobByDescription () {
    await this.sampleButtonLocator.click()

    await Promise.all([
      this.page.waitForResponse(res => res.status() === 200),

      this.sampleTextFieldLocator.fill('Batch job description text')
    ])

    await expect(this.sampleTextFieldLocator).toHaveValue('Batch job description text')

    console.log('Batch job description text entered in the Filter text box.')
  }
}