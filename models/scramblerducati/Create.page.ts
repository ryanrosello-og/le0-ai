import { expect, Page } from '@playwright/test'
import BasePage from '@models/scramblerducati/@BasePage'
import { testEnvironments } from '@lib/test_environments'

export default class CreatePage extends BasePage {
  elements = {
    imageGenerationPrompt: {
      promptTextField: () =>
        this.page.locator('[class*="xl:flex"] [name="prompt"]'),
      heading: () => this.page.locator('[class="xl:hidden"] h1'),
      generateButton: () =>
        this.page.locator('[class*="xl:flex"] button').getByText('Generate'),
    },
    generatedImagesCarousel: {
      generatedImage: () =>
        this.page.locator('[class*="xl:block"] img[alt="generated image"]'),
      generatingImageMessage: () =>
        this.page.getByText(
          'Your Generation is in progress. It may take up to a minute.',
        ),
      nextButton: () => this.page.locator('button').getByText('Next'),
    },
    enterYourDetailsModal: {
      firstNameField: () => this.page.locator('[name="firstName"]'),
      lastNameField: () => this.page.locator('[name="lastName"]'),
      emailField: () => this.page.locator('[name="email"]'),
      countryDropdown: () => this.page.locator('select[name=country]'),
      tAndCCheckbox: () => this.page.locator('#terms-check'),
      privacyPolicyCheckbox: () => this.page.locator('#privacy-policy-check'),
      submitButton: () => this.page.locator('button').getByText('Submit'),
    },
    downloadAndSharePanel: {
      downloadButton: () => this.page.locator('button').getByText('DOWNLOAD'),
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
    await expect(
      this.elements.generatedImagesCarousel.generatingImageMessage(),
      'Image generation did not start',
    ).toBeVisible()
    await expect(
      this.elements.generatedImagesCarousel.generatingImageMessage(),
      'Image generation did not complete',
    ).not.toBeVisible()
  }

  async generateImage({ prompt }: { prompt: string }) {
    await this.elements.imageGenerationPrompt.promptTextField().fill(prompt)
    await this.elements.imageGenerationPrompt.generateButton().click()
  }
}
