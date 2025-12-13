import pluginReactRefresh from "eslint-plugin-react-refresh";
import { config as reactInternalConfig } from "./react-internal.js";

/**
 * ESLint configuration for Vite React applications.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const viteReactConfig = [
  ...reactInternalConfig,
  pluginReactRefresh.configs.vite,
];
