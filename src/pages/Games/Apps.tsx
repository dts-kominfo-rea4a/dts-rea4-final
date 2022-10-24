import { useMemo, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { useAppsQuery } from '@/services/queries/app.query';
import type { App, GetAppsProps } from '@/types/app';
import { formatDate } from '@/lib/helper';
import './App.css';
import Input from '@/components/Input';
import { Link } from 'react-router-dom';

export interface CarListProps {
  apps: App[];
}

const AppList: React.FC<CarListProps> = ({ apps }) => {
  if (!apps?.length) {
    return <div>No games found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {apps.map((app) => (
        <div
          key={app.id}
          className="flex flex-col col-span-1 overflow-hidden bg-white rounded-t-lg rounded-b-lg shadow-lg dark:shadow-2xl dark:bg-gray-700 dark:border-gray-700 hover:shadow-sky-500 dark:hover:shadow-sky-700 mobile-tap-highlight"
        >
          <Link to={`/games/${app.id}`}>
            {app.thumbnail ? (
              <img
                alt="Placeholder"
                className="block w-full h-auto rounded-t-lg"
                src={app.thumbnail}
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[215px] w-[370px] bg-gray-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            )}
          </Link>
          <div className="p-5">
            <Link to={`/games/${app.id}`}>
              <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 font-play dark:text-white">
                {app.title}
              </h1>
            </Link>
            <p className="font-normal text-justify text-gray-800 dark:text-gray-300">
              {app.short_description}
            </p>
          </div>
          <div className="flex flex-wrap px-5 py-2 mt-auto text-xs">
            <p className="mb-2 mr-2 text-sm italic text-gray-700 dark:text-gray-400">
              {formatDate(app.release_date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Apps = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const [platformTerm, setPlatformTerm] =
    useState<GetAppsProps['platform']>('all');
  const debouncedPlatformTerm = useDebounce<GetAppsProps['platform']>(
    platformTerm,
    500
  );
  const filter = useMemo<GetAppsProps>(
    () => ({
      search: debouncedSearchTerm?.length ? debouncedSearchTerm : undefined,
      platform: debouncedPlatformTerm?.length
        ? debouncedPlatformTerm
        : undefined,
    }),
    [debouncedSearchTerm, debouncedPlatformTerm]
  );
  const { isLoading, data } = useAppsQuery(filter);

  return (
    <div className="order-2 px-4 py-12 mx-auto text-gray-800 bg-white -z-50 md:px-12 dark:bg-gray-800 dark:text-gray-200">
      <div className="flex justify-center w-full">
        <div className="mb-3 xl:w-[40%]">
          <div className="relative flex flex-wrap items-baseline justify-start w-full mb-4 space-y-4 input-group">
            <Input
              name="search"
              type="search"
              className="relative flex-auto block w-auto min-w-0 px-3 py-2 m-2 mr-2 text-base font-normal text-gray-700 transition ease-in-out border border-gray-300 border-solid rounded-lg dark:border-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white md:m-0 form-control bg-clip-padding focus:border-blue-600 focus:outline-none"
              placeholder="Search games"
              aria-label="Search"
              aria-describedby="button-addon3"
              onChange={(e) => setSearchTerm(e.currentTarget.value)}
              value={searchTerm}
            />
            <div className="relative flex-auto block w-auto min-w-0 px-3 m-0 mr-2">
              <select
                id="platform"
                title="Select a platform"
                className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) =>
                  setPlatformTerm(e.target.value as GetAppsProps['platform'])
                }
                value={platformTerm}
              >
                <option value="all">All platforms</option>
                <option value="pc">PC Games</option>
                <option value="browser">Browser Games</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {isLoading ? (
          <div className="h-screen">Loading...</div>
        ) : (
          <AppList apps={data ?? []} />
        )}
      </div>
    </div>
  );
};

export default Apps;
