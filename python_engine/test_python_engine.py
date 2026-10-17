"""
Unit verification for TalentSphere AI & WorkforceNexus 360 Python Engine.
"""

import sys
import os

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from evaluator_agent import ResumeEvaluatorAgent
from retention_copilot import RetentionCopilotAgent

def run_tests():
    print("=== TEST 1: Blind Screening & Resume Evaluation ===")
    evaluator = ResumeEvaluatorAgent()
    sample_cv = """
    Candidate: John Doe
    Phone: 01711-234567 | NID: 19932691234567890 | Email: john@example.com
    Experience: 5 years leading territorial pharmaceutical sales teams.
    Exceeded annual commercial revenue target by 120%.
    """
    res = evaluator.evaluate_candidate(sample_cv, "Senior Field Sales Executive")
    print(f"Overall Match: {res['overall_match_percentage']}%")
    print(f"PII Redacted Tags: {res['pii_redacted_tags']}")
    print(f"Sanitized Snippet: {res['sanitized_resume_snippet']}")
    assert len(res["pii_redacted_tags"]) > 0
    print(" -> PASSED")

    print("\n=== TEST 2: Flight-Risk Scoring & Retention Copilot ===")
    retention = RetentionCopilotAgent()
    risk = retention.calculate_flight_risk(compa_ratio=0.81, tenure_months=42, manager_sentiment_score=0.4)
    print(f"Flight Risk: {risk['flight_risk_percentage']}% ({risk['risk_tier']})")
    print(f"Primary Driver: {risk['primary_risk_driver']}")
    assert risk["risk_tier"] == "High"

    plan = retention.generate_retention_stay_plan("EMP-1042", "Tanvir Ahmed", "Territory Sales Lead", "Field Sales", risk)
    print(f"Generated Stay Plan Steps: {len(plan['intervention_roadmap'])}")
    assert len(plan["intervention_roadmap"]) == 3
    print(" -> PASSED")

    print("\nAll Python tests completed successfully!")

if __name__ == "__main__":
    run_tests()
