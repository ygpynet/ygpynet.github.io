<template>
    <ClientOnly></ClientOnly>
    <fwb-tooltip theme="light">
        <template #trigger>
            <code ref="codeEl">{{ code }}</code>
        </template>
        <template #content>
            点击复制
        </template>
    </fwb-tooltip>
    </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FwbTooltip } from './index'

defineProps<{
    code?: string
}>()

const codeEl = ref<HTMLElement | null>(null)
</script>