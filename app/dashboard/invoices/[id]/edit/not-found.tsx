import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import { headers } from 'next/headers';

export default function NotFound() {
  const headersList = headers();
  const domain = headersList.get('host');

  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-20 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found: {domain}</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}
