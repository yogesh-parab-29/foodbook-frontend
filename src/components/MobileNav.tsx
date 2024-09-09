import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserInitials, User } from "@/hooks/Auth";
import MobileNavLink from "./MobileNavLink";

const MobileNav = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0<User>();
  const initials = user?.name
    .split(" ")
    .map((username) => username[0].toUpperCase())
    .join("");
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          {!isAuthenticated ? (
            <span className="font-bold text-orange-500 flex justify-center">
              Foodbook
            </span>
          ) : (
            <span className="flex items-center gap-x-3 mb-3">
              <span>
                <CircleUserRound className="text-orange-500" />
              </span>
              <span className="font-bold text-orange-500 flex justify-center">
                {user?.name}
              </span>
            </span>
          )}
        </SheetTitle>
        <Separator />
        {isAuthenticated ? (
          // <SheetDescription className="flex">{initials}</SheetDescription>
          <MobileNavLink />
        ) : (
          <SheetDescription className="flex my-3">
            <Button
              className="flex-1 font-bold bg-orange-500"
              onClick={() => loginWithRedirect()}
            >
              Login
            </Button>
          </SheetDescription>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
