'use server';
import { signIn } from '../auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';


export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials',formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return '账号或密码错误!!';
        default:
          return '未知错误.';
      }
    }
    throw error;
  }
}