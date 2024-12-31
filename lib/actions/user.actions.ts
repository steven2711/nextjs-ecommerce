'use server';
import { signinFormSchema } from '../validators';
import { signIn, signOut } from '@/auth';

export async function signinWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const user = signinFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    await signIn('credentials', {
      email: user.email,
      password: user.password,
    });

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    // fix?
    throw error;

    return { success: false, message: 'Invalid email or password' };
  }
}

export async function signoutCredentialedUser() {
  await signOut();
}
