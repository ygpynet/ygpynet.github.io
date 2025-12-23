---
layout: page
---

<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
        avatar: '/images/logo-dark.webp',
        name: '一个朋友 Bot',
        title: '管理员',
        desc: 'YGPY.net 的传话筒',
        links: [
            {
                icon: 'telegram',
                link: 'https://t.me/ygpyChatBot',
                ariaLabel: 'telegram link'
            }
        ]
    }
]
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>
            联系我们
        </template>
        <template #lead>
            投稿、广告、友链和无限可能
        </template>
    </VPTeamPageTitle>
    <VPTeamMembers size="medium" :members />
</VPTeamPage>
