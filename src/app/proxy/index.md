---
giscus: false
---

# 代理软件列表

<!--@include: ../../vpn/doc-top.md-->

## 推荐

::: tip
跨平台泛指软件可以在桌面端或移动端上运作。
:::

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