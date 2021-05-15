import {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useMemo,
  ReactNode,
} from "react";

const UserContext =
  createContext<
    undefined | [User | null, Dispatch<SetStateAction<User | null>>]
  >(undefined);

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
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
  const [user, setUser] = useState<null | User>(null);

  const value: [User | null, Dispatch<SetStateAction<User | null>>] = useMemo(
    () => [user, setUser],
    [user]
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
