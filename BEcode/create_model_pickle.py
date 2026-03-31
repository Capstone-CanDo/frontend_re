# src/create_model_pickle.py
from model.stacking_model import StackingModel
import joblib

# ❗ m1, m2, m3, meta는 이미 학습된 모델이 있어야 함
# 예시: scikit-learn 모델이나 xgboost 모델
m1 = ...  # 첫 번째 기본 모델
m2 = ...  # 두 번째 기본 모델
m3 = ...  # 세 번째 기본 모델
meta = ...  # stacking meta 모델

# StackingModel 객체 생성
stack_model = StackingModel(m1, m2, m3, meta)

# pickle 파일로 저장
joblib.dump(stack_model, "models/stacking_model.pkl")
print("StackingModel pickle 생성 완료!")