import { useState, useEffect } from "react";

export default function useFetch(address) {
  const [blog, setBlog] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(address, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("There is an error on database");
        }
        return res.json();
      })
      .then((data) => {
        setBlog(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          console.log(err);
          setErr(err);
        }
      });

    return () => abortCont.abort();
  }, [address]);

  return { blog, err };
}
