import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/form/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  const { currentUser, isLoading: isGetloading } = useGetMyUser();

  if (isGetloading) {
    return <span>Loading</span>;
  }

  if (!currentUser) {
    return <span>Unable to load profile</span>;
  }
  return (
    <>
      <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    </>
  );
};

export default UserProfilePage;
