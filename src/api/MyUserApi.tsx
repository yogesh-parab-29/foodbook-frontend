import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyUserRequest = async (): Promise<User> => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    return response.json();
  };

  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getMyUserRequest);

  if (error) {
    toast.error(error.toString());
  }

  return { currentUser, isLoading };
};

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  // const createMyUserRequest = async (user: CreateUserRequest) => {
  //   const response = await fetch(`${API_BASE_URL}/api/my/user`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });
  //   if (!response.ok) {
  //     throw new Error("Failed to create User");
  //   }
  // };
  const { getAccessTokenSilently } = useAuth0();
  const createMyUserRequest = async (user: CreateUserRequest) => {
    // try {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create User");
    }
    // } catch (e) {
    //   console.error("Error in createMyUserRequest:", e);
    // }
  };
  const {
    mutateAsync: createUser,
    isLoading,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return { createUser, isLoading, isSuccess };
};
type updateUserRequest = {
  name: string;
  city: string;
  addressLine1: string;
  country: string;
};
export const useUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateMyUserRequest = async (formData: updateUserRequest) => {
    const token = await getAccessTokenSilently();
    console.log(token);
    const response = await fetch(`${API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to updtae user");
    }
    return response.json();
  };
  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateMyUserRequest);
  if (isSuccess) {
    toast.success("User Profile Updated!");
    reset();
  }
  if (error) {
    toast.error(error.toString());
    reset();
  }
  return { updateUser, isLoading };
};

// const useCreateMyUser = () => {
//   const createMyUser = async (user: CreateUserRequest) => {
//     const response = await fetch(`${API_BASE_URL}/api/my/user`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });

//     if(!response.ok){
//         return new Error("User not created")
//     }
//   };
// };
