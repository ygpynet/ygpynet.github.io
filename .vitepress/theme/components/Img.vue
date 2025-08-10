<template>
    <div class="vp-raw">
        <ClientOnly>
            <fwb-img :alt="alt" :caption="alt" :src="src" />
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import { FwbImg } from './index'

defineProps<{
    alt: string
    src: string
}>()
</script>