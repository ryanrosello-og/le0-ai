import { testEnvironments } from '@lib/test_environments'
import { Page } from '@playwright/test'

export default abstract class BasePage {
  baseElements = {
    cookieConsentModal: {
      modal: () =>
        this.page.locator('[aria-describedby="onetrust-policy-text"]'),
      acceptAllButton: () =>
        this.baseElements.cookieConsentModal
          .modal()
          .locator('button')
          .getByText('Accept All'),
    },
  }

  constructor(protected page: Page) {}
  currentUrl() {
    return this.page.url()
  }

  async handleCookieConsentModal() {
    const testEnvUrl = testEnvironments.get().scramblerDucati
    const parsedUrl = new URL(testEnvUrl)
    const hostnameParts = parsedUrl.hostname.split('.')
    const url = hostnameParts.slice(-2).join('.')
    await this.page.context().addCookies([
      {
        name: 'OptanonAlertBoxClosed',
        value: new Date().toISOString(),
        url: testEnvUrl,
      },
    ])
    // await this.page.addLocatorHandler(
    //   this.baseElements.cookieConsentModal.modal(),
    //   async () => {
    //     await this.baseElements.cookieConsentModal.acceptAllButton().click()
    //   },
    // )
  }
}
