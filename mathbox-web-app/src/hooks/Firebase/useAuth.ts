import { useEffect, useState } from "react";
import { authState } from "rxfire/auth";
import { User } from "firebase";
import { auth } from "../../firebase";

export const useLoggedInUser = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    const subscription = authState(auth).subscribe((user) => {
      setIsLoading(false);
      setUser(user);
    });

    return () => subscription.unsubscribe();
  }, []);
  return { user, isLoading };
};
