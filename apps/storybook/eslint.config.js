import baseConfig from "@snapora/eslint/base";
import reactConfig from "@snapora/eslint/react";
import storybookConfig from "@snapora/eslint/storybook";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...reactConfig, ...storybookConfig];

export default config;
