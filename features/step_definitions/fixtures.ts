import { Constants, ConstantsType } from '@lib/constants'
import { testEnvironments } from '@lib/test_environments'
import CreatePage from '@models/scramblerducati/Create.page'
import LandingPage from '@models/scramblerducati/Landing.page'
import { test as base, createBdd } from 'playwright-bdd'

type Fixtures = {
  landingPage: LandingPage
  createPage: CreatePage
  config: {
    constants: ConstantsType
    testEnvironments: typeof testEnvironments
  }
}

export const test = base.extend<Fixtures>({
  createPage: async ({ page }, use) => {
    await use(new CreatePage(page))
  },
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page))
  },
  config: async ({}: any, use) => {
    await use({ constants: Constants, testEnvironments })
  },
})

export const { Given, When, Then } = createBdd(test)
