// render-html.js
//
// Go through data.json, render the template.ejs for every combination of code and language, and write the rendered HTML to the dist folder.

import fs from 'fs';
import path from 'path';
import { globSync } from 'node:fs';
import ejs from 'ejs';

// get working dir
const __dirname = import.meta.dirname;

// get template
const templatePath = path.join(__dirname, 'src/html/template.ejs');
const template = fs.readFileSync(templatePath, 'utf-8');

// get render options
const renderOptionsPath = path.join(__dirname, 'src/html/render-options.json');
const renderOptions = JSON.parse(fs.readFileSync(renderOptionsPath, 'utf-8'));

// get translations
const translationPathGlob = './src/html/translation.*.json';

// await file path resolution
const translationFileSet = globSync(translationPathGlob, { withFileTypes: false });

for (const file of translationFileSet) {
  const translationFilePath = path.join(__dirname, file);
  const translationData = JSON.parse(fs.readFileSync(translationFilePath, 'utf-8'));

  // skip if language of translation file is not in rendered_languages
  if ((renderOptions.rendered_languages === "*") || (renderOptions.rendered_languages.includes(translationData.language)) ) {

    // iterate through all error codes in data.json
    for (const code in translationData.errors) {

      // prepare path
      const renderPath = path.join(__dirname, 'dist/html/')
      const fullRenderPath = path.join(renderPath, `${code}.${translationData.language}.html`);

      // prepare data
      const lang = translationData.language;
      const title = translationData.errors[code].title;
      const description = translationData.errors[code].description;
      const conclusion = translationData.errors[code].conclusion;
      const button = translationData.button;

      // render template
      const renderData = ejs.render(template, { lang, title, code, description, conclusion, button });

      // make sure the path exits
      fs.mkdirSync(renderPath, { recursive: true });

      // write template to file
      fs.writeFileSync(fullRenderPath, renderData, 'utf8');
    }
  }
}
