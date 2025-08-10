<template>
    <div class="vp-raw">
        <ClientOnly>
            <fwb-accordion>
                <fwb-accordion-panel>
                    <fwb-accordion-header>为什么我注册不了？提示“本网站已关闭注册”？</fwb-accordion-header>
                    <fwb-accordion-content>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">
                            许多机场会不定时关闭免费注册，建议关注官方公告或加入机场群组获取最新邀请码。
                        </p>
                    </fwb-accordion-content>
                </fwb-accordion-panel>
                <fwb-accordion-panel>
                    <fwb-accordion-header>优惠码在哪里？为什么有时显示失效？</fwb-accordion-header>
                    <fwb-accordion-content>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">
                            优惠码一般发布在机场简介、群组或频道说明中。免费码数量有限，用完即失效，需及时领取或购买。
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
                    <fwb-accordion-header>为什么收不到验证码？</fwb-accordion-header>
                    <fwb-accordion-content>
                        <p class="mb-2 text-gray-500 dark:text-gray-400">
                            部分免费机场不发邮箱验证码，或邮箱受限。建议查看机场说明，或尝试更换邮箱注册。
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
            </fwb-accordion>
        </ClientOnly>
    </div>
</template>

<script setup>
import {
    FwbAccordion,
    FwbAccordionContent,
    FwbAccordionHeader,
    FwbAccordionPanel
} from './index'
</script>