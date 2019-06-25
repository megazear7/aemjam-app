import fetch from 'node-fetch';
import dotenv from 'dotenv';
import ContentFragmentPage from './content-fragment-page.js';

dotenv.config();

export const getJson = aemPath =>
  fetch(process.env.AEM_URL + aemPath + '.infinity.json', {
    'headers': {
      'Authorization': 'Basic ' + Buffer.from(process.env.AEM_USERNAME + ":" + process.env.AEM_PASSWORD).toString('base64')
    }
  })
  .then(res => res.json());

export const getContentFragment = aemPath =>
  getJson(aemPath)
  .then(json => new ContentFragmentPage(json));
