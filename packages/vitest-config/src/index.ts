export const sharedConfig = {
  test: {
    coverage: {
      provider: "istanbul" as const,
      reporter: ["json"],
      reportsDirectory: "./coverage",
    },
    globals: true,
  },
} as const;

export { baseConfig } from "./configs/base-config.js";
export { uiConfig } from "./configs/ui-config.js";
