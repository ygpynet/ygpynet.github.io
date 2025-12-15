import { createContentLoader } from 'vitepress'

export default createContentLoader('vpn/free/**/*.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.filter(page =>
            !page.url.endsWith('/vpn/free/') &&
            !(page.file?.includes('index.md'))
        ).sort((a, b) => {
            return a.url.localeCompare(b.url)
        }).map((page) => {
            return {
                ...page
            }
        })
    }
})