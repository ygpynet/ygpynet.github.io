// https://vitepress.dev/guide/custom-theme
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import Layout from './Layout.vue'
import Accordion from './components/Accordion.vue'
import Ads from './components/Ads.vue'
import Card from './components/Card.vue'
import CardHorizontal from './components/CardHorizontal.vue'
import Carousel from './components/Carousel.vue'
import Img from './components/Img.vue'
import Link from './components/Link.vue'
import Timeline from './components/Timeline.vue'
import Tooltip from './components/Tooltip.vue'
import './style.css'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Accordion', Accordion)
    app.component('Ads', Ads)
    app.component('Card', Card)
    app.component('CardHorizontal', CardHorizontal)
    app.component('Carousel', Carousel)
    app.component('Img', Img)
    app.component('Link', Link)
    app.component('Timeline', Timeline)
    app.component('Tooltip', Tooltip)
  },
  setup() {
    const route = useRoute()

    // Medium Zoom
    const zoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }

    // Clipboard
    const clip = () => {
      document.querySelectorAll('code').forEach(code => {
        code.addEventListener('click', async () => {
          navigator.clipboard.writeText(code.textContent);
        });
      });
    }

    onMounted(() => {
      zoom()
      clip()
    })

    watch(
      () => route.path,
      () => nextTick(() => {
        zoom()
        clip()
      })
    )
  }
}