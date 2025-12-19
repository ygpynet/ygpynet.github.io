---
giscus: false
---

# 免费机场推荐

<!--@include: ../doc-top.md-->

## 最新

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="ind of index" :key="ind.url">
{{ ind.frontmatter.hyperlink }}
    </ClientOnly>
</div>

<script setup>
import { data as index } from '../../../.vitepress/theme/data/vpn/test.data.js'
</script>