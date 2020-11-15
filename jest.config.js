module.exports = {
  preset: "jest-playwright-preset",
  setupFilesAfterEnv: ["expect-playwright"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
};
