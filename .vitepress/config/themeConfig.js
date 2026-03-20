import nav from "./navItem";
import sidebar from "./sidebar";

export default {
  // https://vitepress.dev/zh/reference/default-theme-config
  logo: {
    src: "/images/logo.webp",
    alt: "一个朋友 Logo",
  },
  nav,
  sidebar,
  outline: {
    label: "页面导航",
  },
  footer: {
    message: `<a href="/about">关于我们</a> | <a href="/link-exchange">友情链接</a> | <a href="/privacy-policy">隐私权政策</a>`,
    copyright: `© ${new Date().getFullYear()} 一个朋友`,
  },
  lastUpdated: {
    text: "最后更新于",
    formatOptions: {
      dateStyle: "short",
      timeStyle: "short",
    },
  },
  docFooter: {
    prev: "上一页",
    next: "下一页",
  },
  darkModeSwitchLabel: "主题",
  lightModeSwitchTitle: "切换到浅色模式",
  darkModeSwitchTitle: "切换到深色模式",
  sidebarMenuLabel: "菜单",
  returnToTopLabel: "回到顶部",
  langMenuLabel: "更改语言",
  externalLinkIcon: true,
  search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索",
          buttonAriaLabel: "搜索",
        },
        modal: {
          displayDetails: "显示详细列表",
          resetButtonTitle: "重置搜索",
          backButtonTitle: "关闭搜索",
          noResultsText: "没有结果",
          footer: {
            selectText: "选择",
            selectKeyAriaLabel: "输入",
            navigateText: "导航",
            navigateUpKeyAriaLabel: "上箭头",
            navigateDownKeyAriaLabel: "下箭头",
            closeText: "关闭",
            closeKeyAriaLabel: "Esc",
          },
        },
      },
    },
  },
  ads: {
    sponsor: "/about#联系我们",
  },
  notFound: {
    title: "页面未找到",
    quote: "“如果你不改变方向，你可能会到达你正在前往的地方。”——老子",
    linkText: "返回首页",
  },
};
