// utils/urlValidator.ts
export interface UrlValidationResult {
  isValid: boolean;
  normalizedUrl: string | null;
  error?: string;
}

export const validateUrl = (input: string): UrlValidationResult => {
  if (!input || typeof input !== "string") {
    return {
      isValid: false,
      normalizedUrl: null,
      error: "Invalid input",
    };
  }

  try {
    let url = input.trim();

    // 공백 제거
    url = url.replace(/\s/g, "");

    // 프로토콜이 없는 경우 https 추가
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    const parsedUrl = new URL(url);

    // http 또는 https만 허용
    if (!["http:", "https:"].includes(parsedUrl.protocol)) {
      return {
        isValid: false,
        normalizedUrl: null,
        error: "Unsupported protocol",
      };
    }

    // 도메인 형식 확인
    if (!parsedUrl.hostname.includes(".")) {
      return {
        isValid: false,
        normalizedUrl: null,
        error: "Invalid domain",
      };
    }

    return {
      isValid: true,
      normalizedUrl: parsedUrl.href,
    };
  } catch {
    return {
      isValid: false,
      normalizedUrl: null,
      error: "Malformed URL",
    };
  }
};