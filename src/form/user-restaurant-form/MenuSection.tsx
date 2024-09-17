import { Button } from "@/components/ui/button";
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";

const MenuSection = () => {
  const { control } = useFormContext();
  const { append, remove, fields } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>
          Create your menu and give each item a price
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            <FormLabel>
              {fields.map((_, i) => {
                return (
                  <MenuItemInput index={i} removeMenuItem={() => remove(i)} />
                );
              })}
            </FormLabel>
          </FormItem>
        )}
      />
      <Button type="button" onClick={()=>{
        append({name:"",price:""})
      }}> Add Menu Item</Button>
    </div>
  );
};

export default MenuSection;
