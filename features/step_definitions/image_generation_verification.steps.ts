import { expect } from '@playwright/test'
import { Then } from './fixtures'
import { getImageResolution } from '@lib/image_helper'
import path from 'path'

Then(
  'I should be able to choose one of the 4 images',
  async ({ createPage }) => {
    await createPage.elements.generatedImagesCarousel
      .generatedImage()
      .nth(2)
      .click()
  },
)

Then(
  'the resolution of the saved file should be 2056 x 136',
  async ({ createPage, page }) => {
    // TODO: need testInfo object to get the path to save the file
    const downloadPromise = page.waitForEvent('download')
    await createPage.elements.downloadAndSharePanel.downloadButton().click()
    const download = await downloadPromise
    const downloadPath = path.join(__dirname, download.suggestedFilename())
    await download.saveAs(downloadPath)
    const { height, width } = await getImageResolution(downloadPath)
    expect(
      height,
      'The downloaded image did not have the correct height',
    ).toEqual(136)
    expect(
      width,
      'The downloaded image did not have the correct width',
    ).toEqual(2056)
  },
)

Then('I should see the {string} page', async ({ createPage }, text: string) => {
  await expect(
    createPage.elements.imageGenerationPrompt.heading(),
    `The [${text}] panel was not shown`,
  ).toHaveText(text)

  expect(createPage.currentUrl(), 'Incorrect route encountered').toContain(
    '/create',
  )
})

Then('I should see the 4 generated images', async ({ createPage, request }) => {
  await expect(
    createPage.elements.generatedImagesCarousel.generatedImage(),
    'The generated images were not shown',
  ).toHaveCount(4)
  for (const image of await createPage.elements.generatedImagesCarousel
    .generatedImage()
    .all()) {
    const src = await image.getAttribute('src')
    if (src) {
      const response = await request.get(src)
      expect(
        response.status(),
        `The following image failed to render in the carousel\n [${src}]`,
      ).toBe(200)
    } else {
      throw new Error('The img tag did not have a valid src attribute')
    }
  }
})
