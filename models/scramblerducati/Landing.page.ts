import { Page } from '@playwright/test'
import BasePage from '@models/scramblerducati/@BasePage'
import { testEnvironments } from '@lib/test_environments'

export default class LandingPage extends BasePage {
  elements = {
    startToCreateButton: () =>
      this.page.locator('a').getByText('Start to create'),
    cookieConsentModal: {
      modal: () =>
        this.page.locator('[aria-describedby="onetrust-policy-text"]'),
      acceptAllButton: () =>
        this.elements.cookieConsentModal
          .modal()
          .locator('button')
          .getByText('Accept All'),
    },
  }

  constructor(page: Page) {
    super(page)
  }

  async goto() {
    // handle the cookie consent modal
    await this.page.addLocatorHandler(
      this.elements.cookieConsentModal.modal(),
      async () => {
        await this.elements.cookieConsentModal.acceptAllButton().click()
      },
    )
    await this.page.goto(testEnvironments.get().scramblerDucati)
  }
}
