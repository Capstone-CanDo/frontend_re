import re
import pandas as pd
from urllib.parse import urlparse
import tldextract

# 단축 URL 도메인 리스트
SHORT_DOMAINS = [
    "bit.ly", "t.co", "goo.gl", "tinyurl.com", "is.gd",
    "ow.ly", "buff.ly", "cutt.ly", "bit.do", "rebrand.ly",
    "t.ly", "shrtco.de", "s.id"
]

# URL 앞에 https:// 자동 부착
def ensure_https(url):
    if url.startswith("http://") or url.startswith("https://"):
        return url
    return "https://" + url.strip()

# IP 주소 판별
def is_ip_address(host):
    return bool(re.fullmatch(r"(?:\d{1,3}\.){3}\d{1,3}", host))

# subdomain 개수
def count_subdomains(ext):
    if ext.subdomain == "":
        return 0
    return len(ext.subdomain.split("."))

# 단축 URL 판별
def is_short_url(host):
    return int(any(short in host for short in SHORT_DOMAINS))


# 🔥 핵심: URL 하나 → feature dict
def extract_features_from_url(url: str) -> dict:
    url = ensure_https(url)

    parsed = urlparse(url)
    ext = tldextract.extract(url)

    host = parsed.netloc or ""
    path = parsed.path or ""
    tld = ext.suffix or ""
    lower = url.lower()

    feats = {}

    # Length-based
    feats["len_url"] = len(url)
    feats["len_hostname"] = len(host)
    feats["len_TLD"] = len(tld)
    feats["len_path"] = len(path)
    feats["url_depth"] = path.count("/")
    feats["len_first_dir"] = len(path.split("/")[1]) if path.count("/") >= 1 else 0

    # Count-based
    feats["num_http"] = lower.count("http")
    feats["num_https"] = lower.count("https")
    feats["num_www"] = lower.count("www")
    feats["num_@"] = lower.count("@")
    feats["num_?"] = lower.count("?")
    feats["num_&"] = lower.count("&")
    feats["num_%"] = lower.count("%")
    feats["num_#"] = lower.count("#")
    feats["num_."] = lower.count(".")
    feats["num_="] = lower.count("=")
    feats["num__"] = lower.count("_")
    feats["num_-"] = lower.count("-")
    feats["num_hostname_-"] = host.count("-")
    feats["num_subdomains"] = count_subdomains(ext)
    feats["num_digits"] = sum(c.isdigit() for c in lower)
    feats["num_letters"] = sum(c.isalpha() for c in lower)

    # Existence-based
    feats["is_ip"] = int(is_ip_address(host))
    feats["is_short_url"] = is_short_url(host)

    return feats


# 🔥 모델 넣기용 (DataFrame 형태)
def extract_features_df(url: str) -> pd.DataFrame:
    features = extract_features_from_url(url)
    return pd.DataFrame([features])