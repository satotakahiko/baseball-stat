// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '@/lib/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await client.get({
    endpoint: "player",
    queries: {
      limit: 50
    }
  });
  res.status(200).json(data)
}
