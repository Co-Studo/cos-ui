module.exports = {
  stories: ['../packages/**/src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '../../../../../src': '../../../src',
      '../../../../src': '../../src',
    };
    return config;
  },
  docs: {
    autodocs: true,
  },
};
