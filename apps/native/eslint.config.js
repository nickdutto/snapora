import baseConfig from "@snapora/eslint/base";
import reactConfig from "@snapora/eslint/react";
import tanstackQueryConfig from "@snapora/eslint/tanstack-query";
import tanstackRouterConfig from "@snapora/eslint/tanstack-router";

/** @type {import('typescript-eslint').Config} */
const config = [...baseConfig, ...reactConfig, ...tanstackQueryConfig, ...tanstackRouterConfig];

export default config;
