import queryPlugin from "@tanstack/eslint-plugin-query";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [...queryPlugin.configs["flat/recommended"]];
