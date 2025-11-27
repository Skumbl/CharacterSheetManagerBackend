import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            // Allow unused vars if they start with underscores
            '@typescript-eslint/no-unused-vars': ['warn', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_'
            }],

            // Allow explicit 'any'
            '@typescript-eslint/no-explicit-any': 'warn',
        }
    }
];
