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

// vite.config.js
import vitePluginImp from "file:///Users/rfvitis/temp/inc-vite-react-js-fe/node_modules/vite-plugin-imp/dist/index.mjs";
var themeVariables = {
  ...theme_overrides_default
  // ...incSiteTheme
};
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3N0eWxlcy90aGVtZS1vdmVycmlkZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmZ2aXRpcy90ZW1wL2luYy12aXRlLXJlYWN0LWpzLWZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcmZ2aXRpcy90ZW1wL2luYy12aXRlLXJlYWN0LWpzLWZlL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9yZnZpdGlzL3RlbXAvaW5jLXZpdGUtcmVhY3QtanMtZmUvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVTdHlsZUltcG9ydFBsdWdpbiB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0eWxlLWltcG9ydCc7XG5pbXBvcnQgdGhlbWVPdmVycmlkZXMgZnJvbSAnLi9zcmMvc3R5bGVzL3RoZW1lLW92ZXJyaWRlcy5qcyc7XG4vLyBpbXBvcnQgaW5jU2l0ZVRoZW1lIGZyb20gJy4vc3JjL3N0eWxlcy9pbmMtc2l0ZS10aGVtZS5qcyc7XG5pbXBvcnQgdml0ZVBsdWdpbkltcCBmcm9tICd2aXRlLXBsdWdpbi1pbXAnO1xuXG4vLyBNZXJnZSB0aGUgdmFyaWFibGVzIGZyb20gdGhlbWUtb3ZlcnJpZGVzIGFuZCBpbmMtc2l0ZS10aGVtZVxuY29uc3QgdGhlbWVWYXJpYWJsZXMgPSB7XG4gIC4uLnRoZW1lT3ZlcnJpZGVzLFxuICAvLyAuLi5pbmNTaXRlVGhlbWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNyZWF0ZVN0eWxlSW1wb3J0UGx1Z2luKHtcbiAgICAgIGxpYnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxpYnJhcnlOYW1lOiAnYW50ZCcsXG4gICAgICAgICAgZXNNb2R1bGU6IHRydWUsXG4gICAgICAgICAgcmVzb2x2ZVN0eWxlOiAobmFtZSkgPT4gYGFudGQvZXMvJHtuYW1lfS9zdHlsZS9pbmRleGAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICAgIHZpdGVQbHVnaW5JbXAoe1xuICAgICAgbGliTGlzdDogW1xuICAgICAgICB7XG4gICAgICAgICAgbGliTmFtZTogJ2FudGQnLFxuICAgICAgICAgIHN0eWxlKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgYW50ZC9lcy8ke25hbWV9L3N0eWxlL2luZGV4Lmxlc3NgO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIGphdmFzY3JpcHRFbmFibGVkOiB0cnVlLFxuICAgICAgICBtb2RpZnlWYXJzOiB0aGVtZVZhcmlhYmxlcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnYsXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy9fX3Rlc3RfXy9zZXR1cFRlc3RzLmpzeCcsXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3Jmdml0aXMvdGVtcC9pbmMtdml0ZS1yZWFjdC1qcy1mZS9zcmMvc3R5bGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcmZ2aXRpcy90ZW1wL2luYy12aXRlLXJlYWN0LWpzLWZlL3NyYy9zdHlsZXMvdGhlbWUtb3ZlcnJpZGVzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9yZnZpdGlzL3RlbXAvaW5jLXZpdGUtcmVhY3QtanMtZmUvc3JjL3N0eWxlcy90aGVtZS1vdmVycmlkZXMuanNcIjtleHBvcnQgZGVmYXVsdCB7XG4gIC8vIEdlbmVyYWxcbiAgJ0BwcmltYXJ5LWNvbG9yJzogJyMxODkwZmYnLFxuICAnQGxpbmstY29sb3InOiAnIzE4OTBmZicsXG4gICdAc3VjY2Vzcy1jb2xvcic6ICcjNTJjNDFhJyxcbiAgJ0B3YXJuaW5nLWNvbG9yJzogJyNmYWFkMTQnLFxuICAnQGVycm9yLWNvbG9yJzogJyNmNTIyMmQnLFxuICAvLyBUZXh0XG4gICdAZm9udC1zaXplLWJhc2UnOiAnMTRweCcsXG4gICdAaGVhZGluZy1jb2xvcic6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgJ0B0ZXh0LWNvbG9yJzogJ3JnYmEoMCwgMCwgMCwgMC42NSknLFxuICAnQHRleHQtY29sb3Itc2Vjb25kYXJ5JzogJ3JnYmEoMCwgMCwgMCwgMC40NSknLFxuICAvLyBCb3JkZXJcbiAgJ0Bib3JkZXItcmFkaXVzLWJhc2UnOiAnMnB4JyxcbiAgJ0Bib3JkZXItY29sb3ItYmFzZSc6ICcjZDlkOWQ5JyxcbiAgLy8gRWZmZWN0XG4gICdAZGlzYWJsZWQtY29sb3InOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gIC8vIFNoYWRvd1xuICAnQGJveC1zaGFkb3ctYmFzZSc6XG4gICAgJzAgM3B4IDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNnB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDlweCAyOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDUpJyxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBTLFNBQVMsb0JBQW9CO0FBQ3ZVLE9BQU8sV0FBVztBQUNsQixTQUFTLCtCQUErQjs7O0FDRjJTLElBQU8sMEJBQVE7QUFBQTtBQUFBLEVBRWhXLGtCQUFrQjtBQUFBLEVBQ2xCLGVBQWU7QUFBQSxFQUNmLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGdCQUFnQjtBQUFBO0FBQUEsRUFFaEIsbUJBQW1CO0FBQUEsRUFDbkIsa0JBQWtCO0FBQUEsRUFDbEIsZUFBZTtBQUFBLEVBQ2YseUJBQXlCO0FBQUE7QUFBQSxFQUV6Qix1QkFBdUI7QUFBQSxFQUN2QixzQkFBc0I7QUFBQTtBQUFBLEVBRXRCLG1CQUFtQjtBQUFBO0FBQUEsRUFFbkIsb0JBQ0U7QUFDSjs7O0FEZkEsT0FBTyxtQkFBbUI7QUFHMUIsSUFBTSxpQkFBaUI7QUFBQSxFQUNyQixHQUFHO0FBQUE7QUFFTDtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLHdCQUF3QjtBQUFBLE1BQ3RCLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRSxhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsVUFDVixjQUFjLENBQUMsU0FBUyxXQUFXLElBQUk7QUFBQSxRQUN6QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxTQUFTO0FBQUEsVUFDVCxNQUFNLE1BQU07QUFDVixtQkFBTyxXQUFXLElBQUk7QUFBQSxVQUN4QjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osbUJBQW1CO0FBQUEsUUFDbkIsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sZUFBZSxRQUFRO0FBQUEsRUFDekI7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxFQUNkO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
