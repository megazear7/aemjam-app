import { html, unsafeHTML } from 'orison';
import { getContentFragment } from '../../aem/aem-connector.js';

export default async context => {
  const cfPage = await getContentFragment(context.data.aemPath)

  return html`
    <section>
      <h2>About page</h2>
      <div>${unsafeHTML(cfPage.body)}<div>
    <section>
  `;
};
