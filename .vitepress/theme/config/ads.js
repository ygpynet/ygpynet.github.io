import ads from '../ads.json'

function getTodayIndexList(length) {
    const today = new Date();
    const dayKey = today.toISOString().slice(0, 10);
    let stored = localStorage.getItem('ads_shown_indexes');
    let data = stored ? JSON.parse(stored) : {};
    if (data.day !== dayKey || !Array.isArray(data.indexes) || data.indexes.length !== length) {
        let arr = Array.from({ length }, (_, i) => i);
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        data = { day: dayKey, indexes: arr };
        localStorage.setItem('ads_shown_indexes', JSON.stringify(data));
    }
    return data.indexes;
}

/**
 * @param {number} slot 广告位序号（用于多广告位不重复）
 * @param {'Home'|'Doc'|'Aside'} type 广告位类型
 * @returns {object|null} 当前广告对象，包含 title/desc/img/link
 */
export function getCurrentAd(slot = 0, type = 'Home') {
    const len = ads.length;
    if (!len) return null;
    const indexes = getTodayIndexList(len);
    const interval = 24 * 60 * 60 * 1000 / len;
    const now = Date.now();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const passed = now - todayStart.getTime();
    const adIdx = Math.floor(passed / interval) % len;
    const realIdx = indexes[(adIdx + slot) % len];
    const ad = ads[realIdx];

    // 取出对应类型的图片和描述
    const imgKey = `img${type}`;
    const descKey = `desc${type}`;
    return {
        title: ad.title,
        desc: ad[descKey] || '',
        img: ad[imgKey] || '',
        link: ad.link
    };
}