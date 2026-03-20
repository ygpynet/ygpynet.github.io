import mediumZoom from "medium-zoom";

export default () => {
  mediumZoom(".vp-doc p img, .vp-doc figure img", {
    background: "var(--vp-c-bg)",
  });
};
