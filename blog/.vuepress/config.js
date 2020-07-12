module.exports = {
  title: 'Blog - Yannick Spoerl',
  description: 'My personal blog',
  theme: '@yannickspoerl/yannickspoerl',
  plugins: [
    require('@vuepress/plugin-back-to-top'),
    require('vuepress-plugin-seo'),
  ],
  themeConfig: {
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'en-US', // this will be set as the lang attribute on <html>
        title: 'VuePress',
        description: 'Vue-powered Static Site Generator'
      },
      '/en/': {
        lang: 'en-US',
        title: 'VuePress',
        description: 'Vue 驱动的静态网站生成器'
      }
    },
    directories: [
      {
        id: "de",
        dirname: "_de",
        title: "Post",
        path: "/",
        itemPermalink: "/:year/:month/:day/:slug"
      },
      {
        id: "en",
        dirname: "_en",
        title: "Post",
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
