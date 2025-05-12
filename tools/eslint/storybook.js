import storybookPlugin from "eslint-plugin-storybook";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    files: ["**/*.stories.ts", "**/*.stories.tsx", "**/*.mdx"],
    extends: [...storybookPlugin.configs["flat/recommended"]],
  },
];
