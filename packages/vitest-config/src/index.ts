export const sharedConfig = {
  test: {
    coverage: {
      provider: "v8" as const,
      reporter: ["text", "lcov", "json-summary", "json"],
      reportsDirectory: "./coverage",
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.{ts,tsx}"],
    },
    globals: true,
  },
} as const;

export { baseConfig } from "./configs/base-config.js";
export { uiConfig } from "./configs/ui-config.js";
