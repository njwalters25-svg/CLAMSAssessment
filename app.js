// App state
// step -1 = intro (main complaint), 0-4 = CLAMS categories
let currentStep = -1;
let currentSubCat = 0;
let mainComplaint = '';
const selections = {};
const customEntries = {};

// Initialize selections for each category
CLAMS_DATA.forEach(cat => {
    selections[cat.key] = [];
    customEntries[cat.key] = [];
});

// Count total sub-category screens across all CLAMS steps
function getTotalScreens() {
    let total = 1; // intro screen
    CLAMS_DATA.forEach(cat => { total += cat.subCategories.length; });
    return total;
}

function getCurrentScreenIndex() {
    if (currentStep === -1) return 0;
    let idx = 1; // after intro
    for (let i = 0; i < currentStep; i++) {
        idx += CLAMS_DATA[i].subCategories.length;
    }
    idx += currentSubCat;
    return idx;
}

// Render the current step
function render() {
    const area = document.getElementById('question-area');

    // Update progress
    const total = getTotalScreens();
    const current = getCurrentScreenIndex();
    const pct = (current / total) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    document.querySelectorAll('#progress-labels span').forEach((el, i) => {
        if (currentStep === -1) {
            el.className = '';
        } else {
            el.className = i < currentStep ? 'done' : i === currentStep ? 'active' : '';
        }
    });

    // Update nav
    document.getElementById('btn-back').disabled = (currentStep === -1);

    const isLastScreen = currentStep === CLAMS_DATA.length - 1 &&
        currentSubCat === CLAMS_DATA[currentStep].subCategories.length - 1;
    document.getElementById('btn-next').textContent = isLastScreen ? 'See Results' : 'Next';

    // Intro screen
    if (currentStep === -1) {
        renderIntro(area);
        return;
    }

    // CLAMS category screen
    const cat = CLAMS_DATA[currentStep];
    const sub = cat.subCategories[currentSubCat];
    const subTotal = cat.subCategories.length;

    let html = '';

    // Header with sub-category progress
    html += `<div class="step-label">${cat.letter} — ${cat.label}</div>`;
    html += `<div class="step-question">${sub.label}</div>`;
    html += `<div class="step-hint">${cat.hint} <span class="sub-progress">(${currentSubCat + 1} of ${subTotal})</span></div>`;

    // Options
    html += '<div class="options-grid">';
    sub.options.forEach(opt => {
        const selected = selections[cat.key].includes(opt) ? 'selected' : '';
        const tick = selected ? '✓' : '';
        html += `<div class="option-chip ${selected}" onclick="toggleOption('${escapeStr(opt)}')">
            <span class="indicator">${tick}</span>
            <span>${opt}</span>
        </div>`;
    });

    // "None of these" chip
    html += `<div class="option-chip special" onclick="skipSubCat()">
        <span class="indicator"></span>
        <span>None of these — skip</span>
    </div>`;
    html += '</div>';

    // Custom input
    html += `<div class="custom-input-area">
        <input type="text" id="custom-input" placeholder="Or type your own and press Enter..."
               onkeydown="handleCustomKey(event)">
    </div>`;

    // Show custom entries for this category
    const customs = customEntries[cat.key];
    if (customs.length > 0) {
        html += '<div class="custom-tags">';
        customs.forEach((c, i) => {
            html += `<span class="custom-tag">${c} <span class="remove" onclick="removeCustom(${i})">×</span></span>`;
        });
        html += '</div>';
    }

    area.innerHTML = html;
}

function renderIntro(area) {
    let html = '';
    html += '<div class="step-label">Getting Started</div>';
    html += '<div class="step-question">What is your main complaint?</div>';
    html += '<div class="step-hint">Describe what\'s bothering you in a few words</div>';

    // Common complaint chips
    const commonComplaints = [
        "Headache", "Cold / flu", "Digestive upset", "Joint pain",
        "Skin irritation", "Anxiety / stress", "Injury / bruising",
        "Sore throat", "Fatigue / exhaustion", "Muscle pain",
        "Menstrual complaints", "Sleep problems"
    ];

    html += '<div class="options-grid">';
    commonComplaints.forEach(c => {
        const selected = mainComplaint === c ? 'selected' : '';
        const tick = selected ? '✓' : '';
        html += `<div class="option-chip ${selected}" onclick="selectComplaint('${escapeStr(c)}')">
            <span class="indicator">${tick}</span>
            <span>${c}</span>
        </div>`;
    });
    html += '</div>';

    // Custom input for complaint
    html += `<div class="custom-input-area">
        <input type="text" id="complaint-input" placeholder="Or type your complaint here..."
               value="${escapeAttr(mainComplaint && !commonComplaints.includes(mainComplaint) ? mainComplaint : '')}"
               oninput="handleComplaintInput(event)"
               onkeydown="if(event.key==='Enter' && this.value.trim()) goNext()">
    </div>`;

    area.innerHTML = html;
}

function escapeStr(s) {
    return s.replace(/'/g, "\\'");
}

function escapeAttr(s) {
    return s.replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function selectComplaint(c) {
    mainComplaint = mainComplaint === c ? '' : c;
    render();
}

function handleComplaintInput(e) {
    mainComplaint = e.target.value.trim();
}

function toggleOption(opt) {
    const cat = CLAMS_DATA[currentStep];
    const idx = selections[cat.key].indexOf(opt);
    if (idx >= 0) {
        selections[cat.key].splice(idx, 1);
    } else {
        selections[cat.key].push(opt);
    }
    render();
}

function skipSubCat() {
    goNext();
}

function handleCustomKey(e) {
    if (e.key === 'Enter') {
        const val = e.target.value.trim();
        if (val) {
            const cat = CLAMS_DATA[currentStep];
            customEntries[cat.key].push(val);
            e.target.value = '';
            render();
        }
    }
}

function removeCustom(i) {
    const cat = CLAMS_DATA[currentStep];
    customEntries[cat.key].splice(i, 1);
    render();
}

function goBack() {
    if (currentStep === -1) return;

    if (currentSubCat > 0) {
        currentSubCat--;
    } else if (currentStep > 0) {
        currentStep--;
        currentSubCat = CLAMS_DATA[currentStep].subCategories.length - 1;
    } else {
        // Go back to intro
        currentStep = -1;
        currentSubCat = 0;
    }
    render();
}

function goNext() {
    // From intro
    if (currentStep === -1) {
        currentStep = 0;
        currentSubCat = 0;
        render();
        return;
    }

    const cat = CLAMS_DATA[currentStep];
    if (currentSubCat < cat.subCategories.length - 1) {
        currentSubCat++;
        render();
    } else if (currentStep < CLAMS_DATA.length - 1) {
        currentStep++;
        currentSubCat = 0;
        render();
    } else {
        showResults();
    }
}

// Score remedies based on selections
function scoreRemedies() {
    const scores = REMEDIES.map(remedy => {
        let score = 0;
        let matchedItems = {};
        let totalPossible = 0;

        CLAMS_DATA.forEach(cat => {
            const indicators = remedy.indicators[cat.key] || [];
            const selected = selections[cat.key];
            matchedItems[cat.key] = [];

            indicators.forEach(ind => {
                totalPossible++;
                if (selected.includes(ind)) {
                    score++;
                    matchedItems[cat.key].push(ind);
                }
            });
        });

        return {
            remedy,
            score,
            totalPossible,
            matchedItems,
            percentage: totalPossible > 0 ? Math.round((score / totalPossible) * 100) : 0
        };
    });

    scores.sort((a, b) => b.score - a.score);
    return scores;
}

function showResults() {
    document.getElementById('question-area').classList.add('hidden');
    document.getElementById('nav-buttons').classList.add('hidden');
    document.getElementById('progress-fill').style.width = '100%';
    document.querySelectorAll('#progress-labels span').forEach(el => el.className = 'done');

    const results = document.getElementById('results-area');
    results.classList.remove('hidden');

    const scored = scoreRemedies().filter(s => s.score > 0);
    const top = scored.slice(0, 5);

    let html = '';

    // Show main complaint at top
    if (mainComplaint) {
        html += `<div class="complaint-banner">Complaint: <strong>${mainComplaint}</strong></div>`;
    }

    html += '<div class="results-title">Suggested Remedies</div>';

    if (top.length === 0) {
        html += '<p style="text-align:center;color:#666;">No strong matches found. Consider consulting a qualified homeopath for a full case assessment.</p>';
    } else {
        top.forEach((s, i) => {
            const cls = i === 0 ? 'remedy-card top' : 'remedy-card';
            html += `<div class="${cls}">
                <div class="remedy-name">${s.remedy.name}</div>
                <div class="remedy-match">${s.score} matching indicators (${s.percentage}% match)</div>
                <div class="remedy-description">${s.remedy.description}</div>
                <div class="remedy-matches-list">`;

            CLAMS_DATA.forEach(cat => {
                const matches = s.matchedItems[cat.key];
                if (matches.length > 0) {
                    html += `<div><strong>${cat.letter}:</strong> ${matches.join(', ')}</div>`;
                }
            });

            html += '</div></div>';
        });
    }

    // Summary of all selections
    html += '<div class="summary-section">';
    html += '<div class="summary-title">Your CLAMS Profile</div>';
    html += '<div class="summary-tags">';
    CLAMS_DATA.forEach(cat => {
        const all = [...selections[cat.key], ...customEntries[cat.key]];
        all.forEach(item => {
            html += `<span class="summary-tag"><span class="cat">${cat.letter}:</span> ${item}</span>`;
        });
    });
    html += '</div></div>';

    html += '<div class="disclaimer">This tool is for educational purposes only. It is not a substitute for professional homeopathic consultation or medical advice.</div>';

    html += '<button class="restart-btn" onclick="restart()">Start Again</button>';

    results.innerHTML = html;
}

function restart() {
    currentStep = -1;
    currentSubCat = 0;
    mainComplaint = '';
    CLAMS_DATA.forEach(cat => {
        selections[cat.key] = [];
        customEntries[cat.key] = [];
    });
    document.getElementById('question-area').classList.remove('hidden');
    document.getElementById('nav-buttons').classList.remove('hidden');
    document.getElementById('results-area').classList.add('hidden');
    render();
}

// Start
render();
