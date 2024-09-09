import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UserNameMenu, {User} from "./UserNameMenu";

const MainNav = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>  
      <span className="flex space-x-2 items-center">
        {isAuthenticated && user ? (
          <UserNameMenu user={user as User} />
        ) : (
          <Button
            variant="ghost"
            className="hidden md:block font-bold hover:text-orange-500 hover:bg-white"
            onClick={async () => await loginWithRedirect()}
          >
            Log in
          </Button>
        )}
      </span>
    </>
  );
};

export default MainNav;
