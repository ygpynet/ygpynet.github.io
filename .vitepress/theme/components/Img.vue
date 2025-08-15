<template>
    <div class="vp-raw">
        <fwb-img :alt="alt" :caption="alt" :src="src" />
    </div>
</template>

<script setup lang="ts">
import { FwbImg } from './index'

defineProps<{
    alt: string
    src: string
}>()
</script>