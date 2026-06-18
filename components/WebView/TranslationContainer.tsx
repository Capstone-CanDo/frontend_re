import React, { useEffect, useState } from "react";

import RiskAnalysisLoadingCard from "./RiskAnalysisLoadingCard";
import RiskAnalysisResultCard from "./RiskAnalysisResultCard";

export default function TranslationContainer() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <RiskAnalysisLoadingCard />;
  }

  return <RiskAnalysisResultCard />;
}