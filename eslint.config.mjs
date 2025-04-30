// eslint.config.mjs
import {defineConfig, globalIgnores} from "eslint/config";
import js from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default defineConfig([
	globalIgnores([
		"**/next.config.js",
		"**/lottie/*.json",
		"**/*.svg",
		"**/build/*",
		"**/commitlint.config.js",
		"**/ecosystem-staging.config.js",
		"**/ecosystem-production.config.js",
		"**/ecosystem.config.js",
		"**/.next/*",
	]),

	{
		files: ["**/*.{js,ts,jsx,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: process.cwd(),
				sourceType: "module",
				ecmaVersion: "latest",
				ecmaFeatures: {
					jsx: true,
					templateStrings: true,
				},
			},
			globals: {
				...globals.browser,
			},
		},
		plugins: {
			"@typescript-eslint": typescriptPlugin,
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			import: importPlugin,
			prettier: prettierPlugin
		},
		settings: {
			"import/resolver": {
				typescript: {},
			},
			react: {
				version: "detect",
			},
		},
		rules: {
			"prettier/prettier": [
				"error",
				{
					singleQuote: false,
					bracketSameLine: false,
					endOfLine: "auto",
				},
			],

			// React
			"react/jsx-filename-extension": [
				"warn",
				{extensions: [".js", ".jsx", ".tsx"]},
			],
			"react/jsx-indent": [
				"error",
				"tab",
				{checkAttributes: false, indentLogicalExpressions: true},
			],
			"react/jsx-indent-props": ["error", "tab"],
			"react/jsx-one-expression-per-line": "off",
			"react/jsx-closing-bracket-location": ["warn", "line-aligned"],
			"react/prefer-stateless-function": ["off", {ignorePureComponents: true}],
			"react/function-component-definition": "off",
			"react/require-default-props": "off",
			"react/prop-types": [
				"error",
				{ignore: ["navigation", "state", "descriptors"]},
			],
			"react/no-unknown-property": ["error", {ignore: ["css"]}],

			// TypeScript
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/explicit-function-return-type": "off",
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: false,
				},
			],
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/naming-convention": [
				"error",
				{selector: "variableLike", format: ["camelCase"]},
				{
					selector: "variable",
					types: ["boolean"],
					format: ["PascalCase"],
					prefix: ["is", "should", "has", "can", "did", "will"],
				},
				{
					selector: "variable",
					modifiers: ["const"],
					format: ["UPPER_CASE", "PascalCase", "camelCase"],
				},
				{selector: "function", format: ["PascalCase", "camelCase"]},
				{
					selector: "interface",
					format: ["camelCase"],
					custom: {regex: "^i[A-Z]", match: true},
				},
			],

			// General JS/TS
			"no-use-before-define": "off",
			"no-shadow": "off",
			"no-undef": "off",
			"no-console": "off",
			"no-tabs": "off",
			"no-unused-vars": "off",
			"no-param-reassign": [
				"error",
				{
					props: true,
					ignorePropertyModificationsFor: ["state"],
				},
			],

			quotes: ["error", "double", {allowTemplateLiterals: true}],
			semi: ["error", "always"],
			indent: ["error", "tab", {SwitchCase: 1}],
			"arrow-parens": ["error", "always"],
			"arrow-body-style": ["error", "always"],
			"comma-dangle": "off",
			"spaced-comment": "off",
			"class-methods-use-this": "off",

			// Import
			"import/extensions": [
				"error",
				"never",
				{
					js: "never",
					jsx: "never",
					ts: "never",
					tsx: "never",
					json: "always",
				},
			],
			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
						"type",
					],
					pathGroups: [
						{pattern: "react", group: "builtin", position: "before"},
						{pattern: "react-native", group: "builtin", position: "before"},
						{pattern: "react-native/**", group: "builtin"},
						{pattern: "@store/**", group: "internal", position: "before"},
						{pattern: "@services/**", group: "internal", position: "before"},
						{pattern: "@components/**", group: "internal", position: "before"},
						{pattern: "@screens/**", group: "internal", position: "before"},
						{pattern: "@config/**", group: "internal", position: "before"},
						{pattern: "@customTypes/**", group: "internal", position: "before"},
						{pattern: "@utils/**", group: "internal", position: "before"},
						{pattern: "@assets/**", group: "internal", position: "before"},
						{pattern: "@styles/**", group: "internal", position: "before"},
					],
					pathGroupsExcludedImportTypes: ["builtin"],
					"newlines-between": "always",
				},
			],
			"import/prefer-default-export": "off",
		},
	},

	// Specific override for TS files
	{
		files: ["**/*.ts", "**/*.tsx"],
		rules: {
			"@typescript-eslint/no-shadow": "off",
			"no-shadow": "off",
			"no-undef": "off",
		},
	},
]);
