import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  // 处理 GET 请求的逻辑
  res.status(200).json({ message: 'GET request processed' });
}

function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  // 处理 POST 请求的逻辑
  res.status(200).json({ message: 'POST request processed' });
}