import { expect, Page } from '@playwright/test'
import BasePage from '@models/scramblerducati/@BasePage'
import { testEnvironments } from '@lib/test_environments'

export default class CreatePage extends BasePage {
  elements = {
    imageGenerationPrompt: {
      promptTextField: () => this.page.locator('[name="prompt"]:visible'),
      heading: () => this.page.locator('h1:visible'),
      generateButton: () =>
        this.page.locator('button:visible').getByText('Generate'),
    },
    generatedImagesCarousel: {
      generatedImage: () =>
        this.page.locator('img[alt="generated image"]:visible'),
      generatingImageMessage: () =>
        this.page
          .locator('h2:visible')
          .getByText(
            'Your Generation is in progress. It may take up to a minute.',
          ),
      nextButton: () => this.page.locator('button:visible').getByText('Next'),
    },
    enterYourDetailsModal: {
      firstNameField: () => this.page.locator('[name="firstName"]:visible'),
      lastNameField: () => this.page.locator('[name="lastName"]:visible'),
      emailField: () => this.page.locator('[name="email"]:visible'),
      countryDropdown: () => this.page.locator('select[name=country]:visible'),
      tAndCCheckbox: () => this.page.locator('#terms-check:visible'),
      privacyPolicyCheckbox: () =>
        this.page.locator('#privacy-policy-check:visible'),
      submitButton: () =>
        this.page.locator('button:visible').getByText('Submit'),
    },
    downloadAndSharePanel: {
      downloadButton: () =>
        this.page.locator('button:visible').getByText('DOWNLOAD'),
    },
  }

  constructor(page: Page) {
    super(page)
  }

  async goto() {
    await this.handleCookieConsentModal()
    await this.page.goto(`${testEnvironments.get().scramblerDucati}/create`)
  }

  async completeYourDetailsModal({
    firstName,
    lastName,
    email,
    country,
  }: {
    firstName: string
    lastName: string
    email: string
    country: string
  }) {
    await this.elements.enterYourDetailsModal.firstNameField().fill(firstName)
    await this.elements.enterYourDetailsModal.lastNameField().fill(lastName)
    await this.elements.enterYourDetailsModal.emailField().fill(email)
    await this.elements.enterYourDetailsModal.countryDropdown().selectOption({
      label: country,
    })
    await this.elements.enterYourDetailsModal.privacyPolicyCheckbox().check()
    await this.elements.enterYourDetailsModal.tAndCCheckbox().check()
  }

  async waitForImageGenerationToComplete() {
    const timeout = 60_000
    await expect(
      this.elements.generatedImagesCarousel.generatingImageMessage(),
      'Image generation did not start',
    ).toBeVisible({ timeout })
    await expect(
      this.elements.generatedImagesCarousel.generatingImageMessage(),
      'Image generation did not complete',
    ).not.toBeVisible({ timeout })
  }

  async generateImage({ prompt }: { prompt: string }) {
    await this.elements.imageGenerationPrompt.promptTextField().fill(prompt)
    await this.elements.imageGenerationPrompt.generateButton().click()
  }
}
