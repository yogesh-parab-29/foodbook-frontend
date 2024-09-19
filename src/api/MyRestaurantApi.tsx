import { useAuth0 } from "@auth0/auth0-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurant = async(restaurantFormData:FormData)=>{
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`,{
        method:"POST",
        headers:{
            Authorization : `Bearer ${token}`,
         
        },
        body: restaurantFormData
    })
    if (!response.ok){
        return Error("Unable to create restaurant")
    }

    return response.json()
  }

  const {mutate : createRestaurant,isLoading, isSuccess,isError}= useMutation()

  return <div>useCreateMyRestaurant</div>;
};

export default useCreateMyRestaurant;
