import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Spatial Data Analysis for GenAI',
  tagline:
    '🚀 The GeoDa OpenJS project aims to develop modern JavaScript libraries for spatial data analysis that powers AI assistants with advanced geospatial tools and interactive interfaces 🤖',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://geodaopenjs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'GeoDa OpenJS Project',
      logo: {
        alt: 'GeoDa OpenJS Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'right',
        //   label: 'Tutorial',
        // },
        // { to: '/blog', label: 'Blog', position: 'right' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial: Kepler.gl AI Assistant',
              to: 'https://github.com/keplergl/kepler.gl/discussions/2843',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://openjs-foundation.slack.com/archives/C08QX9SBG8G',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/center-for-spatial-data-science/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'OpenAssistant GitHub',
              href: 'https://github.com/geodaopenjs/openassistant',
            },
            {
              label: 'GeoDaLib GitHub',
              href: 'https://github.com/geodaopenjs/geodalib',
            },
            {
              label: 'GeoDa.AI GitHub',
              href: 'https://github.com/geodaai/nextgeoda',
            },
          ],
        },
      ],
      copyright:
        '<div style="display: flex; align-items: center; gap: 10px;"><img style="padding-right: 20px;" height=40 src="https://github.com/openjs-foundation/artwork/raw/main/openjs_foundation/openjs_foundation-logo-horizontal-color.png"><div>Copyright <a href="https://openjsf.org">OpenJS Foundation</a> and <a href="https://github.com/geodaopenjs/openassistant">OpenAssistant</a> and <a href="https://github.com/geodaopenjs/geodalib">GeoDaLib</a> contributors. All rights reserved. The <a href="https://openjsf.org">OpenJS Foundation</a> has registered trademarks and uses trademarks. For a list of trademarks of the <a href="https://openjsf.org">OpenJS Foundation</a>, please see our <a href="https://trademark-policy.openjsf.org/">Trademark Policy</a> and <a href="https://trademark-list.openjsf.org/">Trademark List</a>. Trademarks and logos not indicated on the <a href="https://trademark-list.openjsf.org">list of OpenJS Foundation trademarks</a> are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.<br/><br/><a href="https://openjsf.org/">The OpenJS Foundation</a> | <a href="https://terms-of-use.openjsf.org/">Terms of Use</a> | <a href="https://privacy-policy.openjsf.org/">Privacy Policy</a> | <a href="https://bylaws.openjsf.org/">Bylaws</a> | <a href="https://code-of-conduct.openjsf.org">Code of Conduct</a> | <a href="https://trademark-policy.openjsf.org/">Trademark Policy</a> | <a href="https://trademark-list.openjsf.org/">Trademark List</a> | <a href="https://www.linuxfoundation.org/cookies/">Cookie Policy</a></div></div></div>',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
