"""
RetainPulse 360 - Automated Star-Schema Export for Microsoft Power BI Desktop
Generates clean Fact and Dimension tables along with a catalog of pre-computed DAX measures.
"""

import os
import pandas as pd
from datetime import datetime

OUTPUT_DIR = os.path.dirname(__file__)

def generate_star_schema():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print("Generating Power BI Star-Schema Datasets...")

    # 1. Dim_Department
    departments = [
        {"DeptID": 101, "DepartmentName": "Commercial & Field Sales", "Division": "Revenue Operations", "CostCenter": "CC-101", "RegionalHQ": "Central Hub"},
        {"DeptID": 102, "DepartmentName": "Plant & Operations", "Division": "Manufacturing", "CostCenter": "CC-102", "RegionalHQ": "Industrial Zone"},
        {"DeptID": 103, "DepartmentName": "Medical & R&D", "Division": "Scientific Affairs", "CostCenter": "CC-103", "RegionalHQ": "Corporate HQ"},
        {"DeptID": 104, "DepartmentName": "Corporate & HR", "Division": "Shared Services", "CostCenter": "CC-104", "RegionalHQ": "Corporate HQ"}
    ]
    df_dept = pd.DataFrame(departments)
    dept_file = os.path.join(OUTPUT_DIR, "Dim_Department.csv")
    df_dept.to_csv(dept_file, index=False)
    print(f" -> Saved {dept_file}")

    # 2. Fact_Employee_Status
    employees = [
        {"EmployeeID": "EMP-1042", "DeptID": 101, "EmployeeName": "Tanvir Ahmed", "Role": "Territory Sales Lead", "CompaRatio": 0.81, "TenureMonths": 45, "FlightRiskScore": 0.88, "PerformanceScore": 4.5, "PotentialScore": 4.8, "NineBoxQuadrant": "Stars", "SalaryUSD": 28000, "ReplacementCostUSD": 14000},
        {"EmployeeID": "EMP-0855", "DeptID": 104, "EmployeeName": "Sumaiya Rahman", "Role": "Senior HR Specialist", "CompaRatio": 0.94, "TenureMonths": 50, "FlightRiskScore": 0.24, "PerformanceScore": 4.2, "PotentialScore": 3.4, "NineBoxQuadrant": "High Performers", "SalaryUSD": 35000, "ReplacementCostUSD": 17500},
        {"EmployeeID": "EMP-2190", "DeptID": 102, "EmployeeName": "Arifur Islam", "Role": "QC Chemist", "CompaRatio": 0.84, "TenureMonths": 35, "FlightRiskScore": 0.76, "PerformanceScore": 3.6, "PotentialScore": 4.5, "NineBoxQuadrant": "High Potentials", "SalaryUSD": 24000, "ReplacementCostUSD": 12000},
        {"EmployeeID": "EMP-3004", "DeptID": 103, "EmployeeName": "Dr. Nusrat Jahan", "Role": "Medical Affairs Manager", "CompaRatio": 1.02, "TenureMonths": 61, "FlightRiskScore": 0.31, "PerformanceScore": 4.1, "PotentialScore": 2.8, "NineBoxQuadrant": "Trusted Professionals", "SalaryUSD": 48000, "ReplacementCostUSD": 24000},
        {"EmployeeID": "EMP-1420", "DeptID": 101, "EmployeeName": "Kamrul Hasan", "Role": "Medical Representative", "CompaRatio": 0.79, "TenureMonths": 22, "FlightRiskScore": 0.82, "PerformanceScore": 2.8, "PotentialScore": 4.2, "NineBoxQuadrant": "Enigmas", "SalaryUSD": 18000, "ReplacementCostUSD": 9000},
        {"EmployeeID": "EMP-2511", "DeptID": 102, "EmployeeName": "Mahmudul Haque", "Role": "Maintenance Engineer", "CompaRatio": 0.91, "TenureMonths": 38, "FlightRiskScore": 0.48, "PerformanceScore": 3.4, "PotentialScore": 3.1, "NineBoxQuadrant": "Core Players", "SalaryUSD": 26000, "ReplacementCostUSD": 13000}
    ]
    df_emp = pd.DataFrame(employees)
    emp_file = os.path.join(OUTPUT_DIR, "Fact_Employee_Status.csv")
    df_emp.to_csv(emp_file, index=False)
    print(f" -> Saved {emp_file}")

    # 3. Fact_Recruitment_Funnel
    funnel = [
        {"CandidateID": "CAN-4091", "DeptID": 101, "TargetRole": "Senior Field Sales Executive", "Stage": "Interview Kit Generated", "SourcingChannel": "LinkedIn Recruiter", "BlindScreeningScore": 89, "DaysInPipeline": 9},
        {"CandidateID": "CAN-5102", "DeptID": 102, "TargetRole": "QC Formulation Chemist", "Stage": "Offer Extended", "SourcingChannel": "Direct University Referral", "BlindScreeningScore": 92, "DaysInPipeline": 14},
        {"CandidateID": "CAN-6218", "DeptID": 104, "TargetRole": "People Operations Lead", "Stage": "Technical Screen Passed", "SourcingChannel": "Corporate Career Portal", "BlindScreeningScore": 87, "DaysInPipeline": 6}
    ]
    df_funnel = pd.DataFrame(funnel)
    funnel_file = os.path.join(OUTPUT_DIR, "Fact_Recruitment_Funnel.csv")
    df_funnel.to_csv(funnel_file, index=False)
    print(f" -> Saved {funnel_file}")

    # 4. DAX Measures Catalog
    dax_content = """/*
================================================================================
RETAINPULSE 360 - POWER BI DAX MEASURES CATALOG
================================================================================
Load Fact_Employee_Status and Dim_Department into Microsoft Power BI Desktop,
create a relationship on [DeptID], and paste these measures into your Model View.
*/

// Measure 1: Average Department Flight Risk
AvgFlightRiskIndex = 
AVERAGE(Fact_Employee_Status[FlightRiskScore])

// Measure 2: Total Exposure Replacement Cost (50% of annual salary for high-risk staff)
TotalReplacementCostAtRisk = 
CALCULATE(
    SUM(Fact_Employee_Status[ReplacementCostUSD]),
    Fact_Employee_Status[FlightRiskScore] >= 0.70
)

// Measure 3: High-Performer Retention Ratio (Stars & High Potentials with low flight risk)
HighPerformerRetentionRate% = 
VAR TotalHighTalent = 
    CALCULATE(
        COUNTROWS(Fact_Employee_Status),
        Fact_Employee_Status[PerformanceScore] >= 4.0 || Fact_Employee_Status[PotentialScore] >= 4.0
    )
VAR RetainedHighTalent = 
    CALCULATE(
        COUNTROWS(Fact_Employee_Status),
        (Fact_Employee_Status[PerformanceScore] >= 4.0 || Fact_Employee_Status[PotentialScore] >= 4.0) &&
        Fact_Employee_Status[FlightRiskScore] < 0.60
    )
RETURN
    DIVIDE(RetainedHighTalent, TotalHighTalent, 0)

// Measure 4: Average Compa-Ratio (Market Salary Parity)
AvgCompaRatio = 
AVERAGE(Fact_Employee_Status[CompaRatio])

// Measure 5: Average Days in Recruitment Pipeline
AvgRecruitmentVelocityDays = 
AVERAGE(Fact_Recruitment_Funnel[DaysInPipeline])
"""
    dax_file = os.path.join(OUTPUT_DIR, "PowerBI_DAX_Measures.txt")
    with open(dax_file, "w", encoding="utf-8") as f:
        f.write(dax_content)
    print(f" -> Saved {dax_file}")

    print("Power BI Star-Schema Export completed successfully!")

if __name__ == "__main__":
    generate_star_schema()
