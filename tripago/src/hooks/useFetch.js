import { useEffect, useState } from "react";

// custom hook, created to fetch data

const useFetch = (url) => {
  const controller = new AbortController();

  const [data, setData] = useState(null);
  const [isPendig, setIsPendig] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPendig(true);

      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = await response.json();
        setIsPendig(false);
        setData(json);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPendig(false);
          setError("Could not fetch the data");
        }

      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPendig, error };
};

export default useFetch;
