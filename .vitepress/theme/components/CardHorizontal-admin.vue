<template>
    <ClientOnly>
        <fwb-card :img-alt="theme.ads.home.title" :img-src="theme.ads.home.src" variant="horizontal">
            <div class="p-5">
                <a :href="theme.ads.home.href" target="_blank" rel="noreferrer">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ theme.ads.home.title }}
                    </h5>
                </a>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                    {{ theme.ads.home.details }}
                </p>
                <a :href="theme.ads.home.link">
                    <small>这是广告，点我了解更多</small>
                </a>
            </div>
        </fwb-card>
    </ClientOnly>
</template>

<script setup>
import { useData } from 'vitepress'
import { FwbCard } from './index'

const { theme } = useData()
</script>