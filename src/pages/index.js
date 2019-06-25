import { html, unsafeHTML } from 'orison';
import { getJSON } from '../aem.js';

export default async context => {
  const cfPage = await getJSON(context.data.aemPath)

  return html`
    <section>
      <div>${cfPage.description}<div>
      <div>${unsafeHTML(cfPage.body)}<div>
    </section>
  `;
}
