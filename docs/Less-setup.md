# Integrated the theme into Less

The `src/styles/inc-site-theme.js` and `src/styles/theme-overrides.js` files need to be integrated correctly into your Less setup. Here’s a streamlined approach to ensure the variables from these files are used correctly in your `Less` files:

**Step 1: Create a Unified Variables File**

Since Less does not directly support importing JavaScript files, we need to use a different approach to make these variables available. You can generate a `variables.less` file that includes all the variables from both JavaScript files.

**Step 2: Create a Script to Generate `variables.less`**

You can use a script to convert the JavaScript variables to a Less variables file. Here’s an example of a Node.js script that does this:

`generate-less-variables.js`

```js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import themeOverrides from './src/styles/theme-overrides.js';
import incSiteTheme from './src/styles/inc-site-theme.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mergedVariables = { ...themeOverrides, ...incSiteTheme };

const lessVariables = Object.entries(mergedVariables)
  .map(([key, value]) => `@${key}: ${value};`)
  .join('\n');

fs.writeFileSync(path.resolve(__dirname, 'src/styles/variables.less'), lessVariables);
```

Add this script to your `package.json` scripts section:

```json
"scripts": {
  "generate-less-variables": "node generate-less-variables.js",
}
```

**Step 3: Generate the variables.less File**

Run the script to generate the `variables.less` file:

**Step 4: Import `variables.less` in Your Styles**

Ensure that your Less files import the generated `variables.less`.

Example `index.less`:

```less
// index.less

@import './variables.less';

//** Landing Page Styles - DESKTOP **//

/* First Content Section */

.landing-main-title {
  font-family: @text__font-family, @text__font-family--header;
}

.landing-main-text {
  margin: 5% 0;
  text-align: center;
  font-family: @text__font-family--header;
  font-size: 1.25rem;
}

/* Example usage of primary color */
.primary-button {
  background-color: @primary-color;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: @border-radius-base;
  cursor: pointer;
}

```

**Step 5: Adjust `vite.config.js`**

You don't need to change the vite.config.js much. Just ensure it handles Less as expected.

`vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import themeOverrides from './src/styles/theme-overrides.js';
import incSiteTheme from './src/styles/inc-site-theme.js';
import vitePluginImp from 'vite-plugin-imp';

// Merge the variables from theme-overrides and inc-site-theme
const themeVariables = { ...themeOverrides, ...incSiteTheme };

export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => `antd/es/${name}/style/index`,
        },
      ],
    }),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style(name) {
            return `antd/es/${name}/style/index.less`;
          },
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables, // Ensure this is correctly set
      },
    },
  },
  define: {
    'process.env': process.env,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setupTests.jsx',
  },
});
```