import { useState, useEffect } from "react";

export default function useFetch(url, options = {}) {
  const [pending, setPending] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setPending(true);
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setPending(false);
      setError(null);
    } catch (e) {
      setError(`${e}. Some Error Occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, pending };
}
