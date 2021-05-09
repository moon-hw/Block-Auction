import { useEffect, useState } from "react";
import { auth } from "../firebase.utils";

export const loginFunctions = {
  onSuccess: (user) => {
    const userInfoStr = JSON.stringify(user);

    localStorage.setItem("userInfo", userInfoStr);
    console.log(`login success`);
  },
  onLogout: () => localStorage.clear(),
  getUserInfo: () => JSON.parse(localStorage.getItem("userInfo")),
};

export const useAuth = () => {
  const fireUser = auth.currentUser;
  const [user, setUser] = useState(fireUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unsub();
    };
  });
  return user;
};
