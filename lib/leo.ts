import { Page } from '@playwright/test'
import { Constants } from '@lib/constants'

export async function leo(page: Page) {
  return {
    constants: Constants,
  }
}
