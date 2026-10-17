// RetainPulse 360 - Dedicated Workforce Retention Monitor & Flight-Risk Engine

let WORKFORCE = [
    {
        id: "EMP-1042",
        name: "Tanvir Ahmed",
        role: "Territory Sales Lead",
        dept: "Sales & Field Operations",
        riskTier: "High",
        flightRisk: 88,
        whyReason: "Paid 19% below market salary median + approached by competitor with rival offer.",
        salary: "$28,000",
        staySteps: [
            "1. Market Pay Match: Adjust compensation by +15% to close compa-ratio gap.",
            "2. Career Elevation: Promote to Senior Area Lead with high-profile territory.",
            "3. Executive Stay-Interview: 1-on-1 meeting with VP of Commercial Sales within 7 days."
        ]
    },
    {
        id: "EMP-2190",
        name: "Arifur Islam",
        role: "QC Chemist",
        dept: "Plant & Operations",
        riskTier: "High",
        flightRisk: 76,
        whyReason: "Night shift fatigue + 2.9 years without rotation to R&D formulation lab.",
        salary: "$24,000",
        staySteps: [
            "1. Lab Rotation: Transition to day-shift R&D analytical method development team.",
            "2. Hardship Pay: Provide temporary shift compensation stipend.",
            "3. Development: Sponsor advanced HPLC chromatography certification."
        ]
    },
    {
        id: "EMP-1420",
        name: "Kamrul Hasan",
        role: "Medical Representative",
        dept: "Sales & Field Operations",
        riskTier: "High",
        flightRisk: 82,
        whyReason: "High regional travel expenses eating into low base salary.",
        salary: "$18,000",
        staySteps: [
            "1. Expense Relief: Increase monthly motorcycle travel allowance cap by $60.",
            "2. Performance Bonus: Introduce milestone incentive on target attainment.",
            "3. Mentorship: Pair with Senior Area Manager for sales coaching."
        ]
    },
    {
        id: "EMP-2511",
        name: "Mahmudul Haque",
        role: "Maintenance Engineer",
        dept: "Plant & Operations",
        riskTier: "Moderate",
        flightRisk: 48,
        whyReason: "Approaching 36 months in role without technical advancement.",
        salary: "$26,000",
        staySteps: [
            "1. Skills Upgrade: Enroll in industrial automation & PLC maintenance program.",
            "2. Role Redesign: Appoint as lead for packaging line safety compliance."
        ]
    },
    {
        id: "EMP-3004",
        name: "Dr. Nusrat Jahan",
        role: "Medical Affairs Manager",
        dept: "Medical & R&D",
        riskTier: "Moderate",
        flightRisk: 31,
        whyReason: "Seeks budget sponsorship to publish clinical observational data.",
        salary: "$48,000",
        staySteps: [
            "1. Academic Sponsorship: Allocate grant for international medical symposium.",
            "2. Strategic Voice: Assign as scientific chair for new product review committee."
        ]
    },
    {
        id: "EMP-0855",
        name: "Sumaiya Rahman",
        role: "Senior HR Specialist",
        dept: "Corporate HR",
        riskTier: "Stable",
        flightRisk: 24,
        whyReason: "Strong compensation parity (0.94 compa-ratio) and high job satisfaction.",
        salary: "$35,000",
        staySteps: [
            "1. Succession Pathway: Nominate for Corporate HR Business Partner track.",
            "2. Recognition: Award annual excellence commendation."
        ]
    }
];

let currentRiskFilter = "ALL";

document.addEventListener('DOMContentLoaded', () => {
    renderSimpleWorkforceRoster();
});

function renderSimpleWorkforceRoster() {
    const tbody = document.getElementById('simple-employee-roster');
    let list = WORKFORCE;

    if (currentRiskFilter !== "ALL") {
        list = list.filter(e => e.riskTier === currentRiskFilter);
    }

    tbody.innerHTML = list.map(emp => {
        let pillClass = "";
        if (emp.riskTier === "High") {
            pillClass = "bg-rose-100 text-rose-800 border border-rose-200";
        } else if (emp.riskTier === "Moderate") {
            pillClass = "bg-amber-100 text-amber-800 border border-amber-200";
        } else {
            pillClass = "bg-emerald-100 text-emerald-800 border border-emerald-200";
        }

        return `
            <tr class="hover:bg-slate-50 transition">
                <td class="p-3">
                    <div class="font-bold text-slate-900">${emp.name}</div>
                    <div class="text-[10px] text-slate-400 font-mono">${emp.id} • ${emp.salary}</div>
                </td>
                <td class="p-3">
                    <div class="text-slate-900 font-semibold">${emp.role}</div>
                    <div class="text-[10px] text-slate-400">${emp.dept}</div>
                </td>
                <td class="p-3">
                    <span class="${pillClass} text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-block">
                        ${emp.flightRisk}% (${emp.riskTier})
                    </span>
                </td>
                <td class="p-3 text-slate-600 max-w-xs">
                    ${emp.whyReason}
                </td>
                <td class="p-3 text-right">
                    <button onclick="openSimpleStayPlan('${emp.id}')" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm transition">
                        <i class="fa-solid fa-bolt mr-1"></i> AI Retention Plan
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function filterByRiskTier(tier) {
    currentRiskFilter = tier;

    // Reset buttons
    ['all', 'high', 'mod', 'stable'].forEach(b => {
        const btn = document.getElementById(`filter-${b}-btn`);
        if (btn) btn.className = "px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold";
    });

    if (tier === 'ALL') document.getElementById('filter-all-btn').className = "px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold";
    else if (tier === 'High') document.getElementById('filter-high-btn').className = "px-3 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-semibold";
    else if (tier === 'Moderate') document.getElementById('filter-mod-btn').className = "px-3 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-semibold";
    else if (tier === 'Stable') document.getElementById('filter-stable-btn').className = "px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold";

    renderSimpleWorkforceRoster();
}

function openSimpleStayPlan(empId) {
    const emp = WORKFORCE.find(e => e.id === empId);
    if (!emp) return;

    document.getElementById('modal-employee-name').textContent = `${emp.name} (${emp.role})`;
    document.getElementById('modal-employee-sub').textContent = `${emp.dept} • Current Flight Risk: ${emp.flightRisk}% (${emp.riskTier})`;

    const content = document.getElementById('modal-checklist-content');
    content.innerHTML = `
        <div class="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-900 mb-3">
            <strong>Root Cause Analysis:</strong> ${emp.whyReason}
        </div>
        <div class="space-y-2">
            <span class="font-bold text-slate-900 block text-xs">Immediate 3-Step HR Retention Checklist:</span>
            ${emp.staySteps.map(step => `
                <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 flex items-start gap-2">
                    <i class="fa-solid fa-square-check text-emerald-600 mt-0.5"></i>
                    <span>${step}</span>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('simple-retention-modal').classList.remove('hidden');
}

function closeSimpleModal() {
    document.getElementById('simple-retention-modal').classList.add('hidden');
}

function commitStayPlan() {
    closeSimpleModal();
    alert("Retention stay-plan recorded and queued for Line Manager action!");
    confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
}

// Client-Side CSV Upload with PapaParse
function handleCSVUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
            try {
                if (!results.data || results.data.length === 0) throw new Error("File empty");

                WORKFORCE = results.data.map((r, i) => ({
                    id: r.EmployeeID || `EMP-${i + 1}`,
                    name: r.EmployeeName || `Employee ${i + 1}`,
                    role: r.Role || "Specialist",
                    dept: r.Department || "Commercial Operations",
                    riskTier: (r.FlightRiskScore >= 0.70 ? "High" : (r.FlightRiskScore >= 0.45 ? "Moderate" : "Stable")),
                    flightRisk: Math.round((r.FlightRiskScore || 0.5) * 100),
                    whyReason: r.ManagerNote || "Compensation parity adjustment needed.",
                    salary: `$${(r.SalaryUSD || 25000).toLocaleString()}`,
                    staySteps: [
                        "1. Adjust salary band to match industry benchmark.",
                        "2. Conduct 1-on-1 retention discovery meeting."
                    ]
                }));

                const high = WORKFORCE.filter(e => e.riskTier === "High").length;
                const mod = WORKFORCE.filter(e => e.riskTier === "Moderate").length;
                const stable = WORKFORCE.filter(e => e.riskTier === "Stable").length;

                document.getElementById('kpi-high-risk-count').textContent = `${high} Employees`;
                document.getElementById('kpi-mod-risk-count').textContent = `${mod} Employees`;
                document.getElementById('kpi-stable-risk-count').textContent = `${stable} Employee${stable > 1 ? 's' : ''}`;

                renderSimpleWorkforceRoster();
                alert(`Loaded ${WORKFORCE.length} employees from ${file.name}`);
                confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });

            } catch (err) {
                alert("CSV Parse Error: " + err.message);
            }
        }
    });
}

function downloadSampleWorkforceCSV() {
    const csv = 
`EmployeeID,EmployeeName,Department,Role,FlightRiskScore,SalaryUSD,ManagerNote
EMP-1042,Tanvir Ahmed,Sales,Territory Sales Lead,0.88,28000,Paid 19% below market median; rival firm courting.
EMP-2190,Arifur Islam,Plant,QC Chemist,0.76,24000,Night shift burnout; desires analytical lab rotation.
EMP-1420,Kamrul Hasan,Sales,Medical Representative,0.82,18000,Rising travel fuel expenses eating into base pay.
EMP-2511,Mahmudul Haque,Plant,Maintenance Engineer,0.48,26000,Approaching 36 months tenure stagnation ceiling.
EMP-3004,Dr. Nusrat Jahan,Medical,Medical Affairs Manager,0.31,48000,Seeks research sponsorship for observational study.
EMP-0855,Sumaiya Rahman,Corporate,Senior HR Specialist,0.24,35000,High compensation parity and job engagement.
`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "RetainPulse_Workforce_Data.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function exportPowerBIDataset() {
    downloadSampleWorkforceCSV();
    alert("Downloaded Power BI CSV dataset!\n\nYou can load this directly into Microsoft Power BI Desktop.");
}
