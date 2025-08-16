<template>
    <div>
        <component v-for="(vnode, idx) in filteredVNodes" :is="vnode" :key="idx" />
    </div>
</template>

<script setup lang="ts">
import { useSlots, ref, computed, onMounted } from 'vue'

const slots = useSlots()
const adIds = ref<string[]>([])

onMounted(() => {
    // 读取 adDoc 和 adAside 两个键，并过滤掉 null
    const ids = [
        localStorage.getItem('adDoc'),
        localStorage.getItem('adAside')
    ].filter((id): id is string => !!id)
    adIds.value = ids
})

// 按 adIds 顺序查找并渲染对应 vnode
const filteredVNodes = computed(() => {
    const nodes = slots.default ? slots.default() : []
    if (!adIds.value.length) return []
    return adIds.value
        .map(id => nodes.find(vnode => vnode.props && vnode.props['data-ad-id'] === id))
        .filter(Boolean)
})
</script>