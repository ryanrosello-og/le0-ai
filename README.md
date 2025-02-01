# Install

```bash
pnpm install
```

# Execute

```bash
pnpm test
```

# Assumption

In the GWT there a few `When` statements that have quotes around the text e.g. `When I click “Start to Create”`. I wasn't sure if this was intentional or whether the text should be treated as a parameter into the step. I treated is a decoration and not a parameter.

# Further improvements

- Organization of the step definition could be better
- For some reason the `playwright-bdd` library breaks when I try and add `@fixtures` to the `tsconfig` paths
- I should be able speed up the `image_download.feature` spec by bypassing the need to complete the form e.g. in the localStorage set the key `leonardo_ai_user_has_registered` to `true`
- The GWT could be further enhanced
