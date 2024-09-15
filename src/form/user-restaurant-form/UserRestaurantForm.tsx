import { Form } from "@/components/ui/form";
import { Restaurant } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailSection from "./DetailSection";
import { Separator } from "@/components/ui/separator";
import { Cuisines } from "./Cuisines";

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
  currentRestaurantData: Restaurant;
  onSave: (restaurantFormData: RestaurantFormData) => void;
  isLoading: boolean;
};

// eslint-disable-next-line no-empty-pattern
const UserRestaurantForm = ({
  // currentRestaurantData,  onSave,  isLoading,
}: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(restaurantFormSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: RestaurantFormData) => {};

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailSection />
        <Separator/>
        <Cuisines/>
      </form>
    </Form>
  );
};

export default UserRestaurantForm;
