import { APP_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="p-5 flex-center">
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
