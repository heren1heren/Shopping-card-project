import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw Error(response.statusText);

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.log(err);
        setError(err.toString());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  });

  return [{ data, loading, error }, setData];
};
