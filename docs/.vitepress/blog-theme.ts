/*
 * @Description: 
 * @Author: Bert
 * @Date: 2024-04-24 23:40:26
 * @LastEditors: Bert
 * @LastEditTime: 2024-05-23 16:27:45
 */
// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
  // search: false,

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: 'MIT License | Bert',
    icpRecord: {
      name: '苏ICP备2021042652号-1',
      link: 'https://beian.miit.gov.cn/'
    },
    securityRecord: {
      name: '苏公网安备32092302000193号',
      link: 'https://www.beian.gov.cn/portal/index.do'
    },
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: 'Bert',

  // 友链
  friend: [
    {
      nickname: 'Bert',
      des: '博主之前的个人网站',
      avatar:
        '/title.png',
      url: 'http://bert.smarthua.cn',
    },
    {
      nickname: '闲坐含香咀翠',
      des: '博主的掘金主页',
      avatar:
        'https://p26-passport.byteacctimg.com/img/user-avatar/92664f5e02431cd639a4dbd021ae44e1~170x170.awebp',
      url: 'https://juejin.cn/user/3844369926334215/posts',
    },
  ],

  // 公告
  popover: {
    title: '公告',
    body: [
      // { type: 'text', content: '👇 微信号 👇' },
      // {
      //   type: 'image',
      //   src: 'https://img2.imgtp.com/2024/04/25/vWnzohsV.jpg'
      // },
      // {
      //   type: 'text',
      //   content: 'xhjdwx_'
      // },
      { type: 'text', content: '微信号👉xhjdwx_' },
      {
        type: 'text',
        content: '欢迎大家私信交流'
      },
      {
        type: 'button',
        content: '关于我',
        props: {
          type: 'primary'
        },
        link: 'http://smarthua.cn/intro.html',
      },
    ],
    duration: -1
  },
})

export { blogTheme }
