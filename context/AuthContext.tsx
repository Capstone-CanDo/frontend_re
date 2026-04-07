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

  const signIn = async (email: string, password: string) => {
  try {
    setIsLoading(true);
    console.log("로그인 함수");

    const res = await fetch(
      "https://backend-production-6ff2.up.railway.app/accounts/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "testuser1",
          password: "testpass123",
        }),
      }
    );

    const text = await res.text();
    console.log("🔥 raw 응답:", text);

    if (!res.ok) {
      console.error("❌ 로그인 실패:", text);
      throw new Error("로그인 실패");
    }

    const data = JSON.parse(text);
    console.log("로그인 성공:", data);

    await SecureStore.setItemAsync("token", data.access);
    await SecureStore.setItemAsync("refresh_token", data.refresh);

    setUser({ email });
  } catch (e) {
    console.error("로그인 실패:", e);
  } finally {
    setIsLoading(false);
  }
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

export async function getAccessToken(): Promise<string> {
  const token = await SecureStore.getItemAsync("token");

  if (!token) {
    throw new Error("토큰이 없습니다 (로그인 필요)");
  }

  return token;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthProvider 안에서 사용해야 합니다");
  return context;
};