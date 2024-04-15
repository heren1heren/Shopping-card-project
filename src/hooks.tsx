import { useEffect, useState } from 'react';
import item, { contextType, filterData } from './typeDeclaration';
import { getRandomPrize } from './utils';
import { useOutletContext } from 'react-router-dom';

export function useFetch(
  url: string,
  isFetchedRef?: React.MutableRefObject<boolean>
) {
  const [data, setData] = useState<filterData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();
  useEffect(() => {
    if (isFetchedRef === undefined || !isFetchedRef.current) {
      const fetching = async () => {
        let data: item[] = [];
        try {
          data = await (await fetch(url)).json();
        } catch (error) {
          let message;
          if (error instanceof Error) {
            message = error.message;
          } else if (typeof error === 'string') {
            message = error;
          }
          setError(message);
        } finally {
          setIsLoading(false);
          // todo: remove extract logic outside to make useFetch more generic.
          // only apply if the app is big and complex
          const filterData = data.map((item: item) => {
            return {
              url: item.url,
              count: 1,
              price: getRandomPrize(),
              name: item.breeds[0].name || 'noname',
            };
          });

          setData(filterData); // good
        }
      };
      if (isFetchedRef) isFetchedRef.current = true;
      fetching();
    }
  });
  return { data, isLoading, error, setData };
}
export const useOutletContextWithType = () => {
  return useOutletContext<contextType>();
};
