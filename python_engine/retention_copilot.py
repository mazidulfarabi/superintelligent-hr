"""
WorkforceNexus 360 - Flight-Risk Prediction & Retention Copilot
Predicts employee turnover exposure and generates autonomous intervention strategies.
"""

from typing import Dict, Any

class RetentionCopilotAgent:
    """Predictive attrition modeling and stay-interview intervention engine."""

    def calculate_flight_risk(self, compa_ratio: float, tenure_months: int, manager_sentiment_score: float) -> Dict[str, Any]:
        """
        Calculates multi-signal flight risk:
        - Compa-ratio penalty: severe if compa_ratio < 0.85 (underpaid vs market)
        - Stagnation penalty: tenure > 36 months in same role without promotion
        - Sentiment factor: manager check-in notes
        """
        risk_score = 0.20 # baseline

        if compa_ratio < 0.85:
            risk_score += 0.40
        elif compa_ratio < 0.92:
            risk_score += 0.15

        if tenure_months > 36:
            risk_score += 0.25
        elif tenure_months > 24:
            risk_score += 0.10

        if manager_sentiment_score < 0.5:
            risk_score += 0.20

        risk_score = min(round(risk_score, 2), 0.98)
        
        risk_tier = "High" if risk_score >= 0.70 else ("Moderate" if risk_score >= 0.45 else "Stable")

        return {
            "flight_risk_score": risk_score,
            "flight_risk_percentage": int(risk_score * 100),
            "risk_tier": risk_tier,
            "primary_risk_driver": "Salary Compa-Ratio Parity Lag & Tenure Stagnation" if compa_ratio < 0.85 else "Role Evolution & Career Pathway"
        }

    def generate_retention_stay_plan(self, employee_id: str, name: str, role: str, dept: str, risk_data: Dict[str, Any]) -> Dict[str, Any]:
        return {
            "employee_id": employee_id,
            "employee_name": name,
            "role": role,
            "department": dept,
            "risk_tier": risk_data["risk_tier"],
            "intervention_roadmap": [
                {
                    "step": 1,
                    "action": "Immediate Market Salary Parity Review",
                    "target_timeframe": "Within 7 business days",
                    "details": "Recommend a 12-15% compa-ratio adjustment to neutralize competitor poaching risk."
                },
                {
                    "step": 2,
                    "action": "Career Growth & Responsibility Elevation",
                    "target_timeframe": "Within 14 business days",
                    "details": "Transition from individual contributor to regional lead / mentor for junior staff."
                },
                {
                    "step": 3,
                    "action": "HR Business Partner Stay-Interview",
                    "target_timeframe": "Immediate",
                    "details": "Conduct structured 1-on-1 discovery meeting using retention roadmap prompts."
                }
            ]
        }
