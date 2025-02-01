import { expect } from '@playwright/test'
import { Given, When } from './fixtures'

const prompt = 'A motorcycle in the desert'

Given('I am on the Ducati Scrambler website', async ({ landingPage }) => {
  await landingPage.goto()
})

Given('I am on the image creation page', async ({ createPage }) => {
  await createPage.goto()
})

Given(
  'the 4 images have been generated and are visible',
  async ({ createPage }) => {
    await createPage.goto()
    await createPage.generateImage({ prompt })
    await createPage.waitForImageGenerationToComplete()
  },
)

When('I fill in my details and accept the terms', async ({ createPage }) => {
  await createPage.completeYourDetailsModal({
    firstName: 'John',
    lastName: 'Doe',
    email: 'ignore@gmail.com',
    country: 'American Samoa',
  })
})

When('I click “Submit”', async ({ createPage }) => {
  await createPage.elements.enterYourDetailsModal.submitButton().click()
})

When('I click “Start to Create”', async ({ landingPage }) => {
  await landingPage.elements.startToCreateButton().click()
})

When('I fill in the prompt and click “Generate”', async ({ createPage }) => {
  await createPage.generateImage({ prompt })
})

When(
  'I wait for the generation process to complete',
  async ({ createPage }) => {
    await createPage.waitForImageGenerationToComplete()
  },
)
