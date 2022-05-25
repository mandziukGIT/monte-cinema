module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
    moduleFileExtensions: [
      "js",
      "ts",
      "json",
      "vue"
    ],
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
      ".*\\.(vue)$": "vue-jest",
      "^.+\\.tsx?$": "ts-jest",
    },
  setupFiles: ['<rootDir>/jest.setup.js'],
}
