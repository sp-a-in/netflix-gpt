import OpenAI from 'openai';
import { OPENAI_SECRETKEY } from './constants';
const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENAI_SECRETKEY,
  dangerouslyAllowBrowser: true,
});


export default openai;