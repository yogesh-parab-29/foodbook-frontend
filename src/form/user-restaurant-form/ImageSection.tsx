import { FormControl, FormDescription, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import React from "react";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
  const {watch, control } = useFormContext();

  const image = watch("imageUrl");



  return (
    <div className="space-y-2">
      <div>
        <h2 className="text02xl font-bold">Image</h2>
        <FormDescription>
          Add an image that will be displayed on your restaurant listing in the
          search results.
        </FormDescription>
      </div>



      <div className="flex flex-col gap-8 w-[50%]">
        {image && <AspectRatio ratio={16/9}>
        <img src={image} alt=""  className="rounded-md object-cover h-full w-full"/></AspectRatio>}
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    className="bg-white"
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(event)=>{
                       field.onChange(event.target.files ? event.target.files[0] : null) 
                    }}
                  ></Input>
                </FormControl>
              </FormItem>
            );
          }}
        ></FormField>
      </div>
    </div>
  );
};

export default ImageSection;
