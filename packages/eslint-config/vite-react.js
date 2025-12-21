import pluginRouter from "@tanstack/eslint-plugin-router";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import { config as reactInternalConfig } from "./react-internal.js";

/**
 * ESLint configuration for Vite React applications.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const viteReactConfig = [
  ...reactInternalConfig,
  ...pluginRouter.configs["flat/recommended"],
  pluginReactRefresh.configs.vite,
];
