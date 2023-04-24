import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '7alq1dgd5u',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_APIKEY,
});