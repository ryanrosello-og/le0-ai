// Generated from: features\homepage.feature
import { test } from "../../features/step_definitions/fixtures.ts";

test.describe('Home Page', () => {

  test('Check title', async ({ Given, page, Then }) => { 
    await Given('I am on home page', null, { page }); 
    await Then('I see in title "Playwright"', null, { page }); 
  });

  test('Check get started', async ({ Given, page, When, Then, And }) => { 
    await Given('I am on home page', null, { page }); 
    await When('I click link "Get started"', null, { page }); 
    await Then('I see in title "Installation"', null, { page }); 
    await And('I see in title "sfsdf"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\homepage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then I see in title \"Playwright\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Playwright\"","children":[{"start":16,"value":"Playwright","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on home page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When I click link \"Get started\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Get started\"","children":[{"start":14,"value":"Get started","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then I see in title \"Installation\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Installation\"","children":[{"start":16,"value":"Installation","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"And I see in title \"sfsdf\"","stepMatchArguments":[{"group":{"start":15,"value":"\"sfsdf\"","children":[{"start":16,"value":"sfsdf","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end