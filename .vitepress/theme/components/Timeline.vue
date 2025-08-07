<template>
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
                        来到“仪表盘”，复制订阅地址，快速将节点导入对应客户端进行使用。
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
</template>

<script setup>
import {
    FwbTimeline,
    FwbTimelineBody,
    FwbTimelineContent,
    FwbTimelineItem,
    FwbTimelinePoint,
    FwbTimelineTime,
    FwbTimelineTitle
} from './index'
</script>