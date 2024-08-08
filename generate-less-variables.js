import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import themeOverrides from './src/styles/theme-overrides.js';
import incSiteTheme from './src/styles/inc-site-theme.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Log the contents of the imported theme files
console.log('Theme Overrides:', themeOverrides);
console.log('Inc Site Theme:', incSiteTheme);

const mergedVariables = { ...themeOverrides, ...incSiteTheme };

// Log the merged variables before processing
console.log('Merged Variables:', mergedVariables);

const lessVariables = Object.entries(mergedVariables)
  .map(([key, value]) => `@${key}: ${value};`) // Ensure only one @ symbol is used
  .join('\n');

// Fix any remaining double @ symbols
const correctedLessVariables = lessVariables.replace(/@@/g, '@');

// Log the final LESS variables string before writing to the file
console.log('Generated LESS Variables:\n', correctedLessVariables);

fs.writeFileSync(path.resolve(__dirname, 'src/styles/variables.less'), correctedLessVariables);

// Confirm that the file was written successfully
console.log('LESS variables written to src/styles/variables.less');
