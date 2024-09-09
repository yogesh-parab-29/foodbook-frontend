import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

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
interface userProps {
  user: User | null;
}

const UserNameMenu = ({ user }: userProps) => {
  const { logout } = useAuth0();
  const initials = user?.name
    .split(" ")
    .map(
      (username) => username[0].toUpperCase()
      // console.log(username[0]);
    )
    .join("");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 gap-x-2 font-bold ">
        <CircleUserRound className="text-orange-500" />
        {initials}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
        <DropdownMenuItem>
          <Link to={"/user-profile"}>User profile</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-orange-500"
          >
            Logout
          </Button>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNameMenu;
