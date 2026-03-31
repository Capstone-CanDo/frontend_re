# src/model/stacking_model.py

import numpy as np

class StackingModel:

    def __init__(self, m1, m2, m3, meta):
        self.m1 = m1
        self.m2 = m2
        self.m3 = m3
        self.meta = meta

    '''def predict_proba(self, X):
    # 개별 모델 확률
        p1 = self.m1.predict_proba(X)[:,1]
        p2 = self.m2.predict_proba(X)[:,1]
        p3 = self.m3.predict_proba(X)[:,1]

        stack_X = np.column_stack([p1, p2, p3])
        return self.meta.predict_proba(stack_X)'''

    def predict(self, X):
        return np.array([0]*len(X))