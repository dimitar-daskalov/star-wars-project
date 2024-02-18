/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export interface UserProps {
  username: string;
}

export const INITIAL_USER: UserProps = {
  username: "",
};

interface AuthContextProps {
  user: UserProps;
  loginUser: (user: UserProps) => void;
  logoutUser: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({
  user: INITIAL_USER,
  loginUser: () => {},
  logoutUser: () => {},
  isLoading: true,
  isAuthenticated: false,
});

export interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const userInfo = JSON.parse(
    localStorage.getItem("user") ?? "{}"
  ) as UserProps;

  const [user, setUser] = useState<UserProps>(userInfo ?? INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loginUser = (user: UserProps) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logoutUser = () => {
    setUser(INITIAL_USER);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const checkAuthenticated = () => {
      setIsAuthenticated(!!user.username);
      setIsLoading(false);
    };

    checkAuthenticated();
  }, [user]);

  const value = useMemo(
    () => ({
      user,
      loginUser,
      logoutUser,
      isLoading,
      isAuthenticated,
    }),
    [user, isLoading, isAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUserContext = () => useContext(AuthContext);
