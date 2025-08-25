<template>
    <a class="VPLink link no-icon VPFeature" :href="adHome?.link" target="_blank" rel="noreferrer">
        <fwb-card :img-alt="adHome?.title" :img-src="adHome?.img" variant="horizontal">
            <div class="p-5">
                <span class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ adHome?.title }}
                </span>
                <hr>
                <span class="font-normal text-gray-700 dark:text-gray-400" v-html="adHome?.desc"></span>
                <p></p>
                <span class="ads-poweredby">赞助商广告</span>
            </div>
        </fwb-card>
    </a>
</template>

<script setup>
import { FwbCard } from './index'
import { getCurrentAd } from '../config/ads';

const adHome = getCurrentAd(0, 'Home')
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: inherit;
}

.ads-poweredby {
    display: block;
    padding-top: 6px;
    font-size: 11px;
    font-weight: 500;
    color: var(--vp-carbon-ads-poweredby-color);
    text-transform: uppercase;
    transition: color 0.25s;
}

.ads-poweredby:hover {
    color: var(--vp-carbon-ads-hover-poweredby-color);
}
</style>