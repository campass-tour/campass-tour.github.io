import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Campass',
  tagline: 'CPT208',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://campass.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'campass', // Usually your GitHub org/user name.
  projectName: 'campass', // Usually your repo name.

  onBrokenLinks: 'warn',

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
            'https://github.com/campass-tour/campass-tour.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/campass-tour/campass-tour.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Process Portfolio',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/campass-tour/campass-tour.github.io',
        //   label: 'GitHub',
        //   position: 'right',
        // },
                  {
            type: 'dropdown',
            label: 'Motivation & Research',
            position: 'left',
            items: [
              {
                label: 'The Why',
                to: '/docs/motivation-research/the-why',
              },
              {
                label: 'The Gap',
                to: '/docs/motivation-research/the-gap',
              },
              {
                label: 'The Stakeholders',
                to: '/docs/motivation-research/the-stakeholders',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'User Requirements',
            position: 'left',
            items: [
              {
                label: 'User Journey Map',
                to: '/docs/user-requirements/user-journey-map',
              },
              {
                label: 'Requirements List',
                to: '/docs/user-requirements/requirements-list',
              },
              {
                label: 'Evidence of Life',
                to: '/docs/user-requirements/evidence-of-life',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Ideation & Alternatives',
            position: 'left',
            items: [
              {
                label: 'The "Crazy Eights"',
                to: '/docs/ideation-alternatives/crazy-eights',
              },
              {
                label: 'Design Alternatives',
                to: '/docs/ideation-alternatives/design-alternatives',
              },
              {
                label: 'Low-Fi Prototype',
                to: '/docs/ideation-alternatives/low-fi-prototype',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Technical Implementation',
            position: 'left',
            items: [
              {
                label: 'System Architecture',
                to: '/docs/technical-implementation/system-architecture',
              },
              {
                label: 'High-Fi Prototype',
                to: '/docs/technical-implementation/high-fi-prototype',
              },
              {
                label: 'Individual Contributions',
                to: '/docs/technical-implementation/individual-contributions',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Evaluation & Reflection',
            position: 'left',
            items: [
              {
                label: 'Usability Testing',
                to: '/docs/evaluation-reflection/usability-testing',
              },
              {
                label: 'Iterative Refinement',
                to: '/docs/evaluation-reflection/iterative-refinement',
              },
              {
                label: 'Final Reflection',
                to: '/docs/evaluation-reflection/final-reflection',
              },
            ],
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/campass-tour/campass-tour.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
