/*
 * @Description: 
 * @Author: Bert
 * @Date: 2024-04-24 23:40:26
 * @LastEditors: Bert
 * @LastEditTime: 2024-04-25 16:36:53
 */
import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: '博客小站',
  description: 'Bert的博客主题',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/logo.jpg' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/title.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '🏠首页', link: '/' },
      {
        text: "前端博客",
        link: "/blogs/frontend/index",
        // children: [
        //   { text: "前端博客汇总", icon: "edit", link: "front_simple" },
        //   { text: "JavaScript", icon: "edit", link: "js" },
        //   { text: "浏览器渲染原理", icon: "edit", link: "browser/browser" },
        //   { text: "浏览器事件循环", icon: "edit", link: "browser/eventLoop" },
        //   { text: "JS库开发", icon: "edit", link: "module_develop" },
        //   { text: "Vue全家桶", icon: "edit", link: "vue" },
        // ],
      },
      {
        text: "后端笔记",
        link: "/blogs/backend/index",
      },
      {
        text: "计算机综合",
        link: "/blogs/csAll/index",
      },
      { text: '关于我', link: '/intro' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/BertRepo'
      }
    ]
  }
})
