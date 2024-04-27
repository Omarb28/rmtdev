import { useEffect, useState } from "react";
import { TJobItem, TJobItemDetails } from "./types";
import { BASE_API_URL } from "./constants";

export function useActiveJobId() {
  const [activeJobId, setActiveJobId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const jobItemId = window.location.hash.slice(1);
      setActiveJobId(Number(jobItemId));
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeJobId;
}

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<TJobItem[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(false);

  const totalNumberOfResults = jobItems.length;
  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchText) return;
    if (searchText !== "react") return;

    const fetchData = async () => {
      try {
        setIsLoadingList(true);
        const response = await fetch(`${BASE_API_URL}?search=${searchText}`);
        const data = await response.json();

        console.log(data);
        setJobItems(data.jobItems);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingList(false);
    };

    fetchData();
  }, [searchText]);

  return { jobItemsSliced, isLoadingList, totalNumberOfResults } as const;
}

export function useJobItemDetails(id: number | null) {
  const [jobItemDetails, setJobItemDetails] = useState<TJobItemDetails | null>(
    null
  );
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);

  useEffect(() => {
    if (!id) return;
    if (jobItemDetails && id === jobItemDetails.id) return;

    const fetchData = async () => {
      try {
        setIsLoadingDetails(true);
        const response = await fetch(`${BASE_API_URL}/${id}`);
        const data = await response.json();

        console.log(data);
        setJobItemDetails(data.jobItem);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingDetails(false);
    };

    fetchData();
  }, [id]);
  return { jobItemDetails, isLoadingDetails } as const;
}
