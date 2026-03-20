import { postcssIsolateStyles } from "vitepress";

export default {
  plugins: [
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/, /custom\.css/], // 默认为 [/vp-doc\.css/, /base\.css/]；Flowbite vue 与 base.css 冲突
    }),
  ],
};
