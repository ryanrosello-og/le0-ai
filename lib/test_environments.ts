type TestEnvironment = 'production' | 'staging'

export const testEnvironments = {
  urls: {
    production: {
      scramblerDucati: 'https://hacktheicon.scramblerducati.com',
    },
    staging: {
      scramblerDucati: 'https://staging.hacktheicon.scramblerducati.com',
    },
  },
  get() {
    if (!process.env.TEST_ENV) {
      throw new Error('TEST_ENV is not set')
    }
    return this.urls[process.env.TEST_ENV?.toLowerCase() as TestEnvironment]
  },
}
