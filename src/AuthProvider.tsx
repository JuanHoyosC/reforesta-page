import React, { useEffect } from "react";
import request from "./API";
import { User } from "./App.interfaces";
import { AuthCtx } from "./contexts";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = React.useState<User | any>(null);
  const [loadingAuth, setLoadingAuth] = React.useState<boolean>(true);
  const [authorized, setAuthorized] = React.useState<boolean>(false);

  useEffect(() => {
    setLoadingAuth(true);
    if (
      localStorage.getItem("token") != null ||
      localStorage.getItem("user") != null
    ) {
      setUser(localStorage.getItem("user"));
      setLoadingAuth(false);
      setAuthorized(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    request
      .post("/auth", JSON.stringify({ user: email, password: password }))
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setUser({ user_id: data.user_id, user: data.user, token: data.token });
        setAuthorized(true);
        localStorage.setItem(
          "user",
          JSON.stringify({
            user_id: data.user_id,
            user: data.user,
            token: data.token,
          })
        );
        localStorage.setItem("token", data.token);
      }).finally(()=>{
        setLoadingAuth(false);
      });
  };

  const logout = () => {
    setLoadingAuth(true);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setAuthorized(false);
    setTimeout(()=>{
      setLoadingAuth(false);
    },500)
    
  };

  return (
    <AuthCtx.Provider
      value={{
        user: user,
        loading: loadingAuth,
        authorized: authorized,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthCtx.Provider>
  );
};
