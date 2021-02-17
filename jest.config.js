module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
  ],
  coveragePathIgnorePatterns: [
    ".style.js",
    "config.js",
    "apollo-client.js",
    "apollo-server.js",
    "_app.js",
    "_document.js",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/.next/", "/coverage/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
