import baseConfig from "@snapora/eslint/base";
import reactConfig from "@snapora/eslint/react";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...reactConfig];

export default config;
