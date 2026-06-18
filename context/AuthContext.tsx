import * as SecureStore from "expo-secure-store";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);

      console.log("로그인 요청");

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

      console.log("✅ 로그인 성공:", data);

      // 토큰 저장
      await SecureStore.setItemAsync("token", data.access);
      await SecureStore.setItemAsync(
        "refresh_token",
        data.refresh
      );

      // 아이디 저장
      await SecureStore.setItemAsync(
        "saved_email",
        email
      );

      setUser({ email });
    } catch (error) {
      console.error("❌ 로그인 오류:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("refresh_token");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export async function getSavedEmail(): Promise<string> {
  return (
    (await SecureStore.getItemAsync(
      "saved_email"
    )) || ""
  );
}

export async function getAccessToken(): Promise<string> {
  const token = await SecureStore.getItemAsync("token");

  if (!token) {
    throw new Error("토큰이 없습니다 (로그인 필요)");
  }

  return token;
}

export async function refreshAccessToken(): Promise<
  string | null
> {
  try {
    const refreshToken = await SecureStore.getItemAsync(
      "refresh_token"
    );

    if (!refreshToken) {
      console.warn(
        "⚠️ Refresh Token 없음. 재로그인 필요"
      );
      return null;
    }

    console.log("🔄 Access Token 재발급 요청");

    const response = await fetch(
      "https://backend-production-6ff2.up.railway.app/api/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh: refreshToken,
        }),
      }
    );

    if (!response.ok) {
      console.warn(
        "❌ 토큰 재발급 실패:",
        response.status
      );
      return null;
    }

    const data = await response.json();

    await SecureStore.setItemAsync(
      "token",
      data.access
    );

    console.log(
      "✅ 새 Access Token 저장 완료"
    );

    return data.access;
  } catch (error) {
    console.error(
      "❌ 토큰 재발급 오류:",
      error
    );
    return null;
  }
}

export async function getValidAccessToken(): Promise<string> {
  const token = await SecureStore.getItemAsync("token");

  if (!token) {
    throw new Error("토큰 없음. 로그인 필요");
  }

  return token;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "AuthProvider 안에서 사용해야 합니다"
    );
  }

  return context;
};