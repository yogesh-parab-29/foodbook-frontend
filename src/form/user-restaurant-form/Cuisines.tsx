import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-cuisine-options";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckBox";

 const Cuisines = () => {
  const { control } = useFormContext();
  return (
    <>
      <div className="space-y-2">
        <div>
          <h2 className="text-2xl font-bold">Cuisines</h2>
          <FormDescription>
            Select the cuisines that your restaurant serves
          </FormDescription>
        </div>
        <FormField
          control={control}
          name="cuisines"
          render={({ field }) => {
            return (
              <FormItem>
                <div className="grid md:grid-cols-5 gap-1">
                  {cuisineList.map((item,index) => (
                    <CuisineCheckBox cuisine={item} field={field} key={index} />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            );
          }}
        ></FormField>
      </div>
    </>
  );
};
 export default Cuisines