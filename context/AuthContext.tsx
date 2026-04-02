import * as SecureStore from "expo-secure-store";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // 🔥 앱 시작 시 자동 로그인
  useEffect(() => {
    const loadUser = async () => {
      const token = await SecureStore.getItemAsync("token");

      if (token) {
        setUser({ email: "test@test.com" });
      }

      setIsLoading(false);
    };

    loadUser();
  }, []);
console.log("isLoading:", isLoading);
console.log("user:", user);
  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    console.log("로그인 함수");
    const fakeToken = "abc123";
    await SecureStore.setItemAsync("token", fakeToken);

    setUser({ email });

    setIsLoading(false);
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthProvider 안에서 사용해야 합니다");
  return context;
};