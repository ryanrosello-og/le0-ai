# Install

```bash
git clone https://github.com/ryanrosello-og/le0-ai.git
pnpm install
```

# Execute

```bash
pnpm test
```

# Assumption

Within the GWT feature files, some When steps include quoted text, such as When I click "Start to Create".  I'm unsure if these quotes are intentional or if the quoted text should be treated as a parameter. I've currently interpreted them as decorative, not as parameters.

# Further improvements

- Organization of the step definitions could be better
- For some reason the `playwright-bdd` library breaks when I try and add `@fixtures` to the `tsconfig` paths
- I should be able speed up the `image_download.feature` spec by bypassing the need to complete the form e.g. in the localStorage set the key `leonardo_ai_user_has_registered` to `true`
- The GWTs could be further enhanced
