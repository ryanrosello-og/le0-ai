## References

https://github.com/vitalets/playwright-bdd/tree/main/examples/basic-esm
https://vitalets.github.io/playwright-bdd/#/getting-started/write-first-test

# 101%

[] folder structure include /scramblerducati
[] leo.page
[] leo.config
[] leo has interface well documented
[] custom assertion
[] environment agnostic
[] handle random cookie consent popup
[] browser agnostic
[] makes sense when it falls over (error messages)
[] gh action enabled
[] global.d.types.ts
[] tsconfig use alias for imports

set local storage
leonardo_ai_user_has_registered == true

---

set cookie consent
OptanonAlertBoxClosed : 2025-02-01T04:49:39.657Z | new Date().toISOString()

# assumptions

# bad

- It is not test environment agnostic. Currently it is only setup for https://hacktheicon.scramblerducati.com/ domain
- organisation of the step definition could be better
- for some reason the playwright-bdd breaks when I try and add @fixtures to the tsconfig paths
- couple of locators tied to css class which can potentially fall over when the tests are executed against smaller form factors
- remork the GWT slightly:
  Scenario: User Navigates to Scrambler Customization Page
  Given the user is on the Ducati Scrambler website
  When the user initiates the customization process
  Then the custom Scrambler configuration page should be displayed

---

Tests

Listen for cookie consent

---

Given I am on the Ducati Scrambler website
Navigate to https://hacktheicon.scramblerducati.com/

When I click “Start to Create
Click Start to Create
a > text=Start to create

Then I should see the “Create Your Custom Scrambler Ducati” page
**_ Custom assertion _**
assert:
await expect h1 > text=CREATE YOUR CUSTOM SCRAMBLER DUCATI
url should become /create
title should be come

  <title>Create your custom Scrambler Ducati with AI</title>

```
Given I am on the image creation page
  Navigate to https://hacktheicon.scramblerducati.com/create

When I fill in the prompt and click “Generate”
  textarea name="prompt"
  button > Generate

And I wait for the generation process to complete
  TODO: add custom error message
  wait for this to disappear:
  Your Generation is in progress. It may take up to a minute.
  h1 > text=PICK YOUR FAVOURITE GENERATIONS  to be visible

Then I should see the 4 generated images
      [class="xl:hidden"] img[alt="generated image"] should have count of 4
  forEach image:
    *** Custom assertion ***
    toHaveValidImage:
      extract img src
      do get request on src and check status code === 200
```

Given the 4 images have been generated and are visible
as per above

When I fill in my details and accept the terms
use page object to input details

And I click “Submit”
createPage.submitButton.click()

Then I should be able to choose one of the 4 images
createPage.generatedImages.first().click()
click next button
click download button and wait for download

And the resolution of the saved file should be 2056 x 136
validated download image has resolution 2056 x 136

```

Page Object Model
  landing.page.ts
    startToCreateButton: a > text=Start to create

  create.page.ts
    generatedImagesCarousel
      generatedImage: [class="xl:hidden"] img[alt="generated image"]
      nextButton: button > text=Next

    enterYourDetailsModal
      firstNameField: [name="firstName"]
      lastNameField: [name="lastName"]
      emailField: [name="email"]
      countryDropdownTrigger: [aria-label="Select Country"]
      countryDropdown: select[name=country]
      value="American Samoa" >> <option value="American Samoa">American Samoa</option>
      countryDropdownOption: [aria-label="Select Country"]
      tAndCCheckbox: this.page.locator('#terms-check')
      privacyPolicyCheckbox: this.page.locator('#privacy-policy-check')
      submitButton: button > text=Submit

    downloadAnSharePanel
      downloadButton: button > text=DOWNLOAD


  cookieConsent.modal.ts
    modal: [aria-describedby="onetrust-policy-text"]
    acceptAllButton: [aria-describedby="onetrust-policy-text"] button > text=Accept All Cookies
```
