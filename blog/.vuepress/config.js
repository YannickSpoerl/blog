module.exports = {
  title: 'Blog - Yannick Spoerl',
  description: 'My personal blog',
  theme: '@yannickspoerl/yannickspoerl',
  plugins: [
    '@vuepress/plugin-back-to-top',
    'vuepress-plugin-seo',
    ['vuepress-plugin-sitemap', { hostname: 'https://blog.yannickspoer.de' }]
  ],
  themeConfig: {
    directories: [
      {
        id: "de",
        dirname: "_de",
        path: "/",
        title: null,
        itemPermalink: "/:year/:month/:day/:slug"
      },
      {
        id: "en",
        dirname: "_en",
        title: null,
        path: "/en/",
        itemPermalink: "/en/:year/:month/:day/:slug"
      }
    ],
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    nav: [
      {
        text: 'Deutsch 🇩🇪',
        link: '/',
      },
      {
        text: 'English 🇬🇧',
        link: '/en/',
      },
    ],
    dateFormat: 'dd, DD.MM.YY',
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/YannickSpoerl',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/yannickspoerl',
        },
        {
          type: 'instagram',
          link: 'https://www.instagram.com/yannickspoerl'
        },
        {
          type: 'mail',
          link: 'mailto:yannick@yannickspoerl.de'
        },
        {
          type: 'web',
          link: 'https://www.yannickspoerl.de'
        }
      ],
      copyright: [
        {
          text: '2019 - 2020 Yannick Spoerl',
          link: '/'
        },
        {
          text: 'Datenschutzhinweis',
          link: '/privacy',
        },
        {
          text: 'MIT Licensed',
          link: '/license',
        },
      ]
    },
  },
}
