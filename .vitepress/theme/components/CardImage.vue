<template>
    <div class="vp-raw">
        <a :href="link">
            <fwb-card :img-alt="alt" :img-src="src" variant="image" :class="status ? 'grayscale opacity-60' : ''">
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ subheading }}
                        <span v-if="status" class="ml-2 text-sm text-red-500 font-medium">
                            [已失效]
                        </span>
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400 truncate">
                        {{ description }}
                    </p>
                    <br>
                    <div class="flex justify-end">
                        <Badge type="info" :text="date" />
                    </div>
                </div>
            </fwb-card>
        </a>
    </div>
</template>

<script setup lang="ts">
import { FwbCard } from './index'

defineProps<{
    link: string
    alt: string
    src: string
    subheading: string
    description: string
    date: Date
    status?: boolean
}>()
</script>