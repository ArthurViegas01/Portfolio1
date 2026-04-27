/**
 * patch-ajv.js
 * Patches ajv-keywords v3 nested inside babel-loader and file-loader
 * to be compatible with ajv v8 (where _formats no longer exists).
 * Runs automatically via the "postinstall" npm script.
 */
const fs = require('fs');
const path = require('path');

const GUARD = 'if (!formats) return; // ajv v8 compat';
const TARGET = 'var formats = ajv._formats;';
const PATCHED = TARGET + '\n  ' + GUARD;

const TARGETS = [
  'node_modules/babel-loader/node_modules/ajv-keywords/keywords/_formatLimit.js',
  'node_modules/file-loader/node_modules/ajv-keywords/keywords/_formatLimit.js',
  'node_modules/fork-ts-checker-webpack-plugin/node_modules/ajv-keywords/keywords/_formatLimit.js',
];

const root = path.join(__dirname, '..');

TARGETS.forEach((rel) => {
  const filePath = path.join(root, rel);
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(GUARD)) {
    console.log(`[patch-ajv] Already patched: ${rel}`);
    return;
  }

  const patched = content.replace(TARGET, PATCHED);
  if (patched === content) {
    console.warn(`[patch-ajv] Pattern not found in: ${rel}`);
    return;
  }

  fs.writeFileSync(filePath, patched, 'utf8');
  console.log(`[patch-ajv] Patched: ${rel}`);
});
