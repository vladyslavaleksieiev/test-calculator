module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!jest.config.js',
    '!.eslintrc.js',
    '!babel.config.js',
    '!**/.expo/**',
    '!**/.expo-shared/**',
    '!**/assets/**',
  ],
  moduleNameMapper: {
    '@root/(.*)': '<rootDir>/$1',
  },
  testMatch: ['**/__tests__/**/*?(*.)+(spec|test).[jt]s?(x)'],
};
