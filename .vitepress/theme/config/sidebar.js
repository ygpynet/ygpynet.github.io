import { getCurrentAd } from '../config/ads';

const adSidebar = getCurrentAd(3, 'Sidebar')

export default {
    '/vpn/': [
        {
            text: '试用机场',
            items: [
                {
                    text: '2025',
                    collapsed: false,
                    items: [
                        { text: '10 月', link: '/vpn/2025/10' },
                        { text: '9 月', link: '/vpn/2025/09' },
                        { text: '8 月', link: '/vpn/2025/08' },
                        { text: '7 月', link: '/vpn/2025/07' },
                        { text: '6 月', link: '/vpn/2025/06' },
                        { text: '5 月', link: '/vpn/2025/05' },
                        { text: '4 月', link: '/vpn/2025/04' },
                        { text: '3 月', link: '/vpn/2025/03' },
                        { text: '2 月', link: '/vpn/2025/02' },
                        { text: '1 月', link: '/vpn/2025/01' }
                    ]
                },
                {
                    text: '归档',
                    collapsed: true,
                    items: [
                        { text: '2024 年', link: '/vpn/archives/2024' }
                    ]
                }
            ]
        },
        {
            text: '免费机场',
            link: '/vpn/free'
        },
        {
            text: '付费机场',
            link: '/vpn/paid'
        }
    ],
    '/app/': [
        {
            text: '代理软件',
            link: '/app/proxy'
        },
        {
            text: '测速工具',
            link: '/app/speed'
        }
    ]
}