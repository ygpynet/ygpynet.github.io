const FORM_BASE =
  "https://docs.google.com/forms/d/e/1FAIpQLSePLUKy2EdVguEu-884Zag_eZ2mzDpWvD9GgruXpoLzhE_Fqw/viewform?usp=pp_url";

const CONFIG = {
  selectors: [".vp-doc h2"],
  debounce: 120,
};

let scrollY = 0;
let isLocked = false;

function lockScroll() {
  if (isLocked) return;
  scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  isLocked = true;
}

function unlockScroll() {
  if (!isLocked) return;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollY);
  isLocked = false;
}

let modalInstance = null;

function createModal() {
  if (modalInstance) return modalInstance;
  const modal = document.createElement("div");
  modal.id = "feedback-modal";
  const mask = document.createElement("div");
  mask.className = "feedback-mask";
  const dialog = document.createElement("div");
  dialog.className = "feedback-dialog";
  const header = document.createElement("div");
  header.className = "feedback-header";
  const title = document.createElement("span");
  title.textContent = "反馈";
  const closeBtn = document.createElement("button");
  closeBtn.className = "feedback-close";
  closeBtn.textContent = "×";
  const loading = document.createElement("div");
  loading.className = "feedback-loading";
  loading.textContent = "正在加载 Google 表单...";
  header.appendChild(title);
  header.appendChild(closeBtn);
  dialog.appendChild(header);
  dialog.appendChild(loading);
  modal.appendChild(mask);
  modal.appendChild(dialog);

  function close() {
    unlockScroll();
    modal.remove();
    modalInstance = null;
    document.removeEventListener("keydown", escHandler);
  }

  function escHandler(e) {
    if (e.key === "Escape") close();
  }

  closeBtn.onclick = close;
  mask.onclick = close;
  document.addEventListener("keydown", escHandler);
  document.body.appendChild(modal);
  modalInstance = { modal, dialog, loading, close };
  return modalInstance;
}

function openModal({ url }) {
  const { dialog, loading } = createModal();
  lockScroll();
  const old = dialog.querySelector("iframe");
  if (old) old.remove();
  loading.style.display = "block";
  loading.style.opacity = "1";
  const iframe = document.createElement("iframe");
  iframe.className = "feedback-iframe";
  iframe.setAttribute("sandbox", "allow-forms allow-scripts allow-same-origin");
  iframe.style.opacity = "0";
  iframe.style.transition = "opacity 0.25s ease";
  const params = new URLSearchParams({
    "entry.288305631": url,
    t: Date.now(),
  });
  iframe.src = `${FORM_BASE}&${params.toString()}`;
  iframe.onload = () => {
    loading.style.opacity = "0";
    setTimeout(() => {
      loading.style.display = "none";
    }, 150);
    requestAnimationFrame(() => {
      iframe.style.opacity = "1";
    });
  };
  dialog.appendChild(iframe);
}

function createButton(h2) {
  if (!h2?.id) return null;
  if (h2.dataset.feedbackInjected) return null;
  const pageUrl = window.location.origin + window.location.pathname;
  const fullUrl = `${pageUrl}#${h2.id}`;
  const btn = document.createElement("span");
  btn.className = "feedback-btn";
  btn.setAttribute("role", "button");
  btn.setAttribute("aria-label", "反馈");
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
</svg>`;
  btn.onclick = () => {
    openModal({
      url: fullUrl,
    });
  };
  h2.dataset.feedbackInjected = "true";
  return btn;
}

function inject() {
  const headers = document.querySelectorAll(CONFIG.selectors.join(","));
  headers.forEach((h2) => {
    if (h2.querySelector(".feedback-btn")) return;
    const btn = createButton(h2);
    if (!btn) return;
    h2.appendChild(btn);
  });
}

function createObserver() {
  let timer = null;
  const observer = new MutationObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(inject, CONFIG.debounce);
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
  return observer;
}

export default (options = {}) => {
  if (typeof window === "undefined") return;
  Object.assign(CONFIG, options);
  setTimeout(inject, 100);
  createObserver();
};
