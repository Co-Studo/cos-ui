/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const glob = require('globby');

const BASE_PATH = path.resolve(__dirname, 'docs');

const paths = glob
  .sync('**/*.md', {
    cwd: BASE_PATH,
  })
  .sort();

const items = paths.map((_path) => _path.replace('.md', ''));

const sidebars = {
  tutorialSidebar: items,
};

module.exports = sidebars;
