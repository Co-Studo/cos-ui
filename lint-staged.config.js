module.exports = {
  '*.{js,jsx,ts,tsx}': 'eslint --fix',
  '*.{js,jsx,ts,tsx,json}': 'prettier --write',
  'packages/react/**/*.+(ts|tsx)': () =>
    'tsc -p packages/react/tsconfig.json --noEmit',
  'packages/playground-react/**/*.+(ts|tsx)': () =>
    'tsc -p packages/playground-react/tsconfig.json --noEmit',
  'packages/primitives/**/*.+(ts|tsx)': () =>
    'tsc -p packages/primitives/tsconfig.json --noEmit',
};
