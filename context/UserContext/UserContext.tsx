import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { auth } from "@/firebase/firebaseConfig";
import { AddressType, UserType } from "@/types";
import { useApp } from "../AppContext";

interface UserContextType {
  user: UserType | null;
  handleChangeData: (e: {
    target: { name: string; value: string; type: string; checked: boolean };
  }) => void; // when updating via backend these can be update to Promise<void> from void
  updateAddress: (address: AddressType, typeOfAddress: string) => void;
  isLoggedIn: boolean;
  handleLogin: (email: string, password: string) => void;
  handleSignUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  handleSignOut: () => void;
  setIsLoggedIn: (loginStatus: boolean) => void;
}

//@ts-expect-error: ignore initial context creation
const UserContext = createContext<UserContextType>(null);

export const useUser = () => useContext(UserContext);

export interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType>({
    email: "",
    deliveryAddress: null,
    phoneNumber: 1234567890,
    billingAddress: null,
    sameBillingDelivery: true,
    receiveNewsletter: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();
  const { setIsLoading } = useApp();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser((prevData) => {
          return { ...prevData, email: String(user.email) };
        });
        setIsLoggedIn(true);
      } else {
        setUser((prevData) => {
          return { ...prevData, email: "" };
        });
      }
    });
  }, []);

  const handleChangeData = (e: {
    target: { name: string; value: string; type: string; checked: boolean };
  }) => {
    const { name, value, type, checked } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateAddress = (address: AddressType, typeOfAddress: string) => {
    setUser((prevCart) => {
      const updatedUser: UserType = { ...prevCart };

      if (typeOfAddress === "deliveryAddress") {
        updatedUser.deliveryAddress = address;
      } else {
        updatedUser.billingAddress = address;
      }

      return updatedUser;
    });
  };

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        fetch("/api/login", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${await userCredential.user.getIdToken()}`,
          },
        }).then((response) => {
          if (response.status == 200) {
            setIsLoggedIn(true);
            return response;
          }
        });
      })
      .catch((error) => console.error(error));
    window.location.replace(sessionStorage.getItem("previousPage") ?? "/");
    setIsLoading(false);
  };

  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    setIsLoading(true);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then(async (userCredential) => {
        handleLogin(email, password);
        return userCredential;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (
          errorCode === "auth/email-already-exists" ||
          errorCode === "auth/email-already-in-use"
        ) {
          return false;
        }
        console.error("Unable to register", errorMessage);
      });

    if (userCredential) {
      await updateProfile(userCredential.user, {
        displayName: name,
      });
    }
    router.push(sessionStorage.getItem("previousPage") ?? "/");
    setIsLoading(false);
    return true;
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    await signOut(auth);

    await fetch("/api/logout", {
      method: "POST",
    }).catch((err) => {
      console.error("Failed to SignOut", err);
    });
    window.location.reload();
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleChangeData,
        updateAddress,
        isLoggedIn,
        setIsLoggedIn,
        handleLogin,
        handleSignUp,
        handleSignOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
