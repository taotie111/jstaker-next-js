import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from '../../../auth';
import { AuthError } from 'next-auth';
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

export async function authenticate(
  formData: FormData,
) {
  try {
    await signIn('credentials', {username:'7777'});
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}