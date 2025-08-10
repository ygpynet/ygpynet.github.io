<template>
    <div class="vp-raw">
        <fwb-carousel :pictures="pictures" slide :slide-interval="3000" />
    </div>
</template>

<script setup>
import { FwbCarousel } from './index'

const pictures = [
    { src: '/images/vpn/paid/hongxing/hong-xing-yun.webp', alt: '红杏云', link: 'https://hongxingyun5.vip/web/#/login?code=CPXZlpWz' },
    { src: '/images/vpn/paid/candytally/tang-guo-yun.webp', alt: '糖果云', link: 'https://candytally.diy/web/#/login?code=foHbXFgg' },
    { src: '/images/vpn/paid/xueshan/xue-shan-ji-chang.webp', alt: '雪山机场', link: 'https://x2.xueshan.shop/#/register?code=pq7dmt6E' }
]
</script>