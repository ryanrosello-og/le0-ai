Feature: Image Generation

  Scenario: User can generate images using a prompt
    Given I am on the image creation page
    When I fill in the prompt and click “Generate”
    And I wait for the generation process to complete
    Then I should see the 4 generated images