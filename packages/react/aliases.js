const path = require('path');
const tsconfigPath = require('./tsconfig.path.json');

const aliases = Object.entries(tsconfigPath.compilerOptions.paths).map(
  ([key, value]) => {
    // "@components/*" -> "@components"
    const k = key.slice(0, key.length - 2);
    // "src/components/*" -> "src/components"
    const v = value[0].slice(0, value[0].length - 2);
    return [k, v];
  },
);

const webpackAliases = Object.fromEntries(
  aliases.map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

const jestAliases = Object.fromEntries(
  aliases.map(([key, value]) => [`^${key}(.*)$`, `<rootDir>/${value}$1`]),
);

module.exports = {
  webpack: webpackAliases,
  jest: jestAliases,
};
