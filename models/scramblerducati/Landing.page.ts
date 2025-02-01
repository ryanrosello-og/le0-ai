import { Page } from '@playwright/test'
import BasePage from '@models/scramblerducati/@BasePage'
import { testEnvironments } from '@lib/test_environments'

export default class LandingPage extends BasePage {
  elements = {
    startToCreateButton: () =>
      this.page.locator('[class*="xl:block"] a[href="/create"]'),
  }

  constructor(page: Page) {
    super(page)
  }

  async goto() {
    await this.handleCookieConsentModal()
    await this.page.goto(testEnvironments.get().scramblerDucati)
  }
}
