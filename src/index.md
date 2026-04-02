---
# https://vitepress.dev/zh/reference/default-theme-home-page
titleTemplate: 免费机场推荐
layout: home

hero:
  name: 一个朋友
  text: 出海工具推荐
  tagline: 出海第一站，从这里开始
  image:
    src: /images/hero-image.webp
    alt: 一个朋友
  actions:
    - theme: brand
      text: 开始阅读
      link: /vpn/test/2026/03
    - theme: alt
      text: 更新日志
      link: /changelog/
features:
  - icon: ✈️
    title: 机场推荐
    details: 推荐试用机场，解决上网难题。
    link: /vpn/test/2026/03
    linkText: 了解更多
  - icon: 💻
    title: 软件列表
    details: 罗列常用软件，提升作业效率。
    link: /app/proxy
    linkText: 了解更多
  - icon: 🌏
    title: 网址导航
    details: 导航热门网站，扩展业务视野。
    link: /nav/
    linkText: 了解更多
---

<br>
<Ads slot="Home" :position="3" />

## 使用指南

<div class="vp-raw">
  <fwb-timeline>
    <fwb-timeline-item>
      <fwb-timeline-point />
      <fwb-timeline-content>
        <fwb-timeline-time>
          第一步
        </fwb-timeline-time>
        <fwb-timeline-title>
          套餐购买
        </fwb-timeline-title>
        <fwb-timeline-body>
          注册机场账号，进入“购买订阅”，选择最适合你的计划。
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point />
      <fwb-timeline-content>
        <fwb-timeline-time>
          第二步
        </fwb-timeline-time>
        <fwb-timeline-title>
          订阅导入
        </fwb-timeline-title>
        <fwb-timeline-body>
          来到“仪表盘（首页）”，复制订阅地址，快速将节点导入对应客户端进行使用。
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
    <fwb-timeline-item>
      <fwb-timeline-point />
      <fwb-timeline-content>
        <fwb-timeline-time>
          第三步
        </fwb-timeline-time>
        <fwb-timeline-title>
          开启代理
        </fwb-timeline-title>
        <fwb-timeline-body>
          打开代理软件，进入“设置”，开启系统代理。
        </fwb-timeline-body>
      </fwb-timeline-content>
    </fwb-timeline-item>
  </fwb-timeline>
</div>

## 常见问题

<ClientOnly>
  <div class="vp-raw">
    <fwb-accordion flushed>
      <fwb-accordion-panel>
        <fwb-accordion-header>机场被 Chrome 标记“危险网站”？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            主要原因是 Google 安全浏览检测到潜在钓鱼风险、证书不规范及用户投诉，常因其非官方性质而误判。
          </p>
          <p class="text-gray-500 dark:text-gray-400">
            可通过（点击“详情”> 访问“这个不安全的网站”）绕过警告。
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>为什么我注册不了？提示“本网站已关闭注册”？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            许多机场会不定时关闭免费注册，建议关注官方公告或加入机场群组获取最新邀请码。
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>为什么收不到验证码？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            部分免费机场不发邮箱验证码，或邮箱受限。建议查看机场说明，或尝试更换邮箱注册。
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>提示“邀请码无效”或“邀请次数为 0”怎么办？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            说明邀请码已失效或使用完毕，可换其他邀请码或加入机场群组获取新入口。 
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>优惠劵在哪里？为什么有时显示失效？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            优惠劵一般发布在机场简介、群组或频道说明中。免费劵数量有限，用完即失效，需及时领取或购买。
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>免费机场会跑路吗？安全吗？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            免费机场随时可能关闭或不稳定是常态，建议优先选择可靠付费机场，或分批试用多个免费机场备用。
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>备注“已失效”的定义？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            多种含义，指机场服务提供商重铸、兼并和失联等。
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
      <fwb-accordion-panel>
        <fwb-accordion-header>站内所有图片均无法显示？</fwb-accordion-header>
        <fwb-accordion-content>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            尝试切换网络节点（或使用其他网络环境）。更换节点后通常可以恢复图片显示。
          </p>
        </fwb-accordion-content>
      </fwb-accordion-panel>
    </fwb-accordion>
  </div>
</ClientOnly>

<br>
<AdSense />

<script setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
  FwbTimeline,
  FwbTimelineBody,
  FwbTimelineContent,
  FwbTimelineItem,
  FwbTimelinePoint,
  FwbTimelineTime,
  FwbTimelineTitle,
} from '../.vitepress/theme/components/index.ts'
</script>
