import { useCreateMyUser } from "@/api/MyUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  children: React.ReactNode;
}
const AuthProviderWithNavigate = ({ children }: AuthProps) => {
  const { createUser } = useCreateMyUser();
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH_0_AUDIENCE

  if (!domain || !clientId || !redirectUri) {
    throw new Error("unable to initialize auth");
  }

  const onRedirectCallBack = (appState?: AppState, user?: User) => {
    navigate("/auth-callback");
    // if (user?.sub && user?.email) {
    //   createUser({
    //     auth0Id: user?.sub,
    //     email: user?.email,
    //   });
    //   //   console.log("state", appState);
    //   console.log("user", user);
    // }
  };

  return (
    <>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
          audience
        }}
        onRedirectCallback={onRedirectCallBack}
      >
        {children}
      </Auth0Provider>
      ;
    </>
  );
};

export default AuthProviderWithNavigate;
