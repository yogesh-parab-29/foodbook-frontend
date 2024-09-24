import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/MyRestaurantApi";
import UserRestaurantForm from "@/form/user-restaurant-form/UserRestaurantForm";

const RestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();

  const { restaurant } = useGetMyRestaurant()
  return <UserRestaurantForm restaurant={restaurant} onSave={createRestaurant} isLoading={isCreateLoading} />;
};

export default RestaurantPage;
