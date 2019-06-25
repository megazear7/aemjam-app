import { html } from 'orison';
import header from '../partials/header.js';
import nav from '../partials/nav.js';
import footer from '../partials/footer.js';
import { getJSON } from '../aem.js';

export default async context => {
  const cfLayout = await getJSON(context.data.aemSitePath);

  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${cfLayout.title}</title>
        <script src="/app.js"></script>
        <link rel="stylesheet" type="text/css" href="/app.css">
      </head>
      <body>
        <header>
          <h1>${cfLayout.title}</h1>
        </header>
        ${nav(context.path, context.root)}
        <main>
          ${context.page.html}
        </main>
        ${footer()}
      </body>
    </html>
  `;
}
