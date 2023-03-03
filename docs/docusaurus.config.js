/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-var-requires */
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');
const path = require('path');

// eslint-disable-next-line @typescript-eslint/no-shadow
function getFilename(path) {
  const names = path.split('/');
  const filename = names[names.length - 1];

  if (filename == null) {
    throw new Error(`path가 올바르지 않습니다. ${path}`);
  }

  return filename;
}

const GITHUB_EDIT_PAGE_PREFIX = 'https://github.com/Co-Studo/cos-ui/edit/dev';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'cos-ui',
  tagline: 'React UI components',
  favicon: 'img/favicon.ico',

  url: 'https://co-studo.github.io',
  baseUrl: '/cos-ui/',
  organizationName: 'Co-Studo',
  projectName: 'cos-ui',
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => {
            const dirname = path.dirname(docPath);
            const markdownFilename = getFilename(docPath);
            const editUrl = `${GITHUB_EDIT_PAGE_PREFIX}/packages/${dirname}/${markdownFilename}`;
            return editUrl;
          },
        },
        pages: {
          path: 'pages',
          routeBasePath: '/',
          include: ['**/*.md', '**/*.mdx'],
        },
        theme: {
          customCss: require.resolve('./styles.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'cos-ui',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'primitives/README',
            position: 'left',
            label: 'document',
          },
          {
            href: 'https://github.com/Co-Studo/cos-ui',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'primitives',
                to: '/docs/primitives',
              },
              {
                label: 'react',
                to: '/docs/react',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Co-Studo/cos-ui',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} co-studo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
