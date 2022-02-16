/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['@swc/jest'],
  },
  globals: {
    'ts-jest': {
       isolatedModules: true,
    }
  }
};