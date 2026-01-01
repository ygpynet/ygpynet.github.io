import { getCurrentAd } from "../config/ads";

const adSidebar = getCurrentAd(3, "Sidebar");

export default {
  "/vpn/": [
    {
      text: "试用机场",
      items: [
        {
          text: "2025",
          collapsed: false,
          items: [{ text: "12 月", link: "/vpn/free/2025/12/" }],
        },
        {
          text: "归档",
          collapsed: true,
          items: [
            { text: "2025 年", link: "/vpn/archives/2025" },
            { text: "2024 年", link: "/vpn/archives/2024" },
          ],
        },
      ],
    },
    {
      text: "免费机场",
      link: "/vpn/collections",
    },
    {
      text: "付费机场",
      link: "/vpn/paid/",
    },
  ],
  "/app/": [
    {
      text: "代理软件",
      link: "/app/proxy/",
    },
    {
      text: "测速工具",
      link: "/app/speed",
    },
  ],
};
