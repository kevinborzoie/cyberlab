// --- CORE EV SIMULATION STATE ---
const STATE = {
    actualBatteryPercent: 88, // The true state of the battery
    reportedBatteryPercent: 88, // What the MCU sees
    motorPowerOutput: 100, // Percentage of max power
    isAttackActive: true,
    limpModeThreshold: 30, // Threshold to enter limp mode
    CAN_ID_BATTERY: '0x101', // CAN ID for Battery Status
    CAN_ID_THROTTLE: '0x205', // CAN ID for Motor Throttle Command
    logCounter: 0,
};

// DOM Elements
let logElement, stateDisplay, statusMessage, resultsElement;

/**
 * Initializes DOM element references once the document is loaded.
 */
function initDomReferences() {
    logElement = document.getElementById('can-log');
    stateDisplay = document.getElementById('state-display');
    statusMessage = document.getElementById('status-message');
    resultsElement = document.getElementById('results');
}

/**
 * Converts a percentage value (0-100) to a two-digit hexadecimal string.
 * @param {number} value
 * @returns {string} Hexadecimal data byte.
 */
function decToHexData(value) {
    return value.toString(16).toUpperCase().padStart(2, '0');
}

/**
 * Simulates the physical effects (Limp Mode) based on reported battery level.
 */
function updateCarFunctionality() {
    let reportedLevel = STATE.reportedBatteryPercent;
    let power = 100;
    let message = '';
    let messageClass = 'hidden';

    if (reportedLevel < STATE.limpModeThreshold) {
        // Limp Mode Activated due to perceived low battery
        power = 30; // Throttle power
        message = 'CRITICAL: LOW BATTERY. Limp Mode Activated. Motor Power Throttled.';
        messageClass = 'bg-red-200 text-red-800 border-red-500 text-glow';
    } else {
        power = 100;
        message = 'Normal Operation.';
        messageClass = 'bg-green-200 text-green-800';
    }

    STATE.motorPowerOutput = power;
    statusMessage.textContent = message;
    statusMessage.className = `mt-6 p-3 rounded-lg font-semibold text-center ${messageClass}`;
    statusMessage.classList.remove('hidden');
}

/**
 * Renders the current state to the dashboard UI.
 */
function renderState() {
    // Ensure DOM elements are available
    if (!stateDisplay || !statusMessage) return;

    const isCompromised = STATE.actualBatteryPercent !== STATE.reportedBatteryPercent;
    // Apply text-glow to compromised power output
    const powerColor = STATE.motorPowerOutput < 90 ? 'text-red-400 font-bold text-xl text-glow' : 'text-green-400 font-bold text-xl';

    stateDisplay.innerHTML = `
        <div class="p-3 bg-gray-700 rounded-lg">
            <p class="text-sm text-gray-400">Actual Battery Level (BMS ECU)</p>
            <p class="text-green-400 font-bold text-2xl">${STATE.actualBatteryPercent}%</p>
        </div>
        <div class="p-3 bg-gray-700 rounded-lg ${isCompromised ? 'border-2 border-red-500' : ''}">
            <p class="text-sm text-gray-400">Reported Battery Level (MCU Received)</p>
            <p class="${isCompromised ? 'text-red-500 font-bold text-2xl text-glow' : 'text-green-400 font-bold text-2xl'}">${STATE.reportedBatteryPercent}%</p>
        </div>
        <div class="p-3 bg-gray-700 rounded-lg">
            <p class="text-sm text-gray-400">Motor Power Output</p>
            <p class="${powerColor}">${STATE.motorPowerOutput}%</p>
        </div>
    `;
    updateCarFunctionality();
}

/**
 * Simulates a single tick of CAN bus traffic, including legitimate and malicious messages.
 */
function simulateCanTraffic() {
    STATE.logCounter++;
    const timestamp = (STATE.logCounter * 0.1).toFixed(1).padStart(5, '0');

    // 1. Legitimate message from the real BMS (always high battery)
    const trueBatteryHex = decToHexData(STATE.actualBatteryPercent);
    const legitMsg = `[${timestamp}] ID:${STATE.CAN_ID_BATTERY} DATA:${trueBatteryHex} 00 00 00 00 00 00 (Source: BMS)`;
    logMessage(legitMsg, false);

    // 2. Malicious message injection
    if (STATE.isAttackActive && STATE.logCounter % 5 === 0) {
        // Every 500ms, a malicious node injects a low battery signal (20%)
        const maliciousReport = 20;
        const maliciousHex = decToHexData(maliciousReport);
        const maliciousMsg = `[${timestamp}] ID:${STATE.CAN_ID_BATTERY} DATA:${maliciousHex} 00 00 00 00 00 00 (Source: Unknown/Compromised)`;
        logMessage(maliciousMsg, true);

        // Since CAN is a broadcast protocol and lacks authentication, the last received message wins.
        // This simulates the MCU processing the malicious frame.
        STATE.reportedBatteryPercent = maliciousReport;
    } else if (STATE.logCounter % 5 !== 0) {
        // In non-attack cycles, the legitimate message is processed.
        STATE.reportedBatteryPercent = STATE.actualBatteryPercent;
    }

    // 3. Throttle Command (Example of downstream traffic from MCU based on reported battery)
    const throttleHex = decToHexData(STATE.motorPowerOutput);
    const throttleMsg = `[${timestamp}] ID:${STATE.CAN_ID_THROTTLE} DATA:${throttleHex} FF 00 00 00 00 00 (Source: MCU)`;
    logMessage(throttleMsg, false);

    renderState();
}

/**
 * Appends a message to the CAN log display.
 * @param {string} message - The log string.
 * @param {boolean} isMalicious - If true, highlights the message in red.
 */
function logMessage(message, isMalicious) {
    if (!logElement) return;

    const entry = document.createElement('div');
    entry.textContent = message;
    if (isMalicious) {
        entry.className = 'text-red-500 font-bold';
    }
    logElement.appendChild(entry);
    
    // Keep log scrollable to the bottom
    logElement.scrollTop = logElement.scrollHeight;

    // Limit log size for performance
    while (logElement.children.length > 50) {
        logElement.removeChild(logElement.firstChild);
    }
}

// --- QUIZ LOGIC ---

/**
 * Handles the submission of answers and displays results.
 */
function submitAnswers() {
    const q1Answer = document.querySelector('input[name="q1"]:checked')?.value;
    const q2Answer = document.querySelector('input[name="q2"]:checked')?.value;
    const mitigationProposal = document.getElementById('mitigation-proposal').value.trim();

    let score = 0;
    let feedback = '<h3>Analysis Results</h3>';

    // Q1 Check: C) Message Spoofing/Injection
    if (q1Answer === 'C') {
        score++;
        feedback += '<p class="text-green-700 font-semibold">Q1 Correct: The attack is Message Spoofing/Injection. The attacker is flooding the bus with a fake high-priority message (low battery).</p>';
    } else {
        feedback += '<p class="text-red-700 font-semibold">Q1 Incorrect. The correct answer is C: Message Spoofing/Injection.</p>';
    }

    // Q2 Check: B) Actual Battery State (CAN ID 0x101)
    if (q2Answer === 'B') {
        score++;
        feedback += '<p class="text-green-700 font-semibold">Q2 Correct: The malicious traffic is spoofing the Actual Battery State (CAN ID 0x101), which is used by the MCU to determine Limp Mode status.</p>';
    } else {
        feedback += '<p class="text-red-700 font-semibold">Q2 Incorrect. The correct answer is B: Actual Battery State (CAN ID 0x101).</p>';
    }

    // Q3 Feedback (Qualitative)
    if (mitigationProposal.length > 20) {
        feedback += '<p class="mt-4 font-semibold text-gray-800">Q3 Proposal Review:</p>';
        if (mitigationProposal.toLowerCase().includes('authentication') || 
            mitigationProposal.toLowerCase().includes('mac') || 
            mitigationProposal.toLowerCase().includes('encryption') ||
            mitigationProposal.toLowerCase().includes('segmentation')) {
            feedback += '<p class="text-green-700">Your proposed mitigation addresses key security concepts (e.g., authentication, segmentation). Excellent thinking!</p>';
        } else {
            feedback += '<p class="text-yellow-700">Your proposal is noted. For CAN bus protection, consider strategies like **Message Authentication Codes (MACs)** or **Network Segmentation** via a secure gateway.</p>';
        }
    } else {
        feedback += '<p class="text-yellow-700">Please provide a more detailed proposal for Q3.</p>';
    }

    const totalScore = 2;
    feedback += `<p class="mt-4 text-xl font-bold">Total Score: ${score} / ${totalScore}</p>`;

    if (resultsElement) {
        resultsElement.innerHTML = feedback;
        resultsElement.classList.remove('hidden');
        resultsElement.className = `mt-4 p-4 rounded-lg shadow-lg ${score === totalScore ? 'bg-blue-100' : 'bg-red-100'} border-l-4 ${score === totalScore ? 'border-blue-500' : 'border-red-500'}`;
    }
}

// --- SIMULATION CONTROL ---
let simulationInterval;
function startSimulation() {
    if (simulationInterval) clearInterval(simulationInterval);
    // Ensure all references are initialized before starting the interval
    initDomReferences(); 
    simulationInterval = setInterval(simulateCanTraffic, 100); // 100ms interval
    renderState(); // Initial render
}

// Attach to the global scope so it can be called from index.html's onclick attribute
window.submitAnswers = submitAnswers;
window.startSimulation = startSimulation;

// Start the simulation immediately after all functions are defined and the script is executed.
// Since the script tag is at the bottom of the body, the DOM elements are guaranteed to be available.
startSimulation();