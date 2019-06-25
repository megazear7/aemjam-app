import { html, unsafeHTML } from 'orison';
import { getContentFragment } from '../aem/aem';

export default async context => {
  const cfPage = await getContentFragment(context.data.aemPath)

  return html`
    <section>
      <div>${cfPage.description}<div>
      <div>${unsafeHTML(cfPage.body)}<div>
    </section>
  `;
}
