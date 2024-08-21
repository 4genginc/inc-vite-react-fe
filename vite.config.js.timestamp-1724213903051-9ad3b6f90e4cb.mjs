// vite.config.js
import { defineConfig } from "file:///Users/rfvitis/temp/inc-vite-react-js-fe/node_modules/vite/dist/node/index.js";
import react from "file:///Users/rfvitis/temp/inc-vite-react-js-fe/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { createStyleImportPlugin } from "file:///Users/rfvitis/temp/inc-vite-react-js-fe/node_modules/vite-plugin-style-import/dist/index.mjs";

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3N0eWxlcy90aGVtZS1vdmVycmlkZXMuanMiLCAic3JjL3N0eWxlcy9pbmMtc2l0ZS10aGVtZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9yZnZpdGlzL3RlbXAvaW5jLXZpdGUtcmVhY3QtanMtZmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yZnZpdGlzL3RlbXAvaW5jLXZpdGUtcmVhY3QtanMtZmUvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3Jmdml0aXMvdGVtcC9pbmMtdml0ZS1yZWFjdC1qcy1mZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tc3R5bGUtaW1wb3J0JztcbmltcG9ydCB0aGVtZU92ZXJyaWRlcyBmcm9tICcuL3NyYy9zdHlsZXMvdGhlbWUtb3ZlcnJpZGVzLmpzJztcbmltcG9ydCBpbmNTaXRlVGhlbWUgZnJvbSAnLi9zcmMvc3R5bGVzL2luYy1zaXRlLXRoZW1lLmpzJztcblxuLy8gTWVyZ2UgdGhlIHZhcmlhYmxlcyBmcm9tIHRoZW1lLW92ZXJyaWRlcyBhbmQgaW5jLXNpdGUtdGhlbWVcbmNvbnN0IHRoZW1lVmFyaWFibGVzID0geyAuLi50aGVtZU92ZXJyaWRlcywgLi4uaW5jU2l0ZVRoZW1lIH07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luKHtcbiAgICAgIGxpYnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpYnJhcnlOYW1lOiAnYW50ZCcsXG4gICAgICAgICAgZXNNb2R1bGU6IHRydWUsXG4gICAgICAgICAgcmVzb2x2ZVN0eWxlOiAobmFtZSkgPT4gYGFudGQvZXMvJHtuYW1lfS9zdHlsZS9pbmRleGAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICBtb2RpZnlWYXJzOiB0aGVtZVZhcmlhYmxlcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy9fX3Rlc3RfXy9zZXR1cFRlc3RzLmpzeCcsXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Jmdml0aXMvdGVtcC9pbmMtdml0ZS1yZWFjdC1qcy1mZS9zcmMvc3R5bGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcmZ2aXRpcy90ZW1wL2luYy12aXRlLXJlYWN0LWpzLWZlL3NyYy9zdHlsZXMvdGhlbWUtb3ZlcnJpZGVzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9yZnZpdGlzL3RlbXAvaW5jLXZpdGUtcmVhY3QtanMtZmUvc3JjL3N0eWxlcy90aGVtZS1vdmVycmlkZXMuanNcIjtleHBvcnQgZGVmYXVsdCB7XG4gIC8vIEdlbmVyYWxcbiAgJ0BwcmltYXJ5LWNvbG9yJzogJyMxODkwZmYnLFxuICAnQGxpbmstY29sb3InOiAnIzE4OTBmZicsXG4gICdAc3VjY2Vzcy1jb2xvcic6ICcjNTJjNDFhJyxcbiAgJ0B3YXJuaW5nLWNvbG9yJzogJyNmYWFkMTQnLFxuICAnQGVycm9yLWNvbG9yJzogJyNmNTIyMmQnLFxuICAvLyBUZXh0XG4gICdAZm9udC1zaXplLWJhc2UnOiAnMTRweCcsXG4gICdAaGVhZGluZy1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgJ0B0ZXh0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC42NSknLFxuICAnQHRleHQtY29sb3Itc2Vjb25kYXJ5JzogJ3JnYmEoMCwgMCwgMCwgMC40NSknLFxuICAvLyBCb3JkZXJcbiAgJ0Bib3JkZXItcmFkaXVzLWJhc2UnOiAnMnB4JyxcbiAgJ0Bib3JkZXItY29sb3ItYmFzZSc6ICcjZDlkOWQ5JyxcbiAgLy8gRWZmZWN0XG4gICdAZGlzYWJsZWQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gIC8vIFNoYWRvd1xuICAnQGJveC1zaGFkb3ctYmFzZSc6XG4gICAgJzAgM3B4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDlweCAyOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9yZnZpdGlzL3RlbXAvaW5jLXZpdGUtcmVhY3QtanMtZmUvc3JjL3N0eWxlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3Jmdml0aXMvdGVtcC9pbmMtdml0ZS1yZWFjdC1qcy1mZS9zcmMvc3R5bGVzL2luYy1zaXRlLXRoZW1lLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9yZnZpdGlzL3RlbXAvaW5jLXZpdGUtcmVhY3QtanMtZmUvc3JjL3N0eWxlcy9pbmMtc2l0ZS10aGVtZS5qc1wiO2V4cG9ydCBkZWZhdWx0IHtcbiAgLy8gQmFja2dyb3VuZHNcbiAgJ0BoZWFkZXJfX2JnJzogJyNGRUFEMkEnLFxuICAnQGhlYWRlcl9fYmctLWRhcmsnOiAnIzI2M0U0NycsXG4gICdAZm9vdGVyX19iZyc6ICcjNkEwQzQ5JyxcblxuICAnQGJvZHlfX2JnJzogJyNFRUVERDknLFxuICAnQGJvZHlfX2JnLS1ncmVlbic6ICcjOUZCMjIyJyxcbiAgJ0Bib2R5X19iZy0tYmx1ZSc6ICcjMDk2QTcwJyxcbiAgJ0Bib2R5X19iZy0tcGVhY2gnOiAnI0ZDREZBQScsXG4gICdAYm9keV9fYmctLWNvbmNyZXRlJzogJyNGMkYyRjInLFxuICAnQGJvZHlfX2JnLS13aGl0ZSc6ICcjRkFGOUY4JyxcbiAgJ0Bib2R5X19iZy0teWVsbG93JzogJyNGMkNFNjAnLFxuICAnQGJhZGdlLWNhcmRfX2JnLS13aGl0ZSc6ICcgI0VERUVENycsXG4gICdAY2xhc3Nyb29tX19mZWVkYmFja19fYmctLWNsYXknOiAnIzhEODk1MCcsXG4gICdAaWxfX2JnLS1BbGxzcG9ydHMnOiAnIzFFNkE3MCcsXG4gICdAaWxfX2JvdHRvbV9fbGVmdENpcmNsZS0tY3JlYW0tY2FuJzogJyNGMkMzNUYnLFxuICAnQGlsX190b3BfX2JvdHRvbUNvbnRlbnQtLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQGlhY19fc2VjdGlvbl9fYmctLXNub3cnOiAnI0ZCRkJGQicsXG4gICdAYmFkZ2UtY2FwaXRhbF9fYmctLXBhdHRlbnMtYmx1ZSc6ICcjREFGNEZGJyxcbiAgJ0BpbnN0dWN0b3ItY2FsZW5kYXItc3R5bGVfX2JnLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0BpbnN0cnVjdG9yLWNhbGVuZGFyLXN0eWxlX19iZy0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAaW5zdHJ1Y3Rvci1jYWxlbmRhci1zdHlsZV9fYmctLXdoaXRlLXNtb2tlJzogJyNGMkYyRjInLFxuICAnQHN0YXQtaWNvbi13cmFwcGVyX19iZy0tdmFyZGVuJzogJyNGQkVDRDEnLFxuICAnQGxhbmRpbmctY29udGFpbmVyX19iZy0tYmx1ZS1zdG9uZSc6ICcjMTU2QTcwJyxcbiAgJ0BuZXdzX19iZy0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAcGxfbmFfX2JnLS10YXJhd2VyYSc6ICcjMjYzRTQ3JyxcbiAgJ0BwYXJlbnQtbmF2YmFyX19iZy0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAc3R1ZGVudC1kYl9fYmctLXRlYWwnOiAnIzAwODA4MCcsXG4gICdAdGVhY2hlci1kYl9fYmctLXB1cnBsZSc6ICc4MDAwODAnLFxuICAnc3R1ZGVudC1zdG9yeS1jYXJkX19iZy0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAc3R1ZGVudC1zdHlsZXNfX2JnLS1saWdodC1jeWFuJzogJyNFMEZGRkYnLFxuICAnQGNhbGVuZGFyX19iZy0tY3JlYW0tY2FuJzogJyNGMUM0NjEnLFxuICAnQHN1Y2Nlc3MtY2xhc3MtZXZlbnRfX2JnLS1yb2JpbnMtZWdnLWJsdWUnOiAncmdiYSgwLCAyMDIsIDE4MywgMC4yNSknLFxuICAnQHdhcm5pbmctY2xhc3MtZXZlbnRfX2JnLS1kYXJrLXRhbmdlcmluZSc6ICcjRkFBRDE0JyxcbiAgJ0BlcnJvci1jbGFzcy1ldmVudF9fYmctLXNhbG1vbic6ICcjRkE4MDcyJyxcbiAgJ0BhbnQtcGlja2VyX19iZy0tdmFyZGVuJzogJyNGQkVDRDEnLFxuICAnQGFudC1tZW51X19iZy0tc3VwZXJub3ZhJzogJyNGRUFFMjgnLFxuICAnQGhlYWRlcl9fYmctLWxpZ2h0LXNlYS1ncmVlbic6ICcjMjFDNUI1JyxcbiAgJ0BoZWFkZXJfX2JnLS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgJ0Bsb2dpbl9fYmctLWJsdWUtbGFnb29uJzogJyMwMDZDNzInLFxuICAnQGxvZ2luX19iZy0tZGV3JzogJyNGNEY4RjUnLFxuICAnQGxvZ2luX19iZy0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAcmVnLWNvbnRlbnRfX2JnLS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgJ0ByZWctY29udGVudF9fYmctLWJsdWUtbGFnb29uJzogJyMwMDZDNzInLFxuICAnQHJlZy1jb25lbnRfX2JnLS1kZXcnOiAnI0Y0RjhGNScsXG4gICdAcmVnaXN0cmF0aW9uLXByb2dyZXNzX19iZy0tbGlnaHQtc2VhLWdyZWVuJzogJyMyMUM1YjUnLFxuICAnQHJlZ2lzdHJhdGlvbi1wcm9ncmVzc19fYmctLXdoaXRlJzogJyNGRkZGRkYnLFxuICAvLyBCdXR0b25zXG4gICdAYnRuX19iZy0tYmx1ZSc6ICcjMjFDNUI1JyxcbiAgJ0BidG5fX2JnLS13aGl0ZSc6ICcjRUVFREQ5JyxcbiAgJ0BidG5fX2JnLS1yZWQnOiAnI0VDMkM0RScsXG4gICdAYnRuX19iZy0tbWFyb29uJzogJyM2QTBDNDknLFxuICAnQGJ0bl9fYmctLXllbGxvdyc6ICcjRjJDRTYwJyxcbiAgJ0BidG5fX2JnLS1vcmFuZ2UnOiAnI0Y2NjcyMScsXG4gICdAYnRuX19iZ19faG92ZXItLWdvbGRlbi1wb3BweSc6ICcjRkRDMzEyJyxcbiAgJ0BidG5fX2JnX19wZWFjaCc6ICcjRkNERkFBJyxcbiAgJ0BpbnN0dXJjdG9yLWNhbGVuZGFyLXN0eWxlX19idG5fX2JnLS10dXJxdW9pc2UnOiAnIzM0RDRDNScsXG4gICdAYnRuX19iZy0tc2FmZXR5LW9yYW5nZSc6ICcjRjI2NjAyJyxcbiAgJ0BsYW5kaW5nX19idG5fX2JnLS1zdW5nbG93JzogJyNGQkM3NDAnLFxuICAnQG5hdmJhcl9fYnRuX19iZy0td2hpdGUnOiAnI0VERUVENycsXG4gICdAbmF2YmFyX19idG5fX2JnLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0BuZXdzX19idG5fX2JnLS1saWNvcmljZSc6ICcjMkUzNjQ2JyxcbiAgJ0BuZXdzX19idG5fX2JnLS1ibGFjayc6ICcjMDAwMDAwJyxcbiAgJ0BwbF9fbmFfX3RvcF9fYnRuX19iZy0tYW1hcmFudGgnOiAnI0RGMjk0QScsXG4gICdAcGxfX25hX190b3BfLWJ0bl8tYmctLXR5cmlhbi1wdXJwbGUnOiAnIzVEMEI0MCcsXG4gICdAbG9naW5fX2J0bl9fYmctLWJsdWUtbGFnb29uJzogJyMwMDZDNzInLFxuICAnQHJlZy1jb250ZW50X19idG5fX2JnLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgLy8gQm9yZGVyc1xuICAnQGJ0bl9fYm9yZGVyLXJhZGl1cyc6ICc2cHgnLFxuICAvLyBGb250c1xuICAnQHRleHRfX2ZvbnQtZmFtaWx5JzogXCInTW9udHNlcnJhdCcsIHNhbnMtc2VyaWZcIixcbiAgJ0B0ZXh0X19mb250LWZhbWlseS0taGVhZGVyJzogXCInU3RhYXRsaWNoZXMnLCBjdXJzaXZlXCIsXG5cbiAgJ0B0ZXh0X19mb250LXNpemUtLWgxJzogJzIuMzc1cmVtJyxcbiAgJ0B0ZXh0X19mb250LXNpemUtLWgyJzogJzEuODc1cmVtJyxcbiAgJ0B0ZXh0X19mb250LXNpemUtLWgzJzogJzEuNXJlbScsXG4gICdAdGV4dF9fZm9udC1zaXplLS1oNCc6ICcxLjI1cmVtJyxcbiAgJ0B0ZXh0X19mb250LXNpemUtLWg1JzogJzFyZW0nLFxuICAnQHRleHRfX2ZvbnQtc2l6ZS0tYm9keSc6ICcwLjg3NXJlbScsXG4gICdAdGV4dF9fZm9udC1zaXplLS1mb290ZXInOiAnMC43NXJlbScsXG5cbiAgJ0B0ZXh0X19saW5lLWhlaWdodC0taDEnOiAnMi44NzVyZW0nLFxuICAnQHRleHRfX2xpbmUtaGVpZ2h0LS1oMic6ICcyLjVyZW0nLFxuICAnQHRleHRfX2xpbmUtaGVpZ2h0LS1oMyc6ICcycmVtJyxcbiAgJ0B0ZXh0X19saW5lLWhlaWdodC0taDQnOiAnMS43NXJlbScsXG4gICdAdGV4dF9fbGluZS1oZWlnaHQtLWg1JzogJzEuNXJlbScsXG4gICdAdGV4dF9fbGluZS1oZWlnaHQtLWJvZHknOiAnMS4zNzVyZW0nLFxuICAnQHRleHRfX2xpbmUtaGVpZ2h0LS1mb290ZXInOiAnMS4yNXJlbScsXG5cbiAgJ0B0ZXh0X19jb2xvci0tbWFyb29uJzogJyMzQjBFMkInLFxuICAnQHRleHRfX2NvbG9yLS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgJ0B0ZXh0X19jb2xvci0tYmxhY2snOiAnIzIzMjQyMCcsXG4gICdAaWxfX3RleHRfX2NvbG9yLS1maW9yZCc6ICcjNDg1YjYzJyxcbiAgJ0BzdWJtaXRidG5fX3RleHRfX2NvbG9yLS1wdW1wa2luJzogJyNGMjc3MTInLFxuICAnQGNsb3NlLW1vZGFsLWJ0bl9fdGV4dF9fY29sb3ItLXJlZCc6ICcjRkYwMDAwJyxcbiAgJ0BiYW5uZXItY29udGVudF9fdGV4dF9fY29sb3ItLXJvYmlucy1lZ2ctYmx1ZSc6ICcjMDBDQUI3JyxcbiAgJ0BlcnJvck1lc3NhZ2UnOiAnI0Y1MjIyRCcsXG4gICdAdGV4dF9fY29sb3ItLXllbGxvdyc6ICcjRkZGRjAwJyxcbiAgJ0B0ZXh0X19jb2xvci0tZ3JlZW4nOiAnIzAwODAwMCcsXG4gICdAbGFuZGluZ19fdGV4dF9fY29sb3ItLWJsYWNrJzogJyMwMDAwMDAnLFxuICAnQGxhbmRpbmdfX3RleHRfX2NvbG9yLS13aGl0ZSc6ICcjRkZGRkZGJyxcbiAgJ0BuYXZiYXJfX3RleHRfX2NvbG9yLS13aGl0ZSc6ICcjRURFRUQ3JyxcbiAgJ0BuYXZiYXJfX3RleHRfX2NvbG9yLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0BuZXdzX190ZXh0X19jb2xvci0td2hpdGUnOiAnI0ZGRkZGRicsXG4gICdAcGxfX25hX190ZXh0X19jb2xvci0tVGFyYXdlcmEnOiAnIzI2M0Q0NycsXG4gICdAcGxfX25hX190ZXh0X19jb2xvci0tYmxhY2snOiAnIzAwMDAwMCcsXG4gICdAdG9wLXJpZ2h0X190ZXh0X19jb2xvci0tZ3JleSc6ICcjODA4MDgwJyxcbiAgJ0B0ZXh0X19jb2xvci0tcHVtcGtpbic6ICcjRjI3NzEyJyxcbiAgJ0BjYWxlbmRhci1tb2RhbF9fdGV4dF9fY29sb3ItLWJsYWNrJzogJ3JnYmEoMCwgMCwgMCwgMC42NSknLFxuICAnQGFudC1tZW51X190ZXh0X19jb2xvci0tb3JhbmdlJzogJyNGRkE1MDAnLFxuICAnQGFudC1tZW51X190ZXh0X19jb2xvci0temFtYmV6aSc6ICcjNTk1OTU5JyxcbiAgJ0BhbnQtbWVudV9fdGV4dF9fY29sb3ItLWdyZXknOiAnIzgwODA4MCcsXG4gICdAYW50LW1lbnVfX3RleHRfX2NvbG9yLS1yZWQnOiAnI2ZmMDAwMCcsXG4gICdAYW50LW1lbnVfX3RleHRfX2NvbG9yLS10eXJpYW4tcHVycGxlJzogJ3JnYmEoMTE2LCAwLCA3MywgMC44KScsXG4gICdAaGVhZGVyX190ZXh0X19jb2xvci0tdGVhbCc6ICcjMDA4MDgwJyxcbiAgJ0Bsb2dpbl9fdGV4dF9fY29sb3ItLWdyZXknOiAnIzgwODA4MCcsXG4gICdAbG9naW5fX3RleHRfX2NvbG9yLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0Bsb2dpbl9fdGV4dF9fY29sb3ItLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQHJlZy1jb250ZW50X190ZXh0X19jb2xvci0tYmx1ZS1sYWdvb24nOiAnIzAwNkM3MicsXG4gICdAcmVnLWNvbnRlbnRfX3RleHRfX2NvbG9yLS1vcmFuZ2UnOiAnI0ZGQUQwMCcsXG4gICdAcmVnLWNvbnRlbnRfX3RleHRfX2NvbG9yLS1zYWZldHktb3JhbmdlJzogJyNGRjVDMDAnLFxuICAnQHJlZy1jb250ZW50X190ZXh0X19jb2xvci0tYW1hcmFudGgnOiAnI0VDMkM0RScsXG4gICdAcmVnLWNvbnRlbnRfX3RleHRfX2NvbG9yLS10eXJpYW4tcHVycGxlJzogJyM3NDAwNDknLFxuICAnQHJlZy1jb25lbnRfX3RleHRfX2NvbG9yLS1ibHVlLWxhZ29vbic6ICcjMDA2QzcyJyxcbiAgJ0ByZWctY29udGVudF9fdGV4dF9fY29sb3ItLXdoaXRlJzogJyNGRkZGRkYnLFxuICAnQHJlZy1jb250ZW50X190ZXh0X19jb2xvci0tbGlnaHQtZ3JleSc6ICcjRDNEM0QzJyxcbiAgJ0ByZWdpc3RyYXRpb24tcHJvZ3Jlc3NfX3RleHRfX2NvbG9yLS1saWdodC1zZWEtZ3JlZW4nOiAnIzIxQzViNScsXG4gIC8vIEZvY3VzIEVmZmVjdHNcbiAgJ0BpbnB1dF9fYm9yZGVyLS1mb2N1cyc6ICcxcHggc29saWQgIzIxQzVCNScsXG4gICdAaW5wdXRfX2JveC1zaGFkb3ctLWZvY3VzJzogJzBweCAwcHggMTBweCAxcHggIzIxQzVCNScsXG4gICdAaW5wdXRfX3RyYW5zaXRpb24tLWZvY3VzJzogJzAuMXMnLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBUyxvQkFBb0I7QUFDdlUsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsK0JBQStCOzs7QUNGMlMsSUFBTywwQkFBUTtBQUFBO0FBQUEsRUFFaFcsa0JBQWtCO0FBQUEsRUFDbEIsZUFBZTtBQUFBLEVBQ2Ysa0JBQWtCO0FBQUEsRUFDbEIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQUE7QUFBQSxFQUVoQixtQkFBbUI7QUFBQSxFQUNuQixrQkFBa0I7QUFBQSxFQUNsQixlQUFlO0FBQUEsRUFDZix5QkFBeUI7QUFBQTtBQUFBLEVBRXpCLHVCQUF1QjtBQUFBLEVBQ3ZCLHNCQUFzQjtBQUFBO0FBQUEsRUFFdEIsbUJBQW1CO0FBQUE7QUFBQSxFQUVuQixvQkFDRTtBQUNKOzs7QUNwQmlWLElBQU8seUJBQVE7QUFBQTtBQUFBLEVBRTlWLGVBQWU7QUFBQSxFQUNmLHFCQUFxQjtBQUFBLEVBQ3JCLGVBQWU7QUFBQSxFQUVmLGFBQWE7QUFBQSxFQUNiLG9CQUFvQjtBQUFBLEVBQ3BCLG1CQUFtQjtBQUFBLEVBQ25CLG9CQUFvQjtBQUFBLEVBQ3BCLHVCQUF1QjtBQUFBLEVBQ3ZCLG9CQUFvQjtBQUFBLEVBQ3BCLHFCQUFxQjtBQUFBLEVBQ3JCLDBCQUEwQjtBQUFBLEVBQzFCLGtDQUFrQztBQUFBLEVBQ2xDLHNCQUFzQjtBQUFBLEVBQ3RCLHNDQUFzQztBQUFBLEVBQ3RDLGtDQUFrQztBQUFBLEVBQ2xDLDJCQUEyQjtBQUFBLEVBQzNCLG9DQUFvQztBQUFBLEVBQ3BDLDhDQUE4QztBQUFBLEVBQzlDLHlDQUF5QztBQUFBLEVBQ3pDLCtDQUErQztBQUFBLEVBQy9DLGtDQUFrQztBQUFBLEVBQ2xDLHNDQUFzQztBQUFBLEVBQ3RDLG9CQUFvQjtBQUFBLEVBQ3BCLHdCQUF3QjtBQUFBLEVBQ3hCLDZCQUE2QjtBQUFBLEVBQzdCLHlCQUF5QjtBQUFBLEVBQ3pCLDJCQUEyQjtBQUFBLEVBQzNCLGlDQUFpQztBQUFBLEVBQ2pDLG1DQUFtQztBQUFBLEVBQ25DLDRCQUE0QjtBQUFBLEVBQzVCLDZDQUE2QztBQUFBLEVBQzdDLDRDQUE0QztBQUFBLEVBQzVDLGtDQUFrQztBQUFBLEVBQ2xDLDJCQUEyQjtBQUFBLEVBQzNCLDRCQUE0QjtBQUFBLEVBQzVCLGdDQUFnQztBQUFBLEVBQ2hDLHNCQUFzQjtBQUFBLEVBQ3RCLDJCQUEyQjtBQUFBLEVBQzNCLG1CQUFtQjtBQUFBLEVBQ25CLHFCQUFxQjtBQUFBLEVBQ3JCLDJCQUEyQjtBQUFBLEVBQzNCLGlDQUFpQztBQUFBLEVBQ2pDLHdCQUF3QjtBQUFBLEVBQ3hCLCtDQUErQztBQUFBLEVBQy9DLHFDQUFxQztBQUFBO0FBQUEsRUFFckMsa0JBQWtCO0FBQUEsRUFDbEIsbUJBQW1CO0FBQUEsRUFDbkIsaUJBQWlCO0FBQUEsRUFDakIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQUEsRUFDcEIsb0JBQW9CO0FBQUEsRUFDcEIsaUNBQWlDO0FBQUEsRUFDakMsbUJBQW1CO0FBQUEsRUFDbkIsa0RBQWtEO0FBQUEsRUFDbEQsMkJBQTJCO0FBQUEsRUFDM0IsOEJBQThCO0FBQUEsRUFDOUIsMkJBQTJCO0FBQUEsRUFDM0IsaUNBQWlDO0FBQUEsRUFDakMsNEJBQTRCO0FBQUEsRUFDNUIseUJBQXlCO0FBQUEsRUFDekIsbUNBQW1DO0FBQUEsRUFDbkMsd0NBQXdDO0FBQUEsRUFDeEMsZ0NBQWdDO0FBQUEsRUFDaEMsc0NBQXNDO0FBQUE7QUFBQSxFQUV0Qyx1QkFBdUI7QUFBQTtBQUFBLEVBRXZCLHNCQUFzQjtBQUFBLEVBQ3RCLDhCQUE4QjtBQUFBLEVBRTlCLHdCQUF3QjtBQUFBLEVBQ3hCLHdCQUF3QjtBQUFBLEVBQ3hCLHdCQUF3QjtBQUFBLEVBQ3hCLHdCQUF3QjtBQUFBLEVBQ3hCLHdCQUF3QjtBQUFBLEVBQ3hCLDBCQUEwQjtBQUFBLEVBQzFCLDRCQUE0QjtBQUFBLEVBRTVCLDBCQUEwQjtBQUFBLEVBQzFCLDBCQUEwQjtBQUFBLEVBQzFCLDBCQUEwQjtBQUFBLEVBQzFCLDBCQUEwQjtBQUFBLEVBQzFCLDBCQUEwQjtBQUFBLEVBQzFCLDRCQUE0QjtBQUFBLEVBQzVCLDhCQUE4QjtBQUFBLEVBRTlCLHdCQUF3QjtBQUFBLEVBQ3hCLHVCQUF1QjtBQUFBLEVBQ3ZCLHVCQUF1QjtBQUFBLEVBQ3ZCLDJCQUEyQjtBQUFBLEVBQzNCLG9DQUFvQztBQUFBLEVBQ3BDLHNDQUFzQztBQUFBLEVBQ3RDLGlEQUFpRDtBQUFBLEVBQ2pELGlCQUFpQjtBQUFBLEVBQ2pCLHdCQUF3QjtBQUFBLEVBQ3hCLHVCQUF1QjtBQUFBLEVBQ3ZCLGdDQUFnQztBQUFBLEVBQ2hDLGdDQUFnQztBQUFBLEVBQ2hDLCtCQUErQjtBQUFBLEVBQy9CLHFDQUFxQztBQUFBLEVBQ3JDLDZCQUE2QjtBQUFBLEVBQzdCLGtDQUFrQztBQUFBLEVBQ2xDLCtCQUErQjtBQUFBLEVBQy9CLGlDQUFpQztBQUFBLEVBQ2pDLHlCQUF5QjtBQUFBLEVBQ3pCLHVDQUF1QztBQUFBLEVBQ3ZDLGtDQUFrQztBQUFBLEVBQ2xDLG1DQUFtQztBQUFBLEVBQ25DLGdDQUFnQztBQUFBLEVBQ2hDLCtCQUErQjtBQUFBLEVBQy9CLHlDQUF5QztBQUFBLEVBQ3pDLDhCQUE4QjtBQUFBLEVBQzlCLDZCQUE2QjtBQUFBLEVBQzdCLG9DQUFvQztBQUFBLEVBQ3BDLDhCQUE4QjtBQUFBLEVBQzlCLDBDQUEwQztBQUFBLEVBQzFDLHFDQUFxQztBQUFBLEVBQ3JDLDRDQUE0QztBQUFBLEVBQzVDLHVDQUF1QztBQUFBLEVBQ3ZDLDRDQUE0QztBQUFBLEVBQzVDLHlDQUF5QztBQUFBLEVBQ3pDLG9DQUFvQztBQUFBLEVBQ3BDLHlDQUF5QztBQUFBLEVBQ3pDLHdEQUF3RDtBQUFBO0FBQUEsRUFFeEQseUJBQXlCO0FBQUEsRUFDekIsNkJBQTZCO0FBQUEsRUFDN0IsNkJBQTZCO0FBQy9COzs7QUY3SEEsSUFBTSxpQkFBaUIsRUFBRSxHQUFHLHlCQUFnQixHQUFHLHVCQUFhO0FBRTVELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLHdCQUF3QjtBQUFBLE1BQ3RCLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsVUFDVixjQUFjLENBQUMsU0FBUyxXQUFXLElBQUk7QUFBQSxRQUN6QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixtQkFBbUI7QUFBQSxRQUNuQixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
