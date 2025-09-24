/** @type {import("prettier").Config} */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 80,

  // Ignore files directly in config instead of .prettierignore
  ignore: ["node_modules", "android", "ios", "build", "dist"],
};

export default config;
