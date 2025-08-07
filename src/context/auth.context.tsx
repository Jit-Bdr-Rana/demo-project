import React, { useEffect } from "react";
import { get } from "../../api/rest.api";

const AuthContext = React.createContext({});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = React.useState({});

  const init = async () => {
    const { data, error } = await get("/auth/init");
    if (data && !error) {
      console.log(data);
      setUser(data?.data);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
