import { useEffect, useState } from "react";

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchText) return;
    if (searchText !== "react") return;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}&limit=7`
        );
        const data = await response.json();

        console.log(data);
        setJobItems(data.jobItems);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [searchText]);

  return {
    jobItems,
    isLoading,
  };
}
