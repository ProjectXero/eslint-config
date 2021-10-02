module.exports = {
  env: {
    es6: true,
    commonjs: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {},
  overrides: [
    /* JavaScript and TypeScript files, including JSX */
    {
      files: '**/*.{j,t}s{,x}',
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
      ],
      plugins: ['@typescript-eslint', 'import'],
    },
    /* ONLY TypeScript files (including JSX) */
    {
      files: '**/*.ts{,x}',
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'no-unused-vars': 'off',
        'import/no-named-as-default': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { args: 'none', argsIgnorePattern: '^_' },
        ],
      },
    },
    /* GraphQL files */
    {
      files: '**/*.g{,raph}ql',
      plugins: ['graphql'],
      rules: {
        'graphql/capitalized-type-name': ['warn', { env: 'literal' }],
        'graphql/named-operations': ['error', { env: 'literal' }],
        'graphql/no-deprecated-fields': ['error', { env: 'literal' }],
        'graphql/required-fields': [
          'error',
          { requiredFields: ['id'], env: 'literal' },
        ],
        'graphql/template-strings': ['error', { env: 'literal' }],
      },
    },
    /* JavaScript/TypeScript JSX files ONLY */
    {
      files: '**/*.{j,t}sx',
      parserOptions: {
        env: {
          browser: true,
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect',
        },
      },
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      plugins: ['react', 'react-hooks', 'jsx-a11y'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },
    {
      files: '**/*.json{,c,5}',
      extends: ['plugin:jsonc/auto-config'],
      rules: {
        'jsonc/indent': 'off',
      },
    },
  ],
}
