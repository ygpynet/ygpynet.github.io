<template>
    <a :href="adSidebar?.link" target="_blank" rel="noreferrer">
        <img class="rounded-lg" :src="adSidebar?.img"></img>
    </a>
    <span class="ads-poweredby text-center">赞助商广告 | {{ adSidebar?.desc }}</span>
</template>

<script setup>
import { getCurrentAd } from '../config/ads';

const adSidebar = getCurrentAd(3, 'Sidebar')
</script>

<style scoped>
.ads-poweredby {
    display: block;
    padding-top: 6px;
    font-size: 11px;
    font-weight: 500;
    color: var(--vp-carbon-ads-poweredby-color);
    transition: color 0.25s;
}

.ads-poweredby:hover {
    color: var(--vp-carbon-ads-hover-poweredby-color);
}
</style>