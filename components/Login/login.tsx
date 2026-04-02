import { Eye, EyeOff, Lock, Mail, MapPin, Shield } from "lucide-react-native";
import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { validateLogin } from "../../util/auth";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { styles } from "./style";


interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  

  const handleLogin = () => {
    const newErrors = validateLogin({ email, password });

  setErrors(newErrors);

  if (!newErrors.email && !newErrors.password) {
    onLogin();
  }
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <View style={styles.logoBox}>
          <View style={styles.logo} />
        </View>
        <Text style={styles.logoText}>큐트캡</Text>
      </View>

      {/* 메인 */}
      <View style={styles.content}>
        <View style={styles.centerBox}>
          {/* 타이틀 */}
          <View style={styles.titleBox}>
            <View style={styles.iconCircle}>
              <Shield size={32} color="#2563eb" />
            </View>
            <Text style={styles.title}>환영합니다</Text>
            <Text style={styles.subtitle}>안전한 여행을 시작하세요</Text>
          </View>

          {/* 카드 */}
          <Card>
            <View style={styles.form}>
              {/* 이메일 */}
              <View>
                <Text style={styles.label}>이메일</Text>
                <View style={styles.inputWrapper}>
                  <Mail size={20} color="#9ca3af" />
                  <Input
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    placeholder="이메일을 입력하세요"
                    style={styles.input}
                  />
                </View>
                {!!errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
              </View>

              {/* 비밀번호 */}
              <View>
                <Text style={styles.label}>비밀번호</Text>
                <View style={styles.inputWrapper}>
                  <Lock size={20} color="#9ca3af" />
                  <Input
                    value={password}
                    onChangeText={(text) => {
                      setPassword(text);
                      if (errors.password)
                        setErrors({ ...errors, password: "" });
                    }}
                    placeholder="비밀번호를 입력하세요"
                    secureTextEntry={!showPassword}
                    style={styles.input}
                  />

                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff size={20} color="#9ca3af" />
                    ) : (
                      <Eye size={20} color="#9ca3af" />
                    )}
                  </TouchableOpacity>
                </View>

                {!!errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
              </View>

              {/* 로그인 유지 */}
              <View style={styles.rowBetween}>
                <TouchableOpacity
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <Text style={styles.remember}>
                    {rememberMe ? "☑" : "☐"} 로그인 유지
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.link}>비밀번호 찾기</Text>
                </TouchableOpacity>
              </View>

              {/* 위치 안내 */}
              <View style={styles.noticeBox}>
                <MapPin size={14} color="#2563eb" />
                <View style={{ flex: 1 }}>
                  <Text style={styles.noticeTitle}>
                    위치 기반 서비스 안내
                  </Text>
                  <Text style={styles.noticeText}>
                    위치 정보를 사용하여 안전 정보를 제공합니다.
                  </Text>
                </View>
              </View>

              {/* 버튼 */}
              <Button onPress={handleLogin}>
                <Text style={{ color: "white", fontSize: 16 }}>로그인</Text>
              </Button>

              {/* 회원가입 */}
              <View style={styles.signup}>
                <Text>계정이 없으신가요? </Text>
                <TouchableOpacity>
                  <Text style={styles.link}>회원가입</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>

          {/* 푸터 */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              로그인 시 약관에 동의한 것으로 간주됩니다
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}