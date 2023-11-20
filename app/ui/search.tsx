'use client'; // Client Component, which means you can use event listeners and hooks.

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// import { RouteImpl } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(term: string) {
    console.log('term', term);
    console.log('searchParams', searchParams);
    // set a query string in params
    const params = new URLSearchParams(searchParams); // URLSearchParams  is a Web API that provides utility methods for manipulating the URL query parameters.
    console.log('params', params);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    // params is a query string now. use Next.js's useRouter and usePathname hooks to update the URL
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
