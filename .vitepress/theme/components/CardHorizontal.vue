<template>
    <ClientOnly>
        <fwb-card :img-alt="adHome.title" :img-src="adHome.img" variant="horizontal">
            <div class="p-5">
                <a :href="adHome.link" target="_blank" rel="noreferrer">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ adHome.title }}
                    </h5>
                </a>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    {{ adHome.desc }}
                </p>
                <small>赞助商广告</small>
            </div>
        </fwb-card>
    </ClientOnly>
</template>

<script setup>
import { FwbCard } from './index'
import { getCurrentAd } from '../config/ads';

const adHome = getCurrentAd(0, 'Home')
</script>