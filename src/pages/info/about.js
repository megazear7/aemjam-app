import { html } from 'orison';

export default context => {
  aem(context.data.aemPath).then(cf => console.log(cf));
  
  return html`
    <section>
      <h2>About page</h2>
    <section>
  `;
};
