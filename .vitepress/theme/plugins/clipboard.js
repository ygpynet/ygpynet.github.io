export default () => {
  document.querySelectorAll(".vp-doc p code").forEach((text) => {
    text.addEventListener("mouseenter", () => {
      text.style.cursor = "pointer";
      text.setAttribute("title", "点击复制");
    });

    // https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/writeText#%E7%A4%BA%E4%BE%8B
    text.addEventListener("click", () => {
      writeClipboardText(text.textContent);
    });
    async function writeClipboardText(text) {
      try {
        await navigator.clipboard.writeText(text);
      } catch (error) {
        console.error(error.message);
      }
    }
  });
};
