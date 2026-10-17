// TalentSphere AI - Autonomous CV Evaluation & Skill-by-Skill Benchmark Engine

// --- 1. ENTERPRISE ROLE DEFINITIONS & CONCRETE SKILL REQUIREMENTS ---
const ENTERPRISE_ROLES = [
    {
        id: "sales",
        title: "Commercial Territory Sales Lead",
        department: "Sales & Field Operations",
        skillsRequired: [
            {
                name: "Territory Revenue & Sales Target Execution",
                keywords: ["sales", "revenue", "quota", "target", "volume", "commercial"],
                evidenceFallback: "Exceeded annual commercial revenue target by 118% across divisional zones."
            },
            {
                name: "Doctor & Hospital Institutional Detailing",
                keywords: ["doctor", "hospital", "clinic", "kol", "detailing", "client"],
                evidenceFallback: "Managed relationships with hospital procurement boards and key opinion leaders."
            },
            {
                name: "Daily Call Reporting (DCR) & Territory Auditing",
                keywords: ["dcr", "call report", "crm", "audit", "field rep"],
                evidenceFallback: "Implemented digital Daily Call Report (DCR) audit system across 14 reps."
            },
            {
                name: "Cold-Chain Biologics & Vaccine Logistics",
                keywords: ["cold-chain", "vaccine", "biologics", "temperature", "gdp"],
                evidenceFallback: null // Missing
            },
            {
                name: "Institutional Sales Coaching Certification",
                keywords: ["coaching certification", "formal coaching", "shrm", "icf"],
                evidenceFallback: null // Missing
            }
        ],
        sampleGaps: "Limited documented cold-chain vaccine logistics; lacks formal sales coaching certification.",
        interviewQuestion: "How do you turn around a territory that is 20% behind quarterly budget under intense competitor price cutting?"
    },
    {
        id: "chemist",
        title: "QC Analytical & Formulation Chemist",
        department: "Plant & Quality Operations",
        skillsRequired: [
            {
                name: "HPLC & Gas Chromatography (GC) Operation",
                keywords: ["hplc", "gc", "chromatography", "dissolution", "spectrophotometric"],
                evidenceFallback: "5+ years operating validated HPLC, GC, and spectrophotometric dissolution equipment."
            },
            {
                name: "WHO-GMP & ISO 17025 Regulatory Audit Compliance",
                keywords: ["gmp", "who-gmp", "iso", "audit", "regulatory", "compliance"],
                evidenceFallback: "Clean regulatory compliance record across WHO-GMP and ISO 17025 audits."
            },
            {
                name: "Analytical Method Validation (ICH Guidelines)",
                keywords: ["validation", "assay", "ich", "zone ivb", "stability"],
                evidenceFallback: "Spearheaded analytical method validation for 8 generic solid-dose formulations."
            },
            {
                name: "OOS & OOT Deviation Root-Cause Investigation",
                keywords: ["oos", "oot", "deviation", "investigation", "out-of-specification"],
                evidenceFallback: "Investigated Out-of-Specification (OOS) and Out-of-Trend (OOT) batch deviations."
            },
            {
                name: "Sterile Injectables & Aseptic Cleanroom Protocol",
                keywords: ["sterile", "injectable", "aseptic", "cleanroom filling"],
                evidenceFallback: null // Missing
            }
        ],
        sampleGaps: "Experience primarily in solid oral doses; minimal sterile injectable exposure.",
        interviewQuestion: "Describe an Out-of-Specification (OOS) investigation you led and how you traced root cause to equipment vs analyst error."
    },
    {
        id: "hr",
        title: "HR Operations & Talent Specialist",
        department: "Corporate Human Resources",
        skillsRequired: [
            {
                name: "Automated HRIS Architecture & Digital Workflows",
                keywords: ["hris", "workflow", "automation", "digital", "lifecycle"],
                evidenceFallback: "Architected automated HRIS workflow migration covering 1,800+ employees."
            },
            {
                name: "Statutory Labor Laws & Benefits Administration",
                keywords: ["labor", "statutory", "provident", "gratuity", "compliance"],
                evidenceFallback: "Managed Bangladesh Labor Act 2006 compliance, provident fund, and welfare."
            },
            {
                name: "Full-Cycle Sourcing & Onboarding Cycle Optimization",
                keywords: ["recruitment", "onboarding", "sourcing", "talent", "cycle"],
                evidenceFallback: "Reduced talent onboarding cycle time from 18 days down to 7 days."
            },
            {
                name: "360 Leadership Feedback Calibration",
                keywords: ["360", "calibration", "performance", "appraisal", "feedback"],
                evidenceFallback: "Conducted 360-degree leadership feedback calibration sessions."
            },
            {
                name: "Factory Shift & Industrial Labor Relations",
                keywords: ["factory shift", "union", "industrial relations", "plant workers"],
                evidenceFallback: null // Missing
            }
        ],
        sampleGaps: "Focus has been in corporate office; minimal exposure to factory union/shift labor.",
        interviewQuestion: "Walk me through how you automated an HRIS workflow while maintaining 100% compliance with statutory labor laws."
    },
    {
        id: "supply",
        title: "Supply Chain & Operations Coordinator",
        department: "Logistics & Manufacturing",
        skillsRequired: [
            {
                name: "Warehouse Inventory Control & Order Fulfillment",
                keywords: ["inventory", "warehouse", "logistics", "distribution", "stock"],
                evidenceFallback: "Managed territorial distribution centers and product fulfillment schedules."
            },
            {
                name: "Good Distribution Practice (GDP) Adherence",
                keywords: ["gdp", "distribution practice", "compliance", "transport"],
                evidenceFallback: "Ensured adherence to Good Distribution Practice (GDP) guidelines."
            },
            {
                name: "Commercial Vendor Contract Negotiation",
                keywords: ["vendor", "procurement", "contract", "negotiation", "supplier"],
                evidenceFallback: "Negotiated commercial supply contracts with regional pharmaceutical distributors."
            },
            {
                name: "Enterprise ERP & Material Requirements Planning (MRP)",
                keywords: ["erp", "sap", "mrp", "oracle", "supply software"],
                evidenceFallback: null // Missing
            },
            {
                name: "International Customs Clearance & Cold-Chain Shipping",
                keywords: ["customs", "freight", "import", "export", "cold-chain shipping"],
                evidenceFallback: null // Missing
            }
        ],
        sampleGaps: "Requires deeper exposure to customs clearance and enterprise SAP/ERP integration.",
        interviewQuestion: "How do you prevent stock-outs of critical supplies during unexpected international shipping disruptions?"
    }
];

// --- 2. PRESET CANDIDATE DOSSIERS ---
const PRESET_CANDIDATES = [
    {
        id: "CAN-4091",
        title: "Commercial Territory Lead Candidate",
        skills: ["Territory Expansion", "DCR Auditing", "KOL Relationship Detailing", "Quota Overachievement", "Institutional Tenders", "Biochemistry (B.Sc)"],
        impactStats: ["+118% Quota Average", "BDT 42M Annual Revenue", "14 Frontline Reps Managed", "4 Divisional Zones"],
        resumeText: `CANDIDATE DOSSIER: Commercial Field Supervisor
• Experience: 6 years managing regional commercial territory and ethical hospital sales teams.
• Track Record: Exceeded quarterly volume quota by 118% across 4 major divisional zones.
• Leadership: Managed 14 frontline medical sales representatives; achieved BDT 42M annual revenue target.
• Education: B.Sc in Biochemistry - University of Dhaka (CGPA: 3.65/4.00)
• Tools: Digital Daily Call Reporting (DCR), CRM territory mapping, hospital procurement bidding.`
    },
    {
        id: "CAN-5102",
        title: "QC Analytical Chemist Candidate",
        skills: ["HPLC Assay", "Gas Chromatography (GC)", "WHO-GMP Audits", "Method Validation", "Stability Testing (Zone IVb)", "M.Pharm First Class"],
        impactStats: ["8 Generic Formulations Validated", "5+ Years Lab Experience", "Zero Critical Audit Deviations"],
        resumeText: `CANDIDATE DOSSIER: Senior Quality Control Analyst
• Experience: 5+ years operating validated HPLC, GC, and spectrophotometric dissolution equipment.
• Compliance: Zero critical regulatory observations across WHO-GMP and ISO 17025 audits.
• Formulations: Spearheaded analytical method validation for 8 generic solid-dose formulations.
• Testing: Stability testing protocols under ICH guidelines (Zone IVb); OOS/OOT investigations.
• Education: M.Pharm & B.Pharm in Pharmaceutical Chemistry (First Class Honors).`
    },
    {
        id: "CAN-6218",
        title: "People Operations Lead Candidate",
        skills: ["HRIS Architecture", "Statutory Labor Act Compliance", "Onboarding Cycle Optimization", "360 Review Calibration", "Grievance Handling", "MBA (HRM)"],
        impactStats: ["1,800+ Employees Managed", "-60% Onboarding Cycle Days", "100% Audit Compliance"],
        resumeText: `CANDIDATE DOSSIER: Senior HR Specialist & People Lead
• Experience: 7 years managing end-to-end talent lifecycle, employee relations, and HR compliance.
• Transformation: Architected automated HRIS workflow migration covering 1,800+ employees.
• Velocity: Slashed new hire onboarding cycle time from 18 days down to 7 days.
• Labor Laws: Expert in Bangladesh Labor Act 2006 compliance, provident fund, and statutory benefits.
• Education: MBA in Human Resource Management (IBA, University of Dhaka); BBA in Management.`
    }
];

// --- 3. STATE ---
let currentCandidate = PRESET_CANDIDATES[0];
let currentSelectedRoleId = "sales";

// --- 4. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    setupPDFDropZone();
    evaluateAndRenderCandidate(currentCandidate);
});

function toggleExplainerModal() {
    document.getElementById('explainer-modal').classList.toggle('hidden');
}

function loadPresetCandidate(idx) {
    currentCandidate = PRESET_CANDIDATES[idx];
    evaluateAndRenderCandidate(currentCandidate);
    confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
}

// --- 5. DEEP CANDIDATE EVALUATION & SKILL MATCH BREAKDOWN ---
function evaluateAndRenderCandidate(cand) {
    const textLower = cand.resumeText.toLowerCase();

    // 1. Calculate Multi-Role Match Rates Dynamically
    const roleScores = ENTERPRISE_ROLES.map(role => {
        let matchedSkillsCount = 0;
        role.skillsRequired.forEach(skill => {
            const hasSkill = skill.keywords.some(kw => textLower.includes(kw.toLowerCase()));
            if (hasSkill) matchedSkillsCount++;
        });

        const matchPct = Math.min(Math.max(Math.round((matchedSkillsCount / role.skillsRequired.length) * 100), 25), 96);
        return {
            ...role,
            matchPct: matchPct,
            matchedSkillsCount: matchedSkillsCount
        };
    });

    // Sort to determine Best Fit
    roleScores.sort((a, b) => b.matchPct - a.matchPct);
    const bestFit = roleScores[0];
    
    // Default active benchmark role to best fit unless explicitly selected
    if (!ENTERPRISE_ROLES.some(r => r.id === currentSelectedRoleId)) {
        currentSelectedRoleId = bestFit.id;
    }

    // Update Best Fit Badge
    document.getElementById('best-fit-role-badge').textContent = `Best Fit: ${bestFit.title} (${bestFit.matchPct}%)`;

    // Render 4 Role Benchmark Cards
    const grid = document.getElementById('role-benchmarks-grid');
    grid.innerHTML = roleScores.map(r => {
        const isSelected = r.id === currentSelectedRoleId;
        const isBestFit = r.id === bestFit.id;
        
        let borderClass = "border-slate-200 bg-white hover:border-slate-300";
        if (isSelected) borderClass = "border-[#14a800] bg-[#f6fdf6] shadow-sm";
        
        let tag = `<span class="text-slate-400 text-[10px] font-mono">Benchmark</span>`;
        if (isBestFit) tag = `<span class="bg-[#e4f7e1] text-[#108a00] text-[10px] font-bold px-2 py-0.5 rounded">BEST FIT</span>`;
        if (isSelected && !isBestFit) tag = `<span class="bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded">ACTIVE</span>`;

        return `
            <div onclick="selectBenchmarkRole('${r.id}')" class="role-card p-4 rounded-xl border ${borderClass} cursor-pointer space-y-2">
                <div class="flex justify-between items-center">
                    <span class="text-[11px] font-bold text-slate-500 uppercase">${r.department}</span>
                    ${tag}
                </div>
                <h4 class="font-bold text-sm text-[#001e00] leading-snug">${r.title}</h4>
                <div class="space-y-1">
                    <div class="flex justify-between text-xs font-semibold">
                        <span class="text-slate-600">Compatibility</span>
                        <span class="${isSelected ? 'text-[#14a800] font-bold' : 'text-slate-700'}">${r.matchPct}%</span>
                    </div>
                    <div class="w-full bg-slate-100 rounded-full h-1.5">
                        <div class="${isSelected ? 'bg-[#14a800]' : 'bg-slate-400'} h-1.5 rounded-full" style="width: ${r.matchPct}%"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // 2. Render Granular Skill-by-Skill Breakdown Table for Active Role
    renderSkillBreakdownTable(textLower);

    // 3. Render Strengths vs Gaps
    const strengthsUl = document.getElementById('analysis-strengths');
    strengthsUl.innerHTML = (cand.impactStats || [
        "Extracted verified domain credentials matching target profile.",
        "Clear quantifiable achievements documented in resume.",
        "Demonstrated strong commercial & operational competency."
    ]).map(s => `<li>${s}</li>`).join('');

    const gapsUl = document.getElementById('analysis-gaps');
    const activeRole = ENTERPRISE_ROLES.find(r => r.id === currentSelectedRoleId) || bestFit;
    gapsUl.innerHTML = `
        <li>${activeRole.sampleGaps}</li>
        <li>Assess cross-functional adaptability during hiring manager interview round.</li>
    `;

    // 4. Render Sanitized CV Snippet
    document.getElementById('extracted-cv-text').textContent = cand.resumeText;
}

// RENDER GRANULAR SKILL-BY-SKILL TABLE (No Abstract Percents!)
function renderSkillBreakdownTable(textLower) {
    const activeRole = ENTERPRISE_ROLES.find(r => r.id === currentSelectedRoleId) || ENTERPRISE_ROLES[0];
    document.getElementById('active-benchmark-title-badge').textContent = activeRole.title;

    let matchedCount = 0;
    const totalCount = activeRole.skillsRequired.length;

    const tbody = document.getElementById('skills-breakdown-tbody');
    tbody.innerHTML = activeRole.skillsRequired.map(skill => {
        const isMatched = skill.keywords.some(kw => textLower.includes(kw.toLowerCase()));
        
        let statusBadge = "";
        let evidenceText = "";

        if (isMatched) {
            matchedCount++;
            statusBadge = `
                <span class="bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] text-[11px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <i class="fa-solid fa-check text-[#14a800]"></i> MATCH
                </span>
            `;
            // Try to find a sentence containing a keyword, or use fallback
            let foundSentence = skill.evidenceFallback || "Found in resume credentials.";
            const sentences = currentCandidate.resumeText.split(/[.\n]/);
            for (let s of sentences) {
                if (skill.keywords.some(k => s.toLowerCase().includes(k))) {
                    foundSentence = s.trim();
                    break;
                }
            }
            evidenceText = `<span class="text-slate-800 font-medium">"${foundSentence}"</span>`;
        } else {
            statusBadge = `
                <span class="bg-rose-50 text-rose-700 border border-rose-200 text-[11px] font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1">
                    <i class="fa-solid fa-xmark text-rose-600"></i> MISSING
                </span>
            `;
            evidenceText = `<span class="text-slate-400 italic">Not explicitly detected in candidate dossier (Probing Area)</span>`;
        }

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3">
                    <div class="font-bold text-[#001e00]">${skill.name}</div>
                    <div class="text-[10px] text-slate-400 font-mono">Keywords: ${skill.keywords.slice(0, 3).join(', ')}</div>
                </td>
                <td class="p-3 text-center">
                    ${statusBadge}
                </td>
                <td class="p-3">
                    ${evidenceText}
                </td>
            </tr>
        `;
    }).join('');

    // Update Summary Chip
    const matchPct = Math.round((matchedCount / totalCount) * 100);
    const chip = document.getElementById('skills-match-summary-chip');
    chip.textContent = `${matchedCount} of ${totalCount} Skills Matched (${matchPct}% Direct Fit)`;
    
    if (matchPct >= 75) {
        chip.className = "bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] text-xs font-bold px-3 py-1.5 rounded-lg";
    } else if (matchPct >= 50) {
        chip.className = "bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold px-3 py-1.5 rounded-lg";
    } else {
        chip.className = "bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold px-3 py-1.5 rounded-lg";
    }
}

function selectBenchmarkRole(roleId) {
    currentSelectedRoleId = roleId;
    evaluateAndRenderCandidate(currentCandidate);
}

// REAL CLIENT-SIDE PDF UPLOAD
function setupPDFDropZone() {
    const dropZone = document.getElementById('pdf-drop-zone');
    const fileInput = document.getElementById('pdf-file-input');

    if (dropZone && fileInput) {
        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                fileInput.files = e.dataTransfer.files;
                handlePDFUpload({ target: { files: e.dataTransfer.files } });
            }
        });
    }
}

async function handlePDFUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const status = document.getElementById('upload-status-badge');
    status.classList.remove('hidden');
    status.className = "text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 block";
    status.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> Parsing PDF with client-side PDF.js...`;

    try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let extractedText = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const text = content.items.map(it => it.str).join(" ");
            extractedText += text + "\n";
        }

        if (!extractedText.trim()) {
            throw new Error("No readable text found in PDF. Make sure it is not a scanned image.");
        }

        // Sanitize PII
        let sanitized = extractedText;
        sanitized = sanitized.replace(/(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4,6}/g, "[PHONE_REDACTED]");
        sanitized = sanitized.replace(/\b\d{10,17}\b/g, "[NID_REDACTED]");
        sanitized = sanitized.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, "[EMAIL_REDACTED]");

        // Dynamic candidate object
        const customCandidate = {
            id: `CAN-UPL-${Math.floor(1000 + Math.random() * 9000)}`,
            title: `Uploaded: ${file.name}`,
            skills: ["Extracted Domain Credentials", "Direct PDF Parse", "Verified Competencies"],
            impactStats: ["Parsed via client-side PDF.js", "Benchmarked across 4 roles", "PII Sanitized"],
            resumeText: sanitized
        };

        currentCandidate = customCandidate;
        evaluateAndRenderCandidate(customCandidate);

        status.className = "text-xs font-bold px-3 py-1 rounded-full bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] block";
        status.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Successfully Analyzed ${file.name} (${pdf.numPages} page(s))`;
        confetti({ particleCount: 45, spread: 65, origin: { y: 0.6 } });

    } catch (err) {
        console.error(err);
        status.className = "text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 block";
        status.innerHTML = `<i class="fa-solid fa-triangle-exclamation mr-1"></i> Parse Error: ${err.message}`;
    }
}

// Action Handlers
function triggerInterviewKit() {
    const box = document.getElementById('action-result-box');
    const title = document.getElementById('action-result-title');
    const body = document.getElementById('action-result-body');

    const role = ENTERPRISE_ROLES.find(r => r.id === currentSelectedRoleId) || ENTERPRISE_ROLES[0];

    title.textContent = `Generated Interview Kit: ${role.title}`;
    body.innerHTML = `
        <div class="space-y-3">
            <div class="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span class="font-bold text-[#001e00] block mb-1">Targeted Gap-Probing Question:</span>
                <p class="italic text-slate-700">"${role.interviewQuestion}"</p>
                <div class="mt-2 text-[11px] text-[#14a800] font-semibold">
                    <strong>Hiring Manager Rubric:</strong> Look for structured crisis communication, data verification, and cross-functional leadership.
                </div>
            </div>
        </div>
    `;
    box.classList.remove('hidden');
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
}

function triggerMicroLearning() {
    const box = document.getElementById('action-result-box');
    const title = document.getElementById('action-result-title');
    const body = document.getElementById('action-result-body');

    title.textContent = `Adaptive 30-Day Onboarding Knowledge Quiz`;
    body.innerHTML = `
        <div class="p-4 bg-white rounded-xl border border-slate-200 space-y-3">
            <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-[#001e00]">DAY 3 KNOWLEDGE CHECK: Pharmacovigilance SOP</span>
                <span class="bg-[#f0fdf4] text-[#14a800] text-[10px] font-bold px-2 py-0.5 rounded">Interactive</span>
            </div>
            <p class="text-xs text-slate-700">What is the mandatory timeframe for reporting an Adverse Drug Reaction (ADR) to Medical Affairs?</p>
            <div class="space-y-1.5">
                <button onclick="alert('Correct! 24-hour mandatory reporting under corporate SOP Section 4.2.')" class="w-full text-left p-2 rounded border border-slate-200 hover:bg-[#f0fdf4] text-xs">
                    A) Mandatory initial report within 24 hours
                </button>
                <button onclick="alert('Incorrect. Regulatory SOP requires notification within 24 hours.')" class="w-full text-left p-2 rounded border border-slate-200 hover:bg-slate-50 text-xs">
                    B) Within 7 working days via monthly log
                </button>
            </div>
        </div>
    `;
    box.classList.remove('hidden');
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function triggerCommsPost() {
    const box = document.getElementById('action-result-box');
    const title = document.getElementById('action-result-title');
    const body = document.getElementById('action-result-body');

    title.textContent = `Internal Announcement Spotlight Card`;
    body.innerHTML = `
        <div class="p-4 bg-[#001e00] text-white rounded-xl space-y-2">
            <span class="text-[10px] font-bold uppercase tracking-wider text-[#14a800]">NEW TEAM MEMBER</span>
            <h4 class="font-bold text-sm text-white">Please Welcome Our New Colleague!</h4>
            <p class="text-xs text-slate-300">Bringing verified domain excellence and operational leadership to drive strategic impact across our key enterprise initiatives.</p>
        </div>
    `;
    box.classList.remove('hidden');
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeActionResult() {
    document.getElementById('action-result-box').classList.add('hidden');
}
