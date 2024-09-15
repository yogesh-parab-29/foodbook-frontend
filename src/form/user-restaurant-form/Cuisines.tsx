import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisuineList } from "@/config/restaurant-cuisine-options";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckBox";

export const Cuisines = () => {
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
                  {cuisuineList.map((item) => (
                    <CuisineCheckBox cuisine={item} field={field} />
                  ))}
                </div>
                <FormMessage/>
              </FormItem>
            );
          }}
        ></FormField>
      </div>
    </>
  );
};
