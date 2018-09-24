module.exports = {
  base:'/books/',
  title:'学习笔记',
  description:'日常学习积累',
  themeConfig: {
    sidebarDepth:1,
    sidebar: [
      ['/','首页'],
      '/guide/',
      '/config/'
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '配置', link: '/config/' },
      { text: '默认主题配置', link: '/default-theme-config/' },
      { text: '外部', link: 'https://google.com' },
    ]
  }
}