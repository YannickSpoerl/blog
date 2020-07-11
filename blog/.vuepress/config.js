module.exports = {
  title: 'Blog - Yannick Spoerl',
  description: 'My personal blog',
  theme: '@yannickspoerl/yannickspoerl',
  plugins: [
    require('@vuepress/plugin-back-to-top'),
    require('vuepress-plugin-seo'),
    'vuepress-plugin-feed',
  ],
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    feed: {
      canonical_base: "https://blog.yannickspoerl.de/",
      posts_directories: ["/_posts/"]
    },
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Resume',
        link: 'http://blog.yannickspoerl.de/Resume_EN.pdf',
      }
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
          text: 'Privacy Notice',
          link: '/legalnotice',
        },
        {
          text: 'MIT Licensed',
          link: '/license',
        },
      ]
    },
  },
}
