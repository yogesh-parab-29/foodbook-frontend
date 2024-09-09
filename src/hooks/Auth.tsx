export interface User {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  name: string; // This is the property we will use for initials
  nickname: string;
  picture: string;
  sub: string;
  updated_at: string;
}
export interface userProps {
  user: User | null;
}
export const getUserInitials = (user: User | null | undefined) => {
  if (!user || !user.name) return "";
  console.log(user);
  return user?.name
    .split(" ")
    .map((username: string) => username[0].toUpperCase())
    .join("");
};
