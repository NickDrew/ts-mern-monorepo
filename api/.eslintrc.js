module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'no-console': 0,
        'member-access': 0,
        'object-literal-sort-keys': 0,
        'ordered-imports': 0,
        'interface-name': 0,
        'no-submodule-imports': 0,
    },
};
