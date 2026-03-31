# server.py
import sys
import os
import joblib
from fastapi import FastAPI
from pydantic import BaseModel

sys.path.append(os.path.dirname(__file__))  # src 폴더 추가
from model.stacking_model import StackingModel
from extract_features_df import extract_features_df

app = FastAPI()

# 모델 로드
BASE_DIR = os.path.dirname(__file__)
model_path = os.path.join(BASE_DIR, "models", "stacking_model.pkl")
model = joblib.load(model_path)
print("모델 타입:", type(model))

class URLRequest(BaseModel):
    url: str

@app.post("/analyze")
def analyze_url(req: URLRequest):

    print(f"[LOG] 서버에서 받은 URL: {req.url}")
    try:
        X = extract_features_df(req.url)
        pred = model.predict(X)[0]
        prob = 0.1

        status = "malicious" if pred == 1 else "safe"
        riskScore = int(prob * 100)

        return {
            "status": status,
            "riskScore": riskScore,
            "message": "분석 완료"
        }
    except Exception as e:
        print("분석 중 에러:", e)  # 로그 찍기
        return {"error": str(e)}