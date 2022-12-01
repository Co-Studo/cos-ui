module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  'packages/react/**/*.+(ts|tsx)': () =>
    'tsc -p packages/react/tsconfig.json --noEmit',
  'packages/playground-react/**/*.+(ts|tsx)': () =>
    'tsc -p packages/playground-react/tsconfig.json --noEmit',
  'packages/primitives/**/*.+(ts|tsx)': () =>
    'tsc -p packages/primitives/tsconfig.json --noEmit',
};
