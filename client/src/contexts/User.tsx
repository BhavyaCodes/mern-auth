import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useMemo,
  ReactNode,
  useEffect,
} from "react";

const UserContext =
  createContext<
    | undefined
    | [
        User | null | undefined,
        Dispatch<SetStateAction<User | null | undefined>>,
        boolean
      ]
  >(undefined);

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  dob: Date;
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<undefined | null | User>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (user === undefined) {
      return;
    }
    setLoading(false);
  }, [user]);

  const value: [
    User | null | undefined,
    Dispatch<SetStateAction<User | null | undefined>>,
    boolean
  ] = useMemo(() => [user, setUser, loading], [user, loading]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
