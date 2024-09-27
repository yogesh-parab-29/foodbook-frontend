import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRequest,
} from "@/api/MyRestaurantApi";
import UserRestaurantForm from "@/form/user-restaurant-form/UserRestaurantForm";

const RestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRequest, isLoading: isUpdateLoading } = useUpdateMyRequest();

  const isEditing = !!restaurant;

  return (
    <UserRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRequest : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default RestaurantPage;
