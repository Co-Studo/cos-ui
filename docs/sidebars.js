/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const glob = require('globby');

const BASE_PATH = path.resolve(__dirname, 'docs');

const paths = glob
  .sync('**/*.md', {
    cwd: BASE_PATH,
  })
  .sort()
  .map((_path) => _path.replace('.md', ''));

const reactItems = paths.filter((_path) => !_path.includes('react'));
const privitivesitems = paths.filter((_path) => !_path.includes('primitives'));

const sidebars = {
  reactSidebar: reactItems,
  primitivesSidebar: privitivesitems,
};

module.exports = sidebars;
