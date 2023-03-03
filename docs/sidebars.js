/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const PACKAGES_PATH = path.resolve(__dirname, '..', 'packages');

const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [`${PACKAGES_PATH}/react/src/components/Avatar/avatar`],
};

module.exports = sidebars;
