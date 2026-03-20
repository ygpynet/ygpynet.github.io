import DOMPurify from "dompurify";
import ads from "./ads.json";

// ---------- Types ----------
export const AdSlots = {
  HOME: "Home",
  DOC: "Doc",
  SIDEBAR: "Sidebar",
  ASIDE: "Aside",
};

// ---------- Storage ----------
function getStorage() {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function getItem(key) {
  const storage = getStorage();
  if (!storage) return null;
  try {
    return JSON.parse(storage.getItem(key));
  } catch {
    return null;
  }
}

function setItem(key, value) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(key, JSON.stringify(value));
}

// ---------- Sanitizer ----------
export function sanitizeHTML(html) {
  if (!html) return "";
  return DOMPurify.sanitize(html);
}

// ---------- Rotation ----------
function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- Service ----------
const STORAGE_KEY = "ads_rotation";

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getDailyIndexes(length) {
  const today = getTodayKey();
  let data = getItem(STORAGE_KEY);

  if (
    !data ||
    data.day !== today ||
    !Array.isArray(data.indexes) ||
    data.indexes.length !== length
  ) {
    const indexes = shuffle(Array.from({ length }, (_, i) => i));
    data = { day: today, indexes };
    setItem(STORAGE_KEY, data);
  }

  return data.indexes;
}

function getCurrentIndex(length) {
  const interval = (24 * 60 * 60 * 1000) / length;
  const now = Date.now();
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const passed = now - start.getTime();
  return Math.floor(passed / interval) % length;
}

export function getAd(slot = "Aside", position = 0) {
  const len = ads.length;
  if (!len) return null;

  const indexes = getDailyIndexes(len);
  const baseIndex = getCurrentIndex(len);
  const realIndex = indexes[(baseIndex + position) % len];
  const ad = ads[realIndex];
  if (!ad) return null;

  const slotData = ad.slots?.[slot];
  if (!slotData) return null;

  return {
    id: ad.id,
    title: ad.title,
    image: slotData.image,
    details: slotData.details,
    link: ad.link,
  };
}
