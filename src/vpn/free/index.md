---
giscus: false
---

# 免费机场推荐

<!--@include: ../doc-top.md-->

## 最新

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="ind of inactiveList" :key="ind.url">
        <CardImage
            :link="ind.url"
            :src="ind.frontmatter.image.src"
            :alt="ind.frontmatter.image.alt"
            :subheading="ind.frontmatter.subheading"
            :description="ind.frontmatter.description"
            :date="ind.frontmatter.date.slice(0, 10)"
            :status="ind.frontmatter.status"
            :title="ind.frontmatter.title.slice(0, 4)"
        />
    </ClientOnly>
</div>

## 已失效的

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="ind of activeList" :key="ind.url">
        <CardImage
            :link="ind.url"
            :src="ind.frontmatter.image.src"
            :alt="ind.frontmatter.image.alt"
            :subheading="ind.frontmatter.subheading"
            :description="ind.frontmatter.description"
            :date="ind.frontmatter.date.slice(0, 10)"
            :status="ind.frontmatter.status"
            :title="ind.frontmatter.title.slice(0, 4)"
        />
    </ClientOnly>
</div>

<script setup>
import { computed } from 'vue'
import { data as index } from '../../../.vitepress/theme/data/vpn/free.data.js'

const inactiveList = computed(() =>
  index.slice(0,30).filter(item => item.frontmatter.status === false)
)

const activeList = computed(() =>
  index.slice(0,30).filter(item => item.frontmatter.status === true)
)

const hyperlinks = index
  .filter(item => item.frontmatter?.status === false)
  .map(item => item.frontmatter?.hyperlink)
  .filter(Boolean)

console.log(hyperlinks)
</script>
