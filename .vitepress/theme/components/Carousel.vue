<template>
    <div class="vp-raw">
        <ClientOnly>
            <fwb-carousel :pictures="pictures" slide :slide-interval="3000" />
        </ClientOnly>
    </div>
</template>

<script setup>
import { FwbCarousel } from './index'

const pictures = [
    { src: 'https://i.imgur.com/WgsUHgz.png', alt: '红杏云', link: 'https://hongxingyun5.vip/web/#/login?code=CPXZlpWz' },
    { src: 'https://i.imgur.com/3zTLIL3.png', alt: '糖果云', link: 'https://candytally.diy/web/#/login?code=foHbXFgg' },
    { src: 'https://i.imgur.com/r6qD0zU.png', alt: '雪山机场', link: 'https://x2.xueshan.shop/#/register?code=pq7dmt6E' }
]
</script>