const path = require('path');
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'),
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
    },
    env: {
        browser: true,
        jest: true,
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
