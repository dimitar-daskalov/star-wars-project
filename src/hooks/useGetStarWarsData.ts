import axios from "axios";
import { useEffect, useState } from "react";
import { VITE_STAR_WARS_API_URL } from "../constants";
import { IStarWarsResponse } from "../interfaces";
import useCommonToast from "./useCommonToast";

const useGetStarWarsData = () => {
  const [data, setData] = useState<IStarWarsResponse>({} as IStarWarsResponse);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(true);
  const { showError } = useCommonToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(VITE_STAR_WARS_API_URL);
        setData(response.data);
      } catch (error) {
        setError(error);
        showError("Retrieving data failed! Please try again!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // dependencies should be empty
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetStarWarsData;
