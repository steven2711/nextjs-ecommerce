'use server';
import { signinFormSchema } from '../validators';
import { signIn, signOut } from '@/auth';
import { getRedirectError } from 'next/dist/client/components/redirect';

export async function signinWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signinFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    // fix?
    if (error) {
      throw error;
    }

    return { success: true, message: 'Invalid email or password' };
  }
}

export async function signoutCredentialedUser() {
  await signOut();
}
