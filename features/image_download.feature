Feature: Download image

  Scenario: Able to download the generated image
    Given the 4 images have been generated and are visible
    When I fill in my details and accept the terms
    And I click “Submit”
    Then I should be able to choose one of the 4 images
    And the resolution of the saved file should be 2056 x 136