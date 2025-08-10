<template>
    <div class="vp-raw">
        <ClientOnly>
            <fwb-card :href="href" :target="target" rel="noreferrer">
                <div class="p-5 flex flex-col gap-2">
                    <div class="flex flex-row gap-2 items-center">
                        <fwb-avatar :img="img" size="md" :alt="title" bordered />
                        <h5 class="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">
                            {{ title }}
                        </h5>
                    </div>
                    <p class="font-normal text-gray-700 dark:text-gray-400 truncate" :title="details">
                        {{ details }}
                    </p>
                </div>
            </fwb-card>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import {
    FwbAvatar,
    FwbCard
} from './index'

defineProps<{
    href: string
    target: string
    img: string
    title: string
    details: string
}>()
</script>