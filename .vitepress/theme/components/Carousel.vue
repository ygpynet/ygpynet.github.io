<template>
    <div class="vp-raw">
        <fwb-carousel :pictures="pictures" slide :slide-interval="3000" />
    </div>
</template>

<script setup>
import { FwbCarousel } from './index'

const pictures = [
    { src: '/images/vpn/paid/hongxing/20240801.webp', alt: '红杏云', link: 'https://hongxingyun5.vip/web/#/login?code=CPXZlpWz' },
    { src: '/images/vpn/paid/candytally/20250228.webp', alt: '糖果云', link: 'https://candytally.diy/web/#/login?code=foHbXFgg' }
]
</script>