import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { SheetDescription } from "./ui/sheet";

const MobileNavLink = () => {
  const { logout } = useAuth0();
  return (
    <>
      <SheetDescription className="flex my-3">
        <Link
          to="/user-profile"
          className="flex bg-white items-center font-bold hover:text-orange-500"
        >
          User Profile
        </Link>
      </SheetDescription>

      <SheetDescription className="flex my-3">
        <Button
          className="flex items-center px-3 font-bold hover:bg-gray-500"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </SheetDescription>
    </>
  );
};

export default MobileNavLink;
