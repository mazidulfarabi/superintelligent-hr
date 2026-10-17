# Enterprise AI-HR Suite

TalentSphere AI and RetainPulse 360 are two complementary, client-side web tools designed for enterprise recruitment screening and predictive employee retention.

* **Live Deployment**: [https://superintelligenthr.netlify.app](https://superintelligenthr.netlify.app)
* **TalentSphere AI**: [Live Demo](https://superintelligenthr.netlify.app/) (or local `index.html`)
* **RetainPulse 360**: [Live Demo](https://superintelligenthr.netlify.app/workforce.html) (or local `workforce.html`)

---

## The Challenge and The Solution

### 1. TalentSphere AI (Resume Screening & Skill Benchmarking)

* **The Challenge**: High-volume recruitment creates 2- to 3-week screening backlogs. Manual review suffers from cognitive fatigue, inconsistent criteria, and subconscious demographic bias (gender, age, location) that increases compliance exposure. Post-hire, standardized compliance SOP training has low 30-day retention.
* **The Solution**: An in-memory, client-side parsing pipeline that redacts seven demographic markers before evaluation, verifies candidate credentials against required role capabilities line-by-line (Match vs Missing), benchmarks fit across four standard enterprise roles, and converts compliance SOPs into 30-day adaptive micro-quizzes.

### 2. RetainPulse 360 (Workforce Retention & Flight Risk)

* **The Challenge**: High performers frequently leave without prior notice due to unaddressed salary compa-ratio compression (paid 15-20% below market median) and role stagnation beyond 24 to 36 months. Replacing key talent costs 50% to 150% of annual salary, while annual performance calibration remains subjective.
* **The Solution**: A multi-signal predictive attrition engine combining salary compa-ratio, role tenure velocity, and manager check-in notes into a simple 3-tier risk hierarchy (High, Moderate, Stable). Generates 1-click actionable stay-interview intervention plans and exports clean star-schema datasets for Microsoft Power BI Desktop.

---

## System Architecture & Data Flow

```mermaid
flowchart TB
    subgraph Ingestion["1. Inbound Ingestion"]
        CV["Candidate Resumes (PDF)"]
        HRIS["Enterprise Workforce Data (CSV)"]
    end

    subgraph TalentSphere["2. TalentSphere AI Engine"]
        PDFParser["PDF.js Client-Side Parser"]
        PIIRedactor["Deterministic PII Redactor"]
        RoleClassifier["4-Role Benchmark Classifier"]
        SkillChecker["Granular Skill Match Validator"]
        ActionGen["Interview Kit & Quiz Generator"]
    end

    subgraph RetainPulse["3. RetainPulse 360 Engine"]
        CSVParser["PapaParse In-Memory Streamer"]
        RiskCalc["Multi-Signal Flight-Risk Model"]
        Tiering["3-Tier Risk Hierarchy"]
        StayCopilot["Retention Plan Generator"]
        PBISync["Power BI Data Pipeline"]
    end

    subgraph Outputs["4. Operational Outputs"]
        Speed["Screening Latency: 14 Days -> 4 Mins"]
        Blind["Unbiased Blind Evaluation"]
        Retention["Targeted Stay-Interview Plans"]
        PBIDash["Power BI Desktop Reporting (.pbix)"]
    end

    CV --> PDFParser --> PIIRedactor --> RoleClassifier --> SkillChecker --> ActionGen
    HRIS --> CSVParser --> RiskCalc --> Tiering --> StayCopilot --> PBISync

    SkillChecker --> Speed
    PIIRedactor --> Blind
    StayCopilot --> Retention
    PBISync --> PBIDash
```

---

## TalentSphere AI Execution Flow

```mermaid
sequenceDiagram
    autonumber
    actor User as Recruiter / Hiring Manager
    participant UI as TalentSphere Interface
    participant PDF as PDF.js Engine
    participant Redactor as PII Sanitizer
    participant Benchmark as Multi-Role Benchmark Engine
    participant Validator as Skill Match Validator

    User->>UI: Uploads candidate resume PDF
    UI->>PDF: Extracts raw text in-memory
    PDF->>Redactor: Masks name, phone, NID, email, and address
    Redactor->>Benchmark: Scores text against 4 enterprise job profiles
    Benchmark->>Benchmark: Identifies Best Fit role
    Benchmark->>Validator: Compares CV text against active role requirements
    Validator->>UI: Displays Skill-by-Skill Match vs Missing checklist
    User->>UI: Requests Interview Kit or Micro-Quiz
    UI->>User: Generates tailored probing questions and daily quiz
```

---

## RetainPulse 360 Predictive Attrition Pipeline

```mermaid
flowchart LR
    subgraph Signals["1. Risk Signals"]
        A["Salary Compa-Ratio Parity"]
        B["Role Tenure Stagnation"]
        C["Manager Check-In Notes"]
    end

    subgraph Scoring["2. Predictive Algorithm"]
        Model["Multi-Signal Retention Model"]
    end

    subgraph ActionTiers["3. Actionable Tiers"]
        High["High Flight Risk (Immediate Action)"]
        Mod["Moderate Risk (Monitor)"]
        Stable["Stable Retention (Safe)"]
    end

    subgraph Resolution["4. Resolution"]
        Action["1-Click AI Retention Stay Plan"]
        Checklist["3-Step Intervention Checklist"]
    end

    A --> Model
    B --> Model
    C --> Model
    Model --> High
    Model --> Mod
    Model --> Stable
    High --> Action --> Checklist
```

---

## Power BI Star-Schema Data Model

```mermaid
erDiagram
    Fact_Employee_Status }|--|| Dim_Department : "DeptID"
    Fact_Recruitment_Funnel }|--|| Dim_Department : "DeptID"

    Fact_Employee_Status {
        string EmployeeID PK
        int DeptID FK
        string EmployeeName
        string Role
        float CompaRatio
        int TenureMonths
        float FlightRiskScore
        string RiskTier
        float SalaryUSD
        float ReplacementCostUSD
    }

    Fact_Recruitment_Funnel {
        string CandidateID PK
        int DeptID FK
        string TargetRole
        string Stage
        string SourcingChannel
        int BlindScreeningScore
        int DaysInPipeline
    }

    Dim_Department {
        int DeptID PK
        string DepartmentName
        string Division
        string CostCenter
        string RegionalHQ
    }
```

---

## File Structure

```
c:\superintelligent-hr\
├── index.html                     # TalentSphere AI standalone web application
├── talentsphere.js                # PDF.js text parser and skill match engine
├── workforce.html                 # RetainPulse 360 standalone web application
├── workforce.js                   # PapaParse CSV parser and 3-tier risk monitor
├── styles.css                     # Minimalist design system
├── netlify.toml                   # Netlify configuration
├── powerbi/
│   ├── export_powerbi_data.py     # Star-schema CSV generator
│   ├── Fact_Employee_Status.csv   # Employee retention fact table
│   ├── Fact_Recruitment_Funnel.csv# Recruitment pipeline fact table
│   ├── Dim_Department.csv         # Department dimension table
│   └── PowerBI_DAX_Measures.txt   # DAX formulas for Power BI Desktop
└── python_engine/
    ├── evaluator_agent.py         # Python resume evaluation agent
    ├── retention_copilot.py       # Python retention modeling agent
    └── test_python_engine.py      # Unit test script
```

---

## Local Setup and Tests

Run local HTTP server:
```bash
python -m http.server 8000
```
Open in browser:
* TalentSphere AI: `http://localhost:8000/index.html`
* RetainPulse 360: `http://localhost:8000/workforce.html`

Run Python unit tests:
```bash
python python_engine/test_python_engine.py
```

Generate Power BI star-schema tables:
```bash
python powerbi/export_powerbi_data.py
```

---

## Author

**Md. Mazidul Haque Farabi**  
BBA (Marketing & MIS), Institute of Business Administration, Jahangirnagar University (IBA-JU)  
Co-author, *The Effects of Fringe Benefits on Job Satisfaction* (Malaysian Journal of HRM)  
Founder & CTO, Kormo  
Portfolio: `https://mazidulfarabi.netlify.app`
