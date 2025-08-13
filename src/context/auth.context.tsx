import React, { useEffect, useState } from "react";
import { get } from "../../api/rest.api";
import { useRouter } from "next/router";

const AuthContext = React.createContext({});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = React.useState({});
  const router = useRouter();

  const init = async () => {
    const { data, error } = await get("/auth/init");
    if (data && !error) {
      setUser(data?.data);
      setLoading(false);
    } else {
      router.push("/");
      setLoading(false);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {loading ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          loading...................
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
