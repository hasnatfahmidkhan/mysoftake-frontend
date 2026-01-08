import { useQuery, useQueryClient } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import useAxiosSecure from "../hooks/useAxiosSecure";

// context for admin data
const AuthContext = createContext(null);

const AuthProvider = () => {
  const [loading, setLoading] = useState(true);
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();
  // get token from cockies
  const token = Cookies.get("accessToken");

  // 1. fetch admin data by tanstack query
  const {
    data: user,
    isLoading: isUserLoading,
    refetch,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // if token is not get
      if (!Cookies.get("accessToken")) return null;

      const res = await axiosSecure.get("/user/me/"); // Django endpoint for admin profile
      return res.data;
    },
    enabled: !!token, // if token get then it's fetch the user data
    retry: false,
  });

  //   Manage the login state
  useEffect(() => {
    if (isUserLoading && token) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isUserLoading, token]);

  // 3. Login function
  const loginUser = (accessToken, refreshToken) => {
    Cookies.set("accessToken", accessToken, { expires: 1 });
    Cookies.set("refreshToken", refreshToken, { expires: 7 });

    // after set the now refetch the data for get user data
    refetch().then(() => {
      setLoading(false);
    });
  };

  //   log out function
  const logoutUser = () => {
    // 1. delete cookie
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    // 2. clear the cache
    queryClient.setQueryData(["user"], null);
    queryClient.removeQueries(["user"]);
  };

  return <div></div>;
};

export default AuthProvider;
