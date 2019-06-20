import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

export default aemPath => fetch(process.env.AEM_URL + aemPath + '.infinity.json', {
  'headers': {
    'Authorization': 'Basic ' + Buffer.from(process.env.AEM_USERNAME + ":" + process.env.AEM_PASSWORD).toString('base64')
  }
})
.then(res => res.json())
