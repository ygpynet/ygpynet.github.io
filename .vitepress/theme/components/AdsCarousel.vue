<template>
    <div class="vp-raw">
        <a :href="adDoc?.link" target="_blank" rel="noreferrer">
            <figure>
                <img class="rounded-lg" :src="adDoc?.img" :alt="adDoc?.title">
                <figcaption :class="captionClass">
                    [赞助商广告] {{ adDoc?.desc }}
                </figcaption>
            </figure>
        </a>
    </div>
</template>

<script setup lang="ts">
import { getCurrentAd } from '../config/ads';
import { onMounted, watchEffect } from 'vue';

const adDoc: any = getCurrentAd(1, 'Doc')

onMounted(() => {
    if (adDoc?.id) {
        localStorage.setItem('adDoc', adDoc.id)
    }
})
watchEffect(() => {
    if (adDoc?.id) {
        localStorage.setItem('adDoc', adDoc.id)
    }
})

interface ImageProps {
    caption?: string
    src?: string
    alt?: string
    captionClass?: string
}

withDefaults(defineProps<ImageProps>(), {
    caption: '',
    src: '',
    alt: '',
    captionClass: 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400',
})
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: inherit;
}
</style>