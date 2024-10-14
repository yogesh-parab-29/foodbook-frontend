import { RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurant = (city?: string) => {
  const searchRestaurant = async ():Promise<RestaurantSearchResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}`
    );
    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }
    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants"],
    searchRestaurant,
    { enabled: !!city }
  );

  return { results, isLoading };
};
