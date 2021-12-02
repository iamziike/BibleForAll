import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const abortFetchControl = new AbortController();
    (async () => {
      try {
        const response = await fetch(url, { signal: abortFetchControl.signal });
        if (!response.ok) throw new Error(response.statusText);
        let data = null;
        data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    })();
    return () => {
      abortFetchControl.abort();
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
