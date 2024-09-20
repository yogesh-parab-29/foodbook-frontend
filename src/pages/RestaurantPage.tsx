import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import UserRestaurantForm from "@/form/user-restaurant-form/UserRestaurantForm";

const RestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  return <UserRestaurantForm onSave={createRestaurant} isLoading={isLoading} />;
};

export default RestaurantPage;
