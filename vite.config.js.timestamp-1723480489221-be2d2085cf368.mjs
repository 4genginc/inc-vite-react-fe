// vite.config.js
import { defineConfig } from "file:///Users/rfvitis/temp/4g/inc-vite-react-js-fe/node_modules/vite/dist/node/index.js";
import react from "file:///Users/rfvitis/temp/4g/inc-vite-react-js-fe/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createStyleImportPlugin } from "file:///Users/rfvitis/temp/4g/inc-vite-react-js-fe/node_modules/vite-plugin-style-import/dist/index.mjs";

// src/styles/theme-overrides.js
var theme_overrides_default = {
  // General
  "@primary-color": "#1890ff",
  "@link-color": "#1890ff",
  "@success-color": "#52c41a",
  "@warning-color": "#faad14",
  "@error-color": "#f5222d",
  // Text
  "@font-size-base": "14px",
  "@heading-color": "rgba(0, 0, 0, 0.85)",
  "@text-color": "rgba(0, 0, 0, 0.65)",
  "@text-color-secondary": "rgba(0, 0, 0, 0.45)",
  // Border
  "@border-radius-base": "2px",
  "@border-color-base": "#d9d9d9",
  // Effect
  "@disabled-color": "rgba(0, 0, 0, 0.25)",
  // Shadow
  "@box-shadow-base": "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)"
};

// src/styles/inc-site-theme.js
var inc_site_theme_default = {
  // Backgrounds
  "@header__bg": "#FEAD2A",
  "@header__bg--dark": "#263E47",
  "@footer__bg": "#6A0C49",
  "@body__bg": "#EEEDD9",
  "@body__bg--green": "#9FB222",
  "@body__bg--blue": "#096A70",
  "@body__bg--peach": "#FCDFAA",
  "@body__bg--concrete": "#F2F2F2",
  "@body__bg--white": "#FAF9F8",
  "@body__bg--yellow": "#F2CE60",
  "@badge-card__bg--white": " #EDEED7",
  "@classroom__feedback__bg--clay": "#8D8950",
  "@il__bg--Allsports": "#1E6A70",
  "@il__bottom__leftCircle--cream-can": "#F2C35F",
  "@il__top__bottomContent--white": "#FFFFFF",
  "@iac__section__bg--snow": "#FBFBFB",
  "@badge-capital__bg--pattens-blue": "#DAF4FF",
  "@instuctor-calendar-style__bg--blue-lagoon": "#006C72",
  "@instructor-calendar-style__bg--white": "#FFFFFF",
  "@instructor-calendar-style__bg--white-smoke": "#F2F2F2",
  "@stat-icon-wrapper__bg--varden": "#FBECD1",
  "@landing-container__bg--blue-stone": "#156A70",
  "@news__bg--white": "#FFFFFF",
  "@pl_na__bg--tarawera": "#263E47",
  "@parent-navbar__bg--white": "#FFFFFF",
  "@student-db__bg--teal": "#008080",
  "@teacher-db__bg--purple": "800080",
  "student-story-card__bg--white": "#FFFFFF",
  "@student-styles__bg--light-cyan": "#E0FFFF",
  "@calendar__bg--cream-can": "#F1C461",
  "@success-class-event__bg--robins-egg-blue": "rgba(0, 202, 183, 0.25)",
  "@warning-class-event__bg--dark-tangerine": "#FAAD14",
  "@error-class-event__bg--salmon": "#FA8072",
  "@ant-picker__bg--varden": "#FBECD1",
  "@ant-menu__bg--supernova": "#FEAE28",
  "@header__bg--light-sea-green": "#21C5B5",
  "@header__bg--white": "#FFFFFF",
  "@login__bg--blue-lagoon": "#006C72",
  "@login__bg--dew": "#F4F8F5",
  "@login__bg--white": "#FFFFFF",
  "@reg-content__bg--white": "#FFFFFF",
  "@reg-content__bg--blue-lagoon": "#006C72",
  "@reg-conent__bg--dew": "#F4F8F5",
  "@registration-progress__bg--light-sea-green": "#21C5b5",
  "@registration-progress__bg--white": "#FFFFFF",
  // Buttons
  "@btn__bg--blue": "#21C5B5",
  "@btn__bg--white": "#EEEDD9",
  "@btn__bg--red": "#EC2C4E",
  "@btn__bg--maroon": "#6A0C49",
  "@btn__bg--yellow": "#F2CE60",
  "@btn__bg--orange": "#F66721",
  "@btn__bg__hover--golden-poppy": "#FDC312",
  "@btn__bg__peach": "#FCDFAA",
  "@insturctor-calendar-style__btn__bg--turquoise": "#34D4C5",
  "@btn__bg--safety-orange": "#F26602",
  "@landing__btn__bg--sunglow": "#FBC740",
  "@navbar__btn__bg--white": "#EDEED7",
  "@navbar__btn__bg--blue-lagoon": "#006C72",
  "@news__btn__bg--licorice": "#2E3646",
  "@news__btn__bg--black": "#000000",
  "@pl__na__top__btn__bg--amaranth": "#DF294A",
  "@pl__na__top_-btn_-bg--tyrian-purple": "#5D0B40",
  "@login__btn__bg--blue-lagoon": "#006C72",
  "@reg-content__btn__bg--blue-lagoon": "#006C72",
  // Borders
  "@btn__border-radius": "6px",
  // Fonts
  "@text__font-family": "'Montserrat', sans-serif",
  "@text__font-family--header": "'Staatliches', cursive",
  "@text__font-size--h1": "2.375rem",
  "@text__font-size--h2": "1.875rem",
  "@text__font-size--h3": "1.5rem",
  "@text__font-size--h4": "1.25rem",
  "@text__font-size--h5": "1rem",
  "@text__font-size--body": "0.875rem",
  "@text__font-size--footer": "0.75rem",
  "@text__line-height--h1": "2.875rem",
  "@text__line-height--h2": "2.5rem",
  "@text__line-height--h3": "2rem",
  "@text__line-height--h4": "1.75rem",
  "@text__line-height--h5": "1.5rem",
  "@text__line-height--body": "1.375rem",
  "@text__line-height--footer": "1.25rem",
  "@text__color--maroon": "#3B0E2B",
  "@text__color--white": "#FFFFFF",
  "@text__color--black": "#232420",
  "@il__text__color--fiord": "#485b63",
  "@submitbtn__text__color--pumpkin": "#F27712",
  "@close-modal-btn__text__color--red": "#FF0000",
  "@banner-content__text__color--robins-egg-blue": "#00CAB7",
  "@errorMessage": "#F5222D",
  "@text__color--yellow": "#FFFF00",
  "@text__color--green": "#008000",
  "@landing__text__color--black": "#000000",
  "@landing__text__color--white": "#FFFFFF",
  "@navbar__text__color--white": "#EDEED7",
  "@navbar__text__color--blue-lagoon": "#006C72",
  "@news__text__color--white": "#FFFFFF",
  "@pl__na__text__color--Tarawera": "#263D47",
  "@pl__na__text__color--black": "#000000",
  "@top-right__text__color--grey": "#808080",
  "@text__color--pumpkin": "#F27712",
  "@calendar-modal__text__color--black": "rgba(0, 0, 0, 0.65)",
  "@ant-menu__text__color--orange": "#FFA500",
  "@ant-menu__text__color--zambezi": "#595959",
  "@ant-menu__text__color--grey": "#808080",
  "@ant-menu__text__color--red": "#ff0000",
  "@ant-menu__text__color--tyrian-purple": "rgba(116, 0, 73, 0.8)",
  "@header__text__color--teal": "#008080",
  "@login__text__color--grey": "#808080",
  "@login__text__color--blue-lagoon": "#006C72",
  "@login__text__color--white": "#FFFFFF",
  "@reg-content__text__color--blue-lagoon": "#006C72",
  "@reg-content__text__color--orange": "#FFAD00",
  "@reg-content__text__color--safety-orange": "#FF5C00",
  "@reg-content__text__color--amaranth": "#EC2C4E",
  "@reg-content__text__color--tyrian-purple": "#740049",
  "@reg-conent__text__color--blue-lagoon": "#006C72",
  "@reg-content__text__color--white": "#FFFFFF",
  "@reg-content__text__color--light-grey": "#D3D3D3",
  "@registration-progress__text__color--light-sea-green": "#21C5b5",
  // Focus Effects
  "@input__border--focus": "1px solid #21C5B5",
  "@input__box-shadow--focus": "0px 0px 10px 1px #21C5B5",
  "@input__transition--focus": "0.1s"
};

// vite.config.js
import vitePluginImp from "file:///Users/rfvitis/temp/4g/inc-vite-react-js-fe/node_modules/vite-plugin-imp/dist/index.mjs";
var themeVariables = { ...theme_overrides_default, ...inc_site_theme_default };
var vite_config_default = defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style/index`
        }
      ]
    }),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style(name) {
            return `antd/es/${name}/style/index.less`;
          }
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables
      }
    }
  },
  define: {
    "process.env": process.env
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__test__/setupTests.jsx"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3N0eWxlcy90aGVtZS1vdmVycmlkZXMuanMiLCAic3JjL3N0eWxlcy9pbmMtc2l0ZS10aGVtZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9yZnZpdGlzL3RlbXAvNGcvaW5jLXZpdGUtcmVhY3QtanMtZmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yZnZpdGlzL3RlbXAvNGcvaW5jLXZpdGUtcmVhY3QtanMtZmUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Jmdml0aXMvdGVtcC80Zy9pbmMtdml0ZS1yZWFjdC1qcy1mZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3R5bGUtaW1wb3J0JztcbmltcG9ydCB0aGVtZU92ZXJyaWRlcyBmcm9tICcuL3NyYy9zdHlsZXMvdGhlbWUtb3ZlcnJpZGVzLmpzJztcbmltcG9ydCBpbmNTaXRlVGhlbWUgZnJvbSAnLi9zcmMvc3R5bGVzL2luYy1zaXRlLXRoZW1lLmpzJztcbmltcG9ydCB2aXRlUGx1Z2luSW1wIGZyb20gJ3ZpdGUtcGx1Z2luLWltcCc7XG5cbi8vIE1lcmdlIHRoZSB2YXJpYWJsZXMgZnJvbSB0aGVtZS1vdmVycmlkZXMgYW5kIGluYy1zaXRlLXRoZW1lXG5jb25zdCB0aGVtZVZhcmlhYmxlcyA9IHsgLi4udGhlbWVPdmVycmlkZXMsIC4uLmluY1NpdGVUaGVtZSB9O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBjcmVhdGVTdHlsZUltcG9ydFBsdWdpbih7XG4gICAgICBsaWJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsaWJyYXJ5TmFtZTogJ2FudGQnLFxuICAgICAgICAgIGVzTW9kdWxlOiB0cnVlLFxuICAgICAgICAgIHJlc29sdmVTdHlsZTogKG5hbWUpID0+IGBhbnRkL2VzLyR7bmFtZX0vc3R5bGUvaW5kZXhgLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgICB2aXRlUGx1Z2luSW1wKHtcbiAgICAgIGxpYkxpc3Q6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpYk5hbWU6ICdhbnRkJyxcbiAgICAgICAgICBzdHlsZShuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYGFudGQvZXMvJHtuYW1lfS9zdHlsZS9pbmRleC5sZXNzYDtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgXSxcbiAgY3NzOiB7XG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xuICAgICAgbGVzczoge1xuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgbW9kaWZ5VmFyczogdGhlbWVWYXJpYWJsZXMsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGRlZmluZToge1xuICAgICdwcm9jZXNzLmVudic6IHByb2Nlc3MuZW52LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBzZXR1cEZpbGVzOiAnLi9zcmMvX190ZXN0X18vc2V0dXBUZXN0cy5qc3gnLFxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9yZnZpdGlzL3RlbXAvNGcvaW5jLXZpdGUtcmVhY3QtanMtZmUvc3JjL3N0eWxlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Jmdml0aXMvdGVtcC80Zy9pbmMtdml0ZS1yZWFjdC1qcy1mZS9zcmMvc3R5bGVzL3RoZW1lLW92ZXJyaWRlcy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmZ2aXRpcy90ZW1wLzRnL2luYy12aXRlLXJlYWN0LWpzLWZlL3NyYy9zdHlsZXMvdGhlbWUtb3ZlcnJpZGVzLmpzXCI7ZXhwb3J0IGRlZmF1bHQge1xuICAvLyBHZW5lcmFsXG4gICdAcHJpbWFyeS1jb2xvcic6ICcjMTg5MGZmJyxcbiAgJ0BsaW5rLWNvbG9yJzogJyMxODkwZmYnLFxuICAnQHN1Y2Nlc3MtY29sb3InOiAnIzUyYzQxYScsXG4gICdAd2FybmluZy1jb2xvcic6ICcjZmFhZDE0JyxcbiAgJ0BlcnJvci1jb2xvcic6ICcjZjUyMjJkJyxcbiAgLy8gVGV4dFxuICAnQGZvbnQtc2l6ZS1iYXNlJzogJzE0cHgnLFxuICAnQGhlYWRpbmctY29sb3InOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXG4gICdAdGV4dC1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuNjUpJyxcbiAgJ0B0ZXh0LWNvbG9yLXNlY29uZGFyeSc6ICdyZ2JhKDAsIDAsIDAsIDAuNDUpJyxcbiAgLy8gQm9yZGVyXG4gICdAYm9yZGVyLXJhZGl1cy1iYXNlJzogJzJweCcsXG4gICdAYm9yZGVyLWNvbG9yLWJhc2UnOiAnI2Q5ZDlkOScsXG4gIC8vIEVmZmVjdFxuICAnQGRpc2FibGVkLWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC4yNSknLFxuICAvLyBTaGFkb3dcbiAgJ0Bib3gtc2hhZG93LWJhc2UnOlxuICAgICcwIDNweCA2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDZweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSwgMCA5cHggMjhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KScsXG59O1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmZ2aXRpcy90ZW1wLzRnL2luYy12aXRlLXJlYWN0LWpzLWZlL3NyYy9zdHlsZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yZnZpdGlzL3RlbXAvNGcvaW5jLXZpdGUtcmVhY3QtanMtZmUvc3JjL3N0eWxlcy9pbmMtc2l0ZS10aGVtZS5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmZ2aXRpcy90ZW1wLzRnL2luYy12aXRlLXJlYWN0LWpzLWZlL3NyYy9zdHlsZXMvaW5jLXNpdGUtdGhlbWUuanNcIjtleHBvcnQgZGVmYXVsdCB7XG4gIC8vIEJhY2tncm91bmRzXG4gICdAaGVhZGVyX19iZyc6ICcjRkVBRDJBJyxcbiAgJ0BoZWFkZXJfX2JnLS1kYXJrJzogJyMyNjNFNDcnLFxuICAnQGZvb3Rlcl9fYmcnOiAnIzZBMEM0OScsXG5cbiAgJ0Bib2R5X19iZyc6ICcjRUVFREQ5JyxcbiAgJ0Bib2R5X19iZy0tZ3JlZW4nOiAnIzlGQjIyMicsXG4gICdAYm9keV9fYmctLWJsdWUnOiAnIzA5NkE3MCcsXG4gICdAYm9keV9fYmctLXBlYWNoJzogJyNGQ0RGQUEnLFxuICAnQGJvZHlfX2JnLS1jb25jcmV0ZSc6ICcjRjJGMkYyJyxcbiAgJ0Bib2R5X19iZy0td2hpdGUnOiAnI0ZBRjlGOCcsXG4gICdAYm9keV9fYmctLXllbGxvdyc6ICcjRjJDRTYwJyxcbiAgJ0BiYWRnZS1jYXJkX19iZy0td2hpdGUnOiAnICNFREVFRDcnLFxuICAnQGNsYXNzcm9vbV9fZmVlZGJhY2tfX2JnLS1jbGF5JzogJyM4RDg5NTAnLFxuICAnQGlsX19iZy0tQWxsc3BvcnRzJzogJyMxRTZBNzAnLFxuICAnQGlsX19ib3R0b21fX2xlZnRDaXJjbGUtLWNyZWFtLWNhbic6ICcjRjJDMzVGJyxcbiAgJ0BpbF9fdG9wX19ib3R0b21Db250ZW50LS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgJ0BpYWNfX3NlY3Rpb25fX2JnLS1zbm93JzogJyNGQkZCRkInLFxuICAnQGJhZGdlLWNhcGl0YWxfX2JnLS1wYXR0ZW5zLWJsdWUnOiAnI0RBRjRGRicsXG4gICdAaW5zdHVjdG9yLWNhbGVuZGFyLXN0eWxlX19iZy0tYmx1ZS1sYWdvb24nOiAnIzAwNkM3MicsXG4gICdAaW5zdHJ1Y3Rvci1jYWxlbmRhci1zdHlsZV9fYmctLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQGluc3RydWN0b3ItY2FsZW5kYXItc3R5bGVfX2JnLS13aGl0ZS1zbW9rZSc6ICcjRjJGMkYyJyxcbiAgJ0BzdGF0LWljb24td3JhcHBlcl9fYmctLXZhcmRlbic6ICcjRkJFQ0QxJyxcbiAgJ0BsYW5kaW5nLWNvbnRhaW5lcl9fYmctLWJsdWUtc3RvbmUnOiAnIzE1NkE3MCcsXG4gICdAbmV3c19fYmctLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQHBsX25hX19iZy0tdGFyYXdlcmEnOiAnIzI2M0U0NycsXG4gICdAcGFyZW50LW5hdmJhcl9fYmctLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQHN0dWRlbnQtZGJfX2JnLS10ZWFsJzogJyMwMDgwODAnLFxuICAnQHRlYWNoZXItZGJfX2JnLS1wdXJwbGUnOiAnODAwMDgwJyxcbiAgJ3N0dWRlbnQtc3RvcnktY2FyZF9fYmctLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQHN0dWRlbnQtc3R5bGVzX19iZy0tbGlnaHQtY3lhbic6ICcjRTBGRkZGJyxcbiAgJ0BjYWxlbmRhcl9fYmctLWNyZWFtLWNhbic6ICcjRjFDNDYxJyxcbiAgJ0BzdWNjZXNzLWNsYXNzLWV2ZW50X19iZy0tcm9iaW5zLWVnZy1ibHVlJzogJ3JnYmEoMCwgMjAyLCAxODMsIDAuMjUpJyxcbiAgJ0B3YXJuaW5nLWNsYXNzLWV2ZW50X19iZy0tZGFyay10YW5nZXJpbmUnOiAnI0ZBQUQxNCcsXG4gICdAZXJyb3ItY2xhc3MtZXZlbnRfX2JnLS1zYWxtb24nOiAnI0ZBODA3MicsXG4gICdAYW50LXBpY2tlcl9fYmctLXZhcmRlbic6ICcjRkJFQ0QxJyxcbiAgJ0BhbnQtbWVudV9fYmctLXN1cGVybm92YSc6ICcjRkVBRTI4JyxcbiAgJ0BoZWFkZXJfX2JnLS1saWdodC1zZWEtZ3JlZW4nOiAnIzIxQzVCNScsXG4gICdAaGVhZGVyX19iZy0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAbG9naW5fX2JnLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0Bsb2dpbl9fYmctLWRldyc6ICcjRjRGOEY1JyxcbiAgJ0Bsb2dpbl9fYmctLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQHJlZy1jb250ZW50X19iZy0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAcmVnLWNvbnRlbnRfX2JnLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0ByZWctY29uZW50X19iZy0tZGV3JzogJyNGNEY4RjUnLFxuICAnQHJlZ2lzdHJhdGlvbi1wcm9ncmVzc19fYmctLWxpZ2h0LXNlYS1ncmVlbic6ICcjMjFDNWI1JyxcbiAgJ0ByZWdpc3RyYXRpb24tcHJvZ3Jlc3NfX2JnLS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgLy8gQnV0dG9uc1xuICAnQGJ0bl9fYmctLWJsdWUnOiAnIzIxQzVCNScsXG4gICdAYnRuX19iZy0td2hpdGUnOiAnI0VFRUREOScsXG4gICdAYnRuX19iZy0tcmVkJzogJyNFQzJDNEUnLFxuICAnQGJ0bl9fYmctLW1hcm9vbic6ICcjNkEwQzQ5JyxcbiAgJ0BidG5fX2JnLS15ZWxsb3cnOiAnI0YyQ0U2MCcsXG4gICdAYnRuX19iZy0tb3JhbmdlJzogJyNGNjY3MjEnLFxuICAnQGJ0bl9fYmdfX2hvdmVyLS1nb2xkZW4tcG9wcHknOiAnI0ZEQzMxMicsXG4gICdAYnRuX19iZ19fcGVhY2gnOiAnI0ZDREZBQScsXG4gICdAaW5zdHVyY3Rvci1jYWxlbmRhci1zdHlsZV9fYnRuX19iZy0tdHVycXVvaXNlJzogJyMzNEQ0QzUnLFxuICAnQGJ0bl9fYmctLXNhZmV0eS1vcmFuZ2UnOiAnI0YyNjYwMicsXG4gICdAbGFuZGluZ19fYnRuX19iZy0tc3VuZ2xvdyc6ICcjRkJDNzQwJyxcbiAgJ0BuYXZiYXJfX2J0bl9fYmctLXdoaXRlJzogJyNFREVFRDcnLFxuICAnQG5hdmJhcl9fYnRuX19iZy0tYmx1ZS1sYWdvb24nOiAnIzAwNkM3MicsXG4gICdAbmV3c19fYnRuX19iZy0tbGljb3JpY2UnOiAnIzJFMzY0NicsXG4gICdAbmV3c19fYnRuX19iZy0tYmxhY2snOiAnIzAwMDAwMCcsXG4gICdAcGxfX25hX190b3BfX2J0bl9fYmctLWFtYXJhbnRoJzogJyNERjI5NEEnLFxuICAnQHBsX19uYV9fdG9wXy1idG5fLWJnLS10eXJpYW4tcHVycGxlJzogJyM1RDBCNDAnLFxuICAnQGxvZ2luX19idG5fX2JnLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0ByZWctY29udGVudF9fYnRuX19iZy0tYmx1ZS1sYWdvb24nOiAnIzAwNkM3MicsXG4gIC8vIEJvcmRlcnNcbiAgJ0BidG5fX2JvcmRlci1yYWRpdXMnOiAnNnB4JyxcbiAgLy8gRm9udHNcbiAgJ0B0ZXh0X19mb250LWZhbWlseSc6IFwiJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmXCIsXG4gICdAdGV4dF9fZm9udC1mYW1pbHktLWhlYWRlcic6IFwiJ1N0YWF0bGljaGVzJywgY3Vyc2l2ZVwiLFxuXG4gICdAdGV4dF9fZm9udC1zaXplLS1oMSc6ICcyLjM3NXJlbScsXG4gICdAdGV4dF9fZm9udC1zaXplLS1oMic6ICcxLjg3NXJlbScsXG4gICdAdGV4dF9fZm9udC1zaXplLS1oMyc6ICcxLjVyZW0nLFxuICAnQHRleHRfX2ZvbnQtc2l6ZS0taDQnOiAnMS4yNXJlbScsXG4gICdAdGV4dF9fZm9udC1zaXplLS1oNSc6ICcxcmVtJyxcbiAgJ0B0ZXh0X19mb250LXNpemUtLWJvZHknOiAnMC44NzVyZW0nLFxuICAnQHRleHRfX2ZvbnQtc2l6ZS0tZm9vdGVyJzogJzAuNzVyZW0nLFxuXG4gICdAdGV4dF9fbGluZS1oZWlnaHQtLWgxJzogJzIuODc1cmVtJyxcbiAgJ0B0ZXh0X19saW5lLWhlaWdodC0taDInOiAnMi41cmVtJyxcbiAgJ0B0ZXh0X19saW5lLWhlaWdodC0taDMnOiAnMnJlbScsXG4gICdAdGV4dF9fbGluZS1oZWlnaHQtLWg0JzogJzEuNzVyZW0nLFxuICAnQHRleHRfX2xpbmUtaGVpZ2h0LS1oNSc6ICcxLjVyZW0nLFxuICAnQHRleHRfX2xpbmUtaGVpZ2h0LS1ib2R5JzogJzEuMzc1cmVtJyxcbiAgJ0B0ZXh0X19saW5lLWhlaWdodC0tZm9vdGVyJzogJzEuMjVyZW0nLFxuXG4gICdAdGV4dF9fY29sb3ItLW1hcm9vbic6ICcjM0IwRTJCJyxcbiAgJ0B0ZXh0X19jb2xvci0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAdGV4dF9fY29sb3ItLWJsYWNrJzogJyMyMzI0MjAnLFxuICAnQGlsX190ZXh0X19jb2xvci0tZmlvcmQnOiAnIzQ4NWI2MycsXG4gICdAc3VibWl0YnRuX190ZXh0X19jb2xvci0tcHVtcGtpbic6ICcjRjI3NzEyJyxcbiAgJ0BjbG9zZS1tb2RhbC1idG5fX3RleHRfX2NvbG9yLS1yZWQnOiAnI0ZGMDAwMCcsXG4gICdAYmFubmVyLWNvbnRlbnRfX3RleHRfX2NvbG9yLS1yb2JpbnMtZWdnLWJsdWUnOiAnIzAwQ0FCNycsXG4gICdAZXJyb3JNZXNzYWdlJzogJyNGNTIyMkQnLFxuICAnQHRleHRfX2NvbG9yLS15ZWxsb3cnOiAnI0ZGRkYwMCcsXG4gICdAdGV4dF9fY29sb3ItLWdyZWVuJzogJyMwMDgwMDAnLFxuICAnQGxhbmRpbmdfX3RleHRfX2NvbG9yLS1ibGFjayc6ICcjMDAwMDAwJyxcbiAgJ0BsYW5kaW5nX190ZXh0X19jb2xvci0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAbmF2YmFyX190ZXh0X19jb2xvci0td2hpdGUnOiAnI0VERUVENycsXG4gICdAbmF2YmFyX190ZXh0X19jb2xvci0tYmx1ZS1sYWdvb24nOiAnIzAwNkM3MicsXG4gICdAbmV3c19fdGV4dF9fY29sb3ItLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQHBsX19uYV9fdGV4dF9fY29sb3ItLVRhcmF3ZXJhJzogJyMyNjNENDcnLFxuICAnQHBsX19uYV9fdGV4dF9fY29sb3ItLWJsYWNrJzogJyMwMDAwMDAnLFxuICAnQHRvcC1yaWdodF9fdGV4dF9fY29sb3ItLWdyZXknOiAnIzgwODA4MCcsXG4gICdAdGV4dF9fY29sb3ItLXB1bXBraW4nOiAnI0YyNzcxMicsXG4gICdAY2FsZW5kYXItbW9kYWxfX3RleHRfX2NvbG9yLS1ibGFjayc6ICdyZ2JhKDAsIDAsIDAsIDAuNjUpJyxcbiAgJ0BhbnQtbWVudV9fdGV4dF9fY29sb3ItLW9yYW5nZSc6ICcjRkZBNTAwJyxcbiAgJ0BhbnQtbWVudV9fdGV4dF9fY29sb3ItLXphbWJlemknOiAnIzU5NTk1OScsXG4gICdAYW50LW1lbnVfX3RleHRfX2NvbG9yLS1ncmV5JzogJyM4MDgwODAnLFxuICAnQGFudC1tZW51X190ZXh0X19jb2xvci0tcmVkJzogJyNmZjAwMDAnLFxuICAnQGFudC1tZW51X190ZXh0X19jb2xvci0tdHlyaWFuLXB1cnBsZSc6ICdyZ2JhKDExNiwgMCwgNzMsIDAuOCknLFxuICAnQGhlYWRlcl9fdGV4dF9fY29sb3ItLXRlYWwnOiAnIzAwODA4MCcsXG4gICdAbG9naW5fX3RleHRfX2NvbG9yLS1ncmV5JzogJyM4MDgwODAnLFxuICAnQGxvZ2luX190ZXh0X19jb2xvci0tYmx1ZS1sYWdvb24nOiAnIzAwNkM3MicsXG4gICdAbG9naW5fX3RleHRfX2NvbG9yLS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgJ0ByZWctY29udGVudF9fdGV4dF9fY29sb3ItLWJsdWUtbGFnb29uJzogJyMwMDZDNzInLFxuICAnQHJlZy1jb250ZW50X190ZXh0X19jb2xvci0tb3JhbmdlJzogJyNGRkFEMDAnLFxuICAnQHJlZy1jb250ZW50X190ZXh0X19jb2xvci0tc2FmZXR5LW9yYW5nZSc6ICcjRkY1QzAwJyxcbiAgJ0ByZWctY29udGVudF9fdGV4dF9fY29sb3ItLWFtYXJhbnRoJzogJyNFQzJDNEUnLFxuICAnQHJlZy1jb250ZW50X190ZXh0X19jb2xvci0tdHlyaWFuLXB1cnBsZSc6ICcjNzQwMDQ5JyxcbiAgJ0ByZWctY29uZW50X190ZXh0X19jb2xvci0tYmx1ZS1sYWdvb24nOiAnIzAwNkM3MicsXG4gICdAcmVnLWNvbnRlbnRfX3RleHRfX2NvbG9yLS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgJ0ByZWctY29udGVudF9fdGV4dF9fY29sb3ItLWxpZ2h0LWdyZXknOiAnI0QzRDNEMycsXG4gICdAcmVnaXN0cmF0aW9uLXByb2dyZXNzX190ZXh0X19jb2xvci0tbGlnaHQtc2VhLWdyZWVuJzogJyMyMUM1YjUnLFxuICAvLyBGb2N1cyBFZmZlY3RzXG4gICdAaW5wdXRfX2JvcmRlci0tZm9jdXMnOiAnMXB4IHNvbGlkICMyMUM1QjUnLFxuICAnQGlucHV0X19ib3gtc2hhZG93LS1mb2N1cyc6ICcwcHggMHB4IDEwcHggMXB4ICMyMUM1QjUnLFxuICAnQGlucHV0X190cmFuc2l0aW9uLS1mb2N1cyc6ICcwLjFzJyxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVMsb0JBQW9CO0FBQ2hWLE9BQU8sV0FBVztBQUNsQixTQUFTLCtCQUErQjs7O0FDRm9ULElBQU8sMEJBQVE7QUFBQTtBQUFBLEVBRXpXLGtCQUFrQjtBQUFBLEVBQ2xCLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBO0FBQUEsRUFFaEIsbUJBQW1CO0FBQUEsRUFDbkIsa0JBQWtCO0FBQUEsRUFDbEIsZUFBZTtBQUFBLEVBQ2YseUJBQXlCO0FBQUE7QUFBQSxFQUV6Qix1QkFBdUI7QUFBQSxFQUN2QixzQkFBc0I7QUFBQTtBQUFBLEVBRXRCLG1CQUFtQjtBQUFBO0FBQUEsRUFFbkIsb0JBQ0U7QUFDSjs7O0FDcEIwVixJQUFPLHlCQUFRO0FBQUE7QUFBQSxFQUV2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QSxFQUN6Qix1Q0FBdUM7QUFBQSxFQUN2QyxrQ0FBa0M7QUFBQSxFQUNsQyxtQ0FBbUM7QUFBQSxFQUNuQyxnQ0FBZ0M7QUFBQSxFQUNoQywrQkFBK0I7QUFBQSxFQUMvQix5Q0FBeUM7QUFBQSxFQUN6Qyw4QkFBOEI7QUFBQSxFQUM5Qiw2QkFBNkI7QUFBQSxFQUM3QixvQ0FBb0M7QUFBQSxFQUNwQyw4QkFBOEI7QUFBQSxFQUM5QiwwQ0FBMEM7QUFBQSxFQUMxQyxxQ0FBcUM7QUFBQSxFQUNyQyw0Q0FBNEM7QUFBQSxFQUM1Qyx1Q0FBdUM7QUFBQSxFQUN2Qyw0Q0FBNEM7QUFBQSxFQUM1Qyx5Q0FBeUM7QUFBQSxFQUN6QyxvQ0FBb0M7QUFBQSxFQUNwQyx5Q0FBeUM7QUFBQSxFQUN6Qyx3REFBd0Q7QUFBQTtBQUFBLEVBRXhELHlCQUF5QjtBQUFBLEVBQ3pCLDZCQUE2QjtBQUFBLEVBQzdCLDZCQUE2QjtBQUMvQjs7O0FGL0hBLE9BQU8sbUJBQW1CO0FBRzFCLElBQU0saUJBQWlCLEVBQUUsR0FBRyx5QkFBZ0IsR0FBRyx1QkFBYTtBQUU1RCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTix3QkFBd0I7QUFBQSxNQUN0QixNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsY0FBYyxDQUFDLFNBQVMsV0FBVyxJQUFJO0FBQUEsUUFDekM7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsU0FBUztBQUFBLFVBQ1QsTUFBTSxNQUFNO0FBQ1YsbUJBQU8sV0FBVyxJQUFJO0FBQUEsVUFDeEI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVk7QUFBQSxNQUNkO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLGVBQWUsUUFBUTtBQUFBLEVBQ3pCO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsRUFDZDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
