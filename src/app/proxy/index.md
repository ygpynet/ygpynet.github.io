---
giscus: false
---

# 代理软件列表

<p></p>
<ClientOnly>
    <AdsCarousel />
</ClientOnly>

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="pro of proxy" :key="pro.url">
        <Card
            :icon="pro.frontmatter.icon"
            :link="pro.url"
            :subheading="pro.frontmatter.subheading"
            :shortdesc="pro.frontmatter.shortdesc"
            :description="pro.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as proxy } from '../../../.vitepress/theme/data/app/proxy.data.js'
</script>