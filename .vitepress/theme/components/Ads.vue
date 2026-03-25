<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
import { getAd, sanitizeHTML } from '../../config/ads.js'

const { theme } = useData()
const ad = ref(null)

const props = defineProps({
  slot: {
    type: String,
    default: 'Aside'
  },
  position: {
    type: Number,
    default: 0
  }
})

onMounted(() => {
  ad.value = getAd(props.slot, props.position)

  if (ad.value?.id && typeof localStorage !== 'undefined') {
    localStorage.setItem(`ad-${props.slot}`, ad.value.id)
  }
})
</script>

<template>
  <div class="vp-raw">
    <div :class="['ads', props.slot.toLowerCase()]">
      <span>
        <span v-if="ad && ad.link && ad.image">
          <a :href="ad.link" target="_blank" rel="noreferrer sponsored">
            <img :src="ad.image" :alt="ad.title" />
            <span class="ads-text" v-html="sanitizeHTML(ad.details)" />
          </a>
        </span>
        <span class="ads-poweredby" v-if="ad && ad.link && ad.image">赞助商广告</span>
        <span class="ads-poweredby" v-else>
          <a :href="theme.ads.sponsor">
            <span class="ads-text">成为赞助商</span>
          </a>
        </span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.ads {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  min-height: 256px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
  background-color: var(--vp-carbon-ads-bg-color);
}

@media (min-width: 1440px) {
  .ads.doc {
    height: 462px;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .ads.doc {
    height: 426px;
  }
}

@media (max-width: 768px) and (min-width: 426px) {
  .ads.doc {
    height: 462px;
  }
}

@media (max-width: 425px) and (min-width: 376px) {
  .ads.doc {
    height: 287.06px;
  }
}

@media (max-width: 375px) and (min-width: 321px) {
  .ads.doc {
    height: 258.94px;
  }
}

@media (max-width: 320px) {
  .ads.doc {
    height: 256px;
  }
}

.VPSidebar .ads {
  background-color: var(--vp-c-bg);
}

.ads :deep(img) {
  margin: 0 auto;
  border-radius: 6px;
}

.ads :deep(.ads-text) {
  display: block;
  margin: 0 auto;
  padding-top: 12px;
  color: var(--vp-carbon-ads-text-color);
  transition: color 0.25s;
}

.ads :deep(.ads-text:hover) {
  color: var(--vp-carbon-ads-hover-text-color);
}

.ads :deep(.ads-poweredby) {
  display: block;
  padding-top: 6px;
  font-size: 11px;
  font-weight: 500;
  color: var(--vp-carbon-ads-poweredby-color);
  text-transform: uppercase;
  transition: color 0.25s;
}

.ads :deep(.ads-poweredby:hover) {
  color: var(--vp-carbon-ads-hover-poweredby-color);
}

.ads :deep(> div) {
  display: none;
}

.ads :deep(> div:first-of-type) {
  display: block;
}
</style>
