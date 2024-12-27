'use client';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 md:w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found </h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          variant="outline"
          className="mt-4 ml-2"
          onClick={() => (window.location.href = '/')}>
          Back to home
        </Button>
      </div>
    </div>
  );
}
