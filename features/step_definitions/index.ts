import { expect } from '@playwright/test'
import { Given, When, Then } from './fixtures'

Given('I am on home page', async ({ page, createPage }) => {
  await createPage.elements.enterYourDetailsModal.lastNameField().fill('test')
  await page.goto('https://playwright.dev')
})

When('I click link {string}', async ({ page }, name: string) => {
  await page.getByRole('link', { name }).click()
})

Then('I see in title {string}', async ({ page }, text: string) => {
  const b = 1
  console.log('🚀 ----------------🚀')
  console.log('🚀 ~ Then ~ b:', b)
  console.log('🚀 ----------------🚀')

  await expect(page).toHaveTitle(new RegExp(text + 'bnabnsabs'))
})
