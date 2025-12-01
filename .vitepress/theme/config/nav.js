export default [
    { text: '首页', link: '/' },
    {
        text: '机场推荐',
        items: [
            { text: '试用机场', link: '/vpn/2025/12', activeMatch: '/vpn/2025/' },
            { text: '免费机场', link: '/vpn/free' },
            { text: '付费机场', link: '/vpn/paid' }
        ]
    },
    {
        text: '软件列表',
        items: [
            { text: '代理软件', link: '/app/proxy' },
            { text: '测速工具', link: '/app/speed' }
        ]
    },
    { text: '网址导航', link: '/nav/' }
]