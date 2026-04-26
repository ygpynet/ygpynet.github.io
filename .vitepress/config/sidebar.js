export default {
  "/vpn/": [
    {
      text: "机场推荐",
      items: [
        {
          text: "试用机场",
          items: [
            {
              text: "2026 年",
              collapsed: false,
              items: [
                {
                  text: "4 月",
                  link: "/vpn/test/2026/04",
                },
                {
                  text: "3 月",
                  link: "/vpn/test/2026/03",
                },
                {
                  text: "2 月",
                  link: "/vpn/test/2026/02",
                },
                {
                  text: "1 月",
                  link: "/vpn/test/2026/01",
                },
              ],
            },
            {
              text: "2025 年",
              link: "/vpn/test/2025",
            },
            {
              text: "2024 年",
              link: "/vpn/test/2024",
            },
          ],
        },
        { text: "免费机场", link: "/vpn/free" },
        { text: "付费机场", link: "/vpn/paid" },
      ],
    },
  ],
  "/app/": [
    {
      text: "软件列表",
      items: [
        { text: "代理软件", link: "/app/proxy" },
        { text: "测速工具", link: "/app/speed" },
      ],
    },
  ],
  "/changelog/": [
    {
      text: "更新日志",
      items: [{ text: "2026 年", link: "/changelog/2026" }],
    },
  ],
};
