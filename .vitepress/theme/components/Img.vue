<template>
    <div class="vp-raw">
        <fwb-img :alt="alt" :caption="alt" :src="src" />
    </div>
</template>

<script setup>
import { FwbImg } from './index'

defineProps({
    alt: String,
    caption: String,
    src: String
})
</script>