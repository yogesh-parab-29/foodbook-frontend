import { Form } from "@/components/ui/form";
import { Restaurant } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailSection from "./DetailSection";
import { Separator } from "@/components/ui/separator";
import Cuisines from "./Cuisines";
import MenuSection from "./MenuSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import ImageSection from "./ImageSection";
import { useEffect } from "react";

const restaurantFormSchema = z.object({
  restaurantName: z.string().min(1, "Restaurant Name is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  deliveryPrice: z.coerce.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Delivery time is required",
    invalid_type_error: "Delivery time must be a valid number",
  }),
  cuisines: z
    .array(z.string())
    .min(1, { message: "Please select at least one item" }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.coerce.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a valid number",
      }),
    })
  ),
  imageFile: z.instanceof(File, { message: "Image is required" }),
});
type RestaurantFormData = z.infer<typeof restaurantFormSchema>;
type Props = {
  restaurant?: Restaurant;
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const UserRestaurantForm = ({ onSave, isLoading, restaurant }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(restaurantFormSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!restaurant) {
      return;
    }

    const deliveryPriceFormatted = parseInt(
      (restaurant.deliveryPrice / 100).toFixed(2)
    );
    const menuItemFormatted = restaurant?.menuItems?.map((item)=>({
       ...item,
       price: parseInt((item.price/100).toFixed(2))
    }))

    const updatedRestaurant = {
      ...restaurant,
      deliveryPrice:deliveryPriceFormatted,
      menuItems:menuItemFormatted
    }

    form.reset(updatedRestaurant)
  }, [form, restaurant]);

  const onSubmit = (formDataJson: RestaurantFormData) => {
    console.log(formDataJson);
    const formData = new FormData();
    formData.append("restaurantName", formDataJson.restaurantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append(
      "deliveryPrice",
      (formDataJson.deliveryPrice * 100).toString()
    );
    formData.append(
      "estimatedDeliveryTime",
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });

    if (formDataJson.imageFile) {
      formData.append("imageFile", formDataJson.imageFile);
    }
    // console.log("FormData contents:");
    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    // console.log(formData.get("restaurantName"));
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailSection />
        <Separator />
        <Cuisines />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default UserRestaurantForm;
