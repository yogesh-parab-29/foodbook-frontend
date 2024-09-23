import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription>
          Enter the details about your restaurant
        </FormDescription>
        <FormField
          name="restaurantName"
          control={control}
          render={({ field }) => {
            return (
              <>
                <FormItem>
                  <FormLabel>Restaurant Name</FormLabel>
                  <FormControl>
                    <Input className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              </>
            );
          }}
        ></FormField>
        <div className="flex gap-4">
          <FormField
            name="city"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                </>
              );
            }}
          ></FormField>
          <FormField
            name="country"
            control={control}
            render={({ field }) => {
              return (
                <>
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input className="bg-white" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                </>
              );
            }}
          ></FormField>
        </div>
        <FormField
          name="deliveryPrice"
          control={control}
          render={({ field }) => {
            return (
              <>
                <FormItem className="w-1/4">
                  <FormLabel>Delivery Price</FormLabel>
                  <FormControl>
                    <Input className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              </>
            );
          }}
        ></FormField>
        <FormField
          name="estimatedDeliveryTime"
          control={control}
          render={({ field }) => {
            return (
              <>
                <FormItem className="w-1/4">
                  <FormLabel>Estimated Delivery Time (mins)</FormLabel>
                  <FormControl>
                    <Input className="bg-white" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              </>
            );
          }}
        ></FormField>

      </div>
    </div>
  );
};

export default DetailSection;
