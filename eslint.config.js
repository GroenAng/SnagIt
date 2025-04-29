module.exports = {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
    rules: {
        "no-unused-vars": "warn",
        "no-console": "off",
    },
};