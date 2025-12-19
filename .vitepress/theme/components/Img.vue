<template>
    <div class="vp-raw">
        <fwb-img :alt="alt" :caption="computedCaption" :src="src" :class="status ? 'grayscale opacity-60' : ''" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FwbImg } from './index'

const props = defineProps<{
    alt?: string
    src: string
    status?: boolean
}>()

const computedCaption = computed(() => {
    if (props.alt) return props.alt
    if (props.status) return '[服务商失联]'
    return ''
})
</script>
