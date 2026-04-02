export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginErrors {
  email: string;
  password: string;
}

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateLogin = ({ email, password }: LoginInput): LoginErrors => {
  const errors: LoginErrors = { email: "", password: "" };

  if (!email) {
    errors.email = "이메일을 입력해주세요";
  } else if (!validateEmail(email)) {
    errors.email = "올바른 이메일 형식이 아닙니다";
  }

  if (!password) {
    errors.password = "비밀번호를 입력해주세요";
  } else if (password.length < 6) {
    errors.password = "비밀번호는 최소 6자 이상이어야 합니다";
  }

  return errors;
};