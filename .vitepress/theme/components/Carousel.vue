<template>
    <div class="vp-raw">
        <ClientOnly>
            <fwb-carousel no-controls no-indicators :pictures="pictures" />
        </ClientOnly>
    </div>
</template>

<script setup>
import { FwbCarousel } from './index'
import { getCurrentAd } from '../config/ads';

const adDoc = getCurrentAd(1, 'Doc')

const pictures = [
    { src: adDoc.img, alt: adDoc.title, link: adDoc.link }
]
</script>