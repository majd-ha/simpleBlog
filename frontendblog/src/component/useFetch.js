import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [error, setError] = useState(null);
  const [data, setdata] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const AbortCont = new AbortController();
    fetch(url, { signal: AbortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("couldnt fetch the data from the server");
        }
        return res.json();
      })
      .then((data) => {
        setdata(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    return () => AbortCont.abort();
  }, [url]);

  return { data, isPending, error };
}
