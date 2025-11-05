// --- DATA FOR SCENARIO 1 (FDI Attack) ---
const SCENARIO1_DATA = `,Time_S,Leader_Velocity_mps,Time_S,Follower_Velocity_before_Attack_mps,Time_S,Follower_Velocity_after_Attack_mps,Time_S,Distance_between_vehicles_before_attack,Time_S,Distance_between_vehicles_after_attack
,0,0,0,0,0,0,0,5,0,5
,1,0.0002408158,1,0.003980084,1,0.00398008,1,5,1,5
,5,0.00115914,5,0.0807273,5,0.0807273,5,5,5,5
,10,3.98505166,10,3.99485681,10,4.36001791,10,5.00720068,10,5.24613068
,20,3.98436202,20,3.98436202,20,3.98298121,20,4.99999999,20,4.99809568
,30,3.98203198,30,3.98203198,30,3.98203341,30,5,30,5.00000943
,40,3.98125220,40,3.9812522,40,3.98125223,40,4.99999997,40,4.99999997
,41,3.98133665,41,4.60701999,41,5.71366452,41,4.38890369,41,3.88204598 <--- ATTACK BEGINS
,42,3.98144961,42,4.11580491,42,5.29538239,42,4.03083466,42,2.25864956
,43,3.98158933,43,3.94741596,43,4.54612161,43,4.00252288,43,1.32862909
,44,3.98175362,44,3.9280173,44,3.90040383,44,4.05142769,44,1.09509963
,45,3.98193993,45,3.93342114,45,3.58190846,45,4.10279572,45,1.38813655
,50,3.98309047,50,3.94747951,50,4.01071167,50,4.30740307,50,1.81148332
,80,3.98208697,80,3.97447425,80,3.98208697,80,4.85074647,80,1.81571428
,100,4.9788155,100,4.97608047,100,4.97880357,100,4.9463015,100,1.81569938
,120,4.98025592,120,4.97926857,120,4.98025592,120,4.98060482,120,1.81571429
,140,4.97701044,140,4.97665377,140,4.97701044,140,4.99299245,140,1.81571429
,160,4.98077021,160,4.98064134,160,4.98077021,160,4.99746785,160,1.81571429
,180,4.97799146,180,4.97794489,180,4.97799146,180,4.99908498,180,1.81571429
,200,4.97868405,200,4.97866722,200,4.97868405,200,4.99966934,200,1.81571429
,220,4.98035307,220,4.98034699,220,4.98035307,220,4.99988051,220,1.81571429
,240,4.97698623,240,4.97698403,240,4.97698623,240,4.99995682,240,1.81571429
,260,4.98071186,260,4.98071107,260,4.98071186,260,4.9999844,260,1.81571429
,280,4.97810917,280,4.97810889,280,4.97810917,280,4.99999436,280,1.81571429
,300,4.97855379,300,4.97855369,300,4.97855379,300,4.99999796,300,1.81571429
`;

// --- DATA FOR SCENARIO 2 (Time-Varying Delay) ---
const SCENARIO2_DATA = `,Time_S,Leader_Velocity_mps,Time_S,Follower_Velocity_without_delay_mps,Time_S,Follower_Velocity_with_delay_mps,Time_S,Distance_between_vehicles_without_delay,Time_S,Distance_between_vehicles_with_delay
,0,0,0,0,0,0,0,5.13,0,5.13
,5,0.00258431,5,0,5,0,5,4.99211919,5,4.98660451
,6,6.2453903,6,6.03741962,6,0,6,5.21125347,6,8.18241116 <--- START OF DYNAMIC CHANGES
,7,9.73540519,7,9.9247273,7,1.46047413,7,5.26399192,7,16.564597
,8,9.91457128,8,10.10206002,8,7.51807037,8,5.04604289,8,21.87230527 <--- MAX DISTANCE DEVIATION
,9,9.92107906,9,9.97460756,9,12.77330938,9,4.92756388,9,21.58382524
,10,9.92332128,10,9.90766028,10,17.32961759,10,4.91534268,10,16.4006168
,11,9.92596533,11,9.90174443,11,16.1946927,11,4.93843684,11,8.73114663
,12,9.92927748,12,9.91545146,12,11.36212273,12,4.95778313,12,4.97674818
,21,14.85775175,21,14.81136918,21,10.47372899,21,4.99792091,21,9.09103522
,30,19.96855252,30,19.98114383,30,20.50463616,30,4.92877365,30,8.69982336
,50,19.98358504,50,19.96993467,50,19.12052131,50,4.91951169,50,6.54756979
,51,11.48755602,51,11.48900536,51,22.47788043,51,4.76524567,51,1.22093624
,52,10.20517088,52,10.05630107,52,13.28198368,52,4.90478945,52,-6.01444748 <--- NEGATIVE DISTANCE (COLLISION)
,53,10.16049103,53,10.12571754,53,5.59914704,53,4.99479772,53,-5.06036831
,54,10.15073645,54,10.16931702,54,5.82108866,54,4.99710458,54,0.00734173
,60,10.11934945,60,10.11662291,60,10.10959943,60,4.94544619,60,0.61805366
,100,10.02363752,100,10.01669262,100,9.61802153,100,4.95758822,100,1.14521684
,150,10.00331053,150,9.99655759,150,9.62898257,150,4.95576614,150,1.03848412
,200,10.00008819,200,9.99346439,200,9.66532223,200,4.95395275,200,0.9378797
,250,10.00075669,250,9.99452884,250,9.71112849,250,4.9522436,250,0.85503931
,300,9.99933101,300,9.99344318,300,9.75783978,300,4.95064191,300,0.78086544
`;

// --- CORE EV SIMULATION STATE (LIMP MODE) ---
const LIMP_STATE = {
    actualBatteryPercent: 88,
    reportedBatteryPercent: 88,
    motorPowerOutput: 100,
    isAttackActive: true,
    limpModeThreshold: 30,
    CAN_ID_BATTERY: '0x101',
    CAN_ID_THROTTLE: '0x205',
    logCounter: 0,
    status: 'NORMAL OPERATION'
};

// DOM Elements
let contentContainer, moduleTitle, backButton;
let logElement, stateDisplay, resultsElement;
let currentScenario = '';
let simulationInterval; // Handle for the limp mode interval

/**
 * Initializes DOM element references once the document is loaded.
 */
function initDomReferences() {
    // Crucial: Use getElementById to reference elements created in index.html
    contentContainer = document.getElementById('content-container');
    moduleTitle = document.getElementById('module-title');
    backButton = document.getElementById('back-button');
    
    // Elements only available after a scenario page is loaded
    logElement = document.getElementById('can-log');
    stateDisplay = document.getElementById('state-display');
    resultsElement = document.getElementById('results');
}

// --- RENDERING FUNCTIONS (LIMP MODE SPECIFIC) ---

function decToHexData(value) {
    // Ensure value is clamped between 0 and 100 before conversion
    const clampedValue = Math.max(0, Math.min(100, Math.round(value)));
    return clampedValue.toString(16).toUpperCase().padStart(2, '0');
}

function updateCarFunctionality() {
    // Attack logic for Limp Mode: Injects a false, low battery signal
    if (LIMP_STATE.isAttackActive) {
        LIMP_STATE.reportedBatteryPercent = 15; // False low reading
    } else {
        LIMP_STATE.reportedBatteryPercent = LIMP_STATE.actualBatteryPercent;
    }

    // Limp Mode Trigger
    if (LIMP_STATE.reportedBatteryPercent < LIMP_STATE.limpModeThreshold) {
        LIMP_STATE.motorPowerOutput = 20; // Drastic power reduction
        LIMP_STATE.status = 'LIMP MODE ACTIVE';
    } else {
        LIMP_STATE.motorPowerOutput = 100;
        LIMP_STATE.status = 'NORMAL OPERATION';
    }
}

function simulateCanTraffic() {
    if (currentScenario !== 'limp-mode') {
        clearInterval(simulationInterval);
        return;
    }

    LIMP_STATE.logCounter++;
    updateCarFunctionality();

    const timestamp = (LIMP_STATE.logCounter * 0.1).toFixed(1).padStart(4, '0');

    // Message 1: Real Battery Status (CAN ID 0x101) - BENIGN
    let logEntry = `[${timestamp}] 0x101 # ${decToHexData(LIMP_STATE.actualBatteryPercent)}0000000000`;

    // Message 2: Reported Battery Status (CAN ID 0x101) - ATTACK
    if (LIMP_STATE.isAttackActive) {
        // Attack message is injected with the same ID, causing an overwrite/spoof
        logEntry += `\n[${timestamp}] <span class="text-glow text-red-400">0x101 # ${decToHexData(LIMP_STATE.reportedBatteryPercent)}0000000000 (SPOOFED)</span>`;
    }

    // Message 3: Motor Throttle Command (CAN ID 0x205) - EFFECT
    logEntry += `\n[${timestamp}] 0x205 # ${decToHexData(LIMP_STATE.motorPowerOutput)}0000000000 (POWER CMD)`;

    if (logElement) {
        logElement.innerHTML = logEntry + '\n' + logElement.innerHTML;
        // Keep log scroll to top
    }
    
    renderState(); // Update the state display panel
}

function renderState() {
    if (stateDisplay) {
        stateDisplay.innerHTML = `
            <p><span class="font-bold">Actual Battery:</span> ${LIMP_STATE.actualBatteryPercent}%</p>
            <p><span class="font-bold">Reported Battery:</span> <span class="${LIMP_STATE.isAttackActive ? 'text-red-500 font-bold' : ''}">${LIMP_STATE.reportedBatteryPercent}%</span></p>
            <p><span class="font-bold">Motor Power:</span> <span class="${LIMP_STATE.motorPowerOutput < 100 ? 'text-red-500 font-bold' : ''}">${LIMP_STATE.motorPowerOutput}%</span></p>
            <p><span class="font-bold">Status:</span> <span class="${LIMP_STATE.status === 'LIMP MODE ACTIVE' ? 'text-red-500 font-bold text-glow' : 'text-green-600'}">${LIMP_STATE.status}</span></p>
        `;
    }
}

// Function to attach to the button
function stopLimpModeAttack() {
    LIMP_STATE.isAttackActive = false;
    renderState();
}

// --- UNIVERSAL PAGE LOADING ---

function renderPage(title, contentHTML) {
    if (!contentContainer || !moduleTitle || !backButton) {
        console.error("Core DOM elements not found!");
        return;
    }

    moduleTitle.textContent = title;
    contentContainer.innerHTML = contentHTML;

    // Show/hide back button
    if (title.includes('Home')) {
        backButton.classList.add('hidden');
    } else {
        backButton.classList.remove('hidden');
    }

    // Re-initialize DOM references for scenario-specific elements
    initDomReferences();

    // Start simulation only for Limp Mode
    if (currentScenario === 'limp-mode') {
        startSimulation();
    } else if (currentScenario === 'scenario1' || currentScenario === 'scenario2') {
        // Ensure log element exists before trying to display data
        if (logElement) {
            displayLogData(currentScenario === 'scenario1' ? SCENARIO1_DATA : SCENARIO2_DATA);
        } else {
            console.error("Log element not found for scenario 1 or 2");
        }
    }
}

/**
 * Converts CSV-like data to a formatted log display
 */
function displayLogData(csvData) {
    const lines = csvData.trim().split('\n');
    let formattedLog = '';

    // Header (first line)
    const headerLine = lines[0].split(',').filter(s => s.trim() !== '');
    // Skip empty leading string from split
    formattedLog += `\nTime | ${headerLine.slice(1).join(' | ')}\n`;
    formattedLog += '-'.repeat(150) + '\n'; // Fixed width for alignment

    // Data lines
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].split(',');
        // Filter out empty strings from the split (especially leading/trailing commas)
        const dataPoints = line.filter(s => s.trim() !== '' || s === ''); // Keep empty fields
        
        if (dataPoints.length > 0) {
            // Time is the first element (index 1 after empty string)
            let time = dataPoints[1]; 
            let logLine = String(time).padStart(4, ' ') + ' | ';
            
            // Remaining data points (skip the first empty one)
            let data = dataPoints.slice(2);
            let highlight = '';

            // Check if the last data point contains the highlight indicator
            if (data[data.length - 1] && data[data.length - 1].includes('<---')) {
                highlight = data.pop(); 
            }

            // Map and format remaining data points, skipping time indices
            let formattedData = [];
            for(let j = 0; j < data.length; j++) {
                // Skip the extra Time_S columns
                if (j % 2 === 1) { 
                    const num = parseFloat(data[j]);
                    // Use toFixed(4) for consistency, handle non-numbers gracefully
                    formattedData.push(isNaN(num) ? data[j].padStart(12, ' ') : num.toFixed(4).padStart(12, ' '));
                }
            }
            logLine += formattedData.join(' | ');

            if (highlight.includes('<---')) {
                logLine = `<span class="text-glow text-red-400">${logLine} ${highlight}</span>`;
            }

            formattedLog += logLine + '\n';
        }
    }
    if (logElement) {
        logElement.innerHTML = formattedLog;
    }
}

// --- PAGE CONTENT DEFINITIONS (Home, Limp Mode, Scenario 1, Scenario 2) ---

function loadHomePage() {
    currentScenario = 'home';
    const html = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <a href="#scenario=limp-mode" class="nav-button bg-red-600 hover:bg-red-700">Limp Mode Attack</a>
            <a href="#scenario=scenario1" class="nav-button bg-green-600 hover:bg-green-700">Scenario 1: FDI Attack (CACC)</a>
            <a href="#scenario=scenario2" class="nav-button bg-blue-600 hover:bg-blue-700">Scenario 2: Time-Varying Delay (CACC)</a>
        </div>
        <div class="mt-12 p-6 card bg-yellow-100 border-l-4 border-yellow-500">
            <p class="font-semibold text-lg text-yellow-800">Instructions:</p>
            <ul class="list-disc ml-6 text-yellow-700">
                <li>Select a scenario to analyze the provided data logs and answer the corresponding questions.</li>
                <li>In the "Limp Mode Attack," the log updates in real-time. In Scenarios 1 and 2, the complete dataset is provided.</li>
                <li>Click "Submit" to see your immediate results and feedback.</li>
            </ul>
        </div>
    `;
    renderPage('Home: Select a Scenario', html);
}

function loadLimpMode() {
    currentScenario = 'limp-mode';
    const html = `
        <div class="card bg-white p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Scenario Briefing: Limp Mode Attack</h2>
            <p class="text-gray-700 mb-4">
                The **Motor Control Unit (MCU)** of a new Hybrid Electric Vehicle (HEV) is experiencing issues. The driver reports sudden, drastic power throttling and a persistent **Low Battery Warning**, even when the battery is fully charged. You suspect a **CAN Bus Injection Attack** forcing the vehicle into a **Limp Mode** state.
            </p>
            <p class="font-semibold text-red-600">Observation Mode: The CAN Log is updating live. Use the controls to stop the attack and return the vehicle to normal operation.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- Vehicle State Panel -->
            <div class="card bg-gray-50 p-4">
                <h3 class="text-xl font-bold mb-3 text-gray-700 border-b pb-2">Vehicle State</h3>
                <div id="state-display" class="space-y-1 text-lg"></div>
            </div>

            <!-- Simulation Controls -->
            <div class="card bg-gray-100 p-4 flex flex-col justify-around">
                <h3 class="text-xl font-bold mb-3 text-gray-700 border-b pb-2">Simulation Controls</h3>
                <button onclick="stopLimpModeAttack()" class="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-150 transform hover:scale-[1.02]">
                    Simulate Attack Mitigation (Stop Attack)
                </button>
            </div>
        </div>

        <div class="card bg-white p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">CAN Bus Log Analysis</h2>
            <div id="can-log" class="log-viewer">
                Awaiting CAN bus traffic...
            </div>
        </div>
        
        <!-- QUESTIONS -->
        <form onsubmit="event.preventDefault(); submitAnswers('limp-mode');" class="card bg-white p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Analysis Questions</h2>
            <div class="space-y-6">
                <!-- Question 1 (CAN ID) -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q1: Based on the log, which CAN ID is being spoofed to trigger Limp Mode?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q1" value="A" id="q1a"> <label for="q1a">A) Motor Power Output (CAN ID 0x205)</label></li>
                        <li><input type="radio" name="q1" value="B" id="q1b"> <label for="q1b">B) Battery State of Charge (CAN ID 0x101)</label></li>
                        <li><input type="radio" name="q1" value="C" id="q1c"> <label for="q1c">C) Vehicle Speed (CAN ID 0x300)</label></li>
                        <li><input type="radio" name="q1" value="D" id="q1d"> <label for="q1d">D) Brake Pedal Position (CAN ID 0x150)</label></li>
                    </ul>
                </div>

                <!-- Question 2 (Payload Value) -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q2: When the attack is active, what hexadecimal data payload value does the spoofed message (ID 0x101) carry?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q2" value="A" id="q2a"> <label for="q2a">A) 0xAA (170 Decimal)</label></li>
                        <li><input type="radio" name="q2" value="B" id="q2b"> <label for="q2b">B) 0x0F (15 Decimal)</label></li>
                        <li><input type="radio" name="q2" value="C" id="q2c"> <label for="q2c">C) 0x50 (80 Decimal)</label></li>
                        <li><input type="radio" name="q2" value="D" id="q2d"> <label for="q2d">D) 0x1E (30 Decimal)</label></li>
                    </ul>
                </div>
            </div>
            
            <!-- Response Question -->
            <div class="mt-6">
                <p class="font-semibold text-lg mb-2">Q3: Propose a high-level mitigation strategy to prevent this type of CAN injection attack on a future vehicle design. (Free Response)</p>
                <textarea id="limp-proposal" class="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500" rows="3" placeholder="Explain your proposal (e.g., encryption, authentication, network segmentation)."></textarea>
            </div>
            
            <button type="submit" class="mt-6 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-150">
                Submit Analysis & View Results
            </button>
            <div id="results" class="mt-4 p-4 rounded-lg hidden"></div>
        </form>
    `;
    renderPage('Module: CAN Bus Injection - Limp Mode Attack', html);
}

function loadScenario1() {
    currentScenario = 'scenario1';
    const html = `
        <div class="card bg-white p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Scenario Briefing: Scenario 1 - FDI Attack (CACC)</h2>
            <p class="text-gray-700 mb-4">
                Autonomous vehicles in a Cooperative Adaptive Cruise Control (CACC) platoon are communicating the leader's velocity to the followers. An attacker has compromised the wireless communication channel and is injecting **False Data** into the velocity signal sent from the leader to the follower.
            </p>
            <p class="font-semibold text-gray-700">Goal: Analyze the log data (Follower Velocity & Distance) to determine the attack's impact on string stability and safety.</p>
        </div>

        <div class="card bg-white p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">CACC Data Log Analysis</h2>
            <p class="text-gray-600 mb-4">The log below shows performance metrics over 300 seconds. Highlighted lines indicate the attack period.</p>
            <div id="can-log" class="log-viewer">
                Loading Scenario 1 Data...
            </div>
        </div>
        
        <!-- QUESTIONS -->
        <form onsubmit="event.preventDefault(); submitAnswers('scenario1');" class="card bg-white p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Analysis Questions</h2>
            <div class="space-y-6">
                <!-- Q1: Time of Max Danger -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q1: At approximately what time (T_S) does the inter-vehicle distance drop to its minimum dangerous level during the attack?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q1" value="A" id="s1q1a"> <label for="s1q1a">A) 10 seconds</label></li>
                        <li><input type="radio" name="q1" value="B" id="s1q1b"> <label for="s1q1b">B) 44 seconds</label></li>
                        <li><input type="radio" name="q1" value="C" id="s1q1c"> <label for="s1q1c">C) 80 seconds</label></li>
                        <li><input type="radio" name="q1" value="D" id="s1q1d"> <label for="s1q1d">D) 120 seconds</label></li>
                    </ul>
                </div>

                <!-- Q2: Immediate effect on Velocity -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q2: What is the most immediate effect of the FDI attack on the Follower's Velocity at T_S = 41?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q2" value="A" id="s1q2a"> <label for="s1q2a">A) A sudden, large decrease in velocity.</label></li>
                        <li><input type="radio" name="q2" value="B" id="s1q2b"> <label for="s1q2b">B) A sudden, large increase in velocity.</label></li>
                        <li><input type="radio" name="q2" value="C" id="s1q2c"> <label for="s1q2c">C) Velocity remains constant at 3.98 mps.</label></li>
                        <li><input type="radio" name="q2" value="D" id="s1q2d"> <label for="s1q2d">D) It immediately enters Limp Mode.</label></li>
                    </ul>
                </div>

                <!-- Q3: String Stability Assessment -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q3: How does the FDI attack specifically impact the platoon's "string stability"?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q3" value="A" id="s1q3a"> <label for="s1q3a">A) It is greatly improved, as vehicle spacing increases.</label></li>
                        <li><input type="radio" name="q3" value="B" id="s1q3b"> <label for="s1q3b">B) It is unaffected, as the velocity errors dampen out quickly.</label></li>
                        <li><input type="radio" name="q3" value="C" id="s1q3c"> <label for="s1q3c">C) It degrades significantly, as distance errors amplify rapidly.</label></li>
                        <li><input type="radio" name="q3" value="D" id="s1q3d"> <label for="s1q3d">D) It causes the vehicles to stop completely.</label></li>
                    </ul>
                </div>
                
                <!-- Q4: Benign Distance State -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q4: What is the target inter-vehicle distance (Distance_between_vehicles_before_attack) the CACC system is aiming for?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q4" value="A" id="s1q4a"> <label for="s1q4a">A) Approximately 1.815 meters</label></li>
                        <li><input type="radio" name="q4" value="B" id="s1q4b"> <label for="s1q4b">B) Approximately 3.985 meters</label></li>
                        <li><input type="radio" name="q4" value="C" id="s1q4c"> <label for="s1q4c">C) Approximately 5.000 meters</label></li>
                        <li><input type="radio" name="q4" value="D" id="s1q4d"> <label for="s1q4d">D) Approximately 5.713 meters</label></li>
                    </ul>
                </div>

                <!-- Q5: Recovery Time -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q5: After the attack (highlighted section) ends, how does the Follower's Distance (Distance_between_vehicles_after_attack) behave?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q5" value="A" id="s1q5a"> <label for="s1q5a">A) It immediately returns to 5.000m and remains stable.</label></li>
                        <li><input type="radio" name="q5" value="B" id="s1q5b"> <label for="s1q5b">B) It oscillates severely before stabilizing around 1.815m.</label></li>
                        <li><input type="radio" name="q5" value="C" id="s1q5c"> <label for="s1q5c">C) It enters a perpetual negative distance (collision).</label></li>
                        <li><input type="radio" name="q5" value="D" id="s1q5d"> <label for="s1q5d">D) It remains at the dangerous minimum distance.</label></li>
                    </ul>
                </div>
            </div>
            
            <!-- Response Question -->
            <div class="mt-6">
                <p class="font-semibold text-lg mb-2">Q6: Explain why the False Data Injection attack on the **velocity** measurement leads to a near-collision (minimum distance) rather than just erratic acceleration. (Free Response)</p>
                <textarea id="s1-proposal" class="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500" rows="3" placeholder="Explain how the incorrect velocity data affects the control loop."></textarea>
            </div>
            
            <button type="submit" class="mt-6 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-150">
                Submit Analysis & View Results
            </button>
            <div id="results" class="mt-4 p-4 rounded-lg hidden"></div>
        </form>
    `;
    renderPage('Module: Scenario 1 - FDI Attack (CACC)', html);
}

function loadScenario2() {
    currentScenario = 'scenario2';
    const html = `
        <div class="card bg-white p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Scenario Briefing: Scenario 2 - Time-Varying Delay</h2>
            <p class="text-gray-700 mb-4">
                Autonomous vehicles in a Cooperative Adaptive Cruise Control (CACC) platoon are experiencing degradation in the wireless communication channel, resulting in a **Time-Varying Delay** in data transfer. The follower vehicle receives outdated information from the leader.
            </p>
            <p class="font-semibold text-red-600">Observation: Note the negative values in the distance column. A negative distance signifies a collision or vehicle overlap.</p>
        </div>

        <div class="card bg-white p-6 mb-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">CACC Data Log Analysis</h2>
            <p class="text-gray-600 mb-4">The log below shows performance metrics with and without the communication delay. Highlighted lines indicate the period of major instability.</p>
            <div id="can-log" class="log-viewer">
                Loading Scenario 2 Data...
            </div>
        </div>
        
        <!-- QUESTIONS -->
        <form onsubmit="event.preventDefault(); submitAnswers('scenario2');" class="card bg-white p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Analysis Questions</h2>
            <div class="space-y-6">
                <!-- Q1: Time of Max Danger (Collision) -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q1: At what approximate time (T_S) does the first definitive collision (negative distance) occur?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q1" value="A" id="s2q1a"> <label for="s2q1a">A) 12 seconds</label></li>
                        <li><input type="radio" name="q1" value="B" id="s2q1b"> <label for="s2q1b">B) 52 seconds</label></li>
                        <li><input type="radio" name="q1" value="C" id="s2q1c"> <label for="s2q1c">C) 60 seconds</label></li>
                        <li><input type="radio" name="q1" value="D" id="s2q1d"> <label for="s2q1d">D) 250 seconds</label></li>
                    </ul>
                </div>

                <!-- Q2: Max Deviation Type -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q2: What is the maximum *positive* deviation from the initial distance (5.13m) caused by the delay?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q2" value="A" id="s2q2a"> <label for="s2q2a">A) ~6.01 meters</label></li>
                        <li><input type="radio" name="q2" value="B" id="s2q2b"> <label for="s2q2b">B) ~16.56 meters</label></li>
                        <li><input type="radio" name="q2" value="C" id="s2q2c"> <label for="s2q2c">C) ~21.87 meters</label></li>
                        <li><input type="radio" name="q2" value="D" id="s2q2d"> <label for="s2q2d">D) ~1.03 meters</label></li>
                    </ul>
                </div>

                <!-- Q3: Stability in the Absence of Delay -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q3: Analyze the "Distance_between_vehicles_without_delay" column. Is the system string stable when no delay is present?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q3" value="A" id="s2q3a"> <label for="s2q3a">A) No, the distance rapidly oscillates out of control.</label></li>
                        <li><input type="radio" name="q3" value="B" id="s2q3b"> <label for="s2q3b">B) Yes, the distance quickly returns to the target value (5.13m) and remains stable.</label></li>
                        <li><input type="radio" name="q3" value="C" id="s2q3c"> <label for="s2q3c">C) It is marginally stable, showing small, persistent oscillations.</label></li>
                        <li><input type="radio" name="q3" value="D" id="s2q3d"> <label for="s2q3d">D) The distance increases linearly over time.</label></li>
                    </ul>
                </div>
                
                <!-- Q4: Velocity Overshoot -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q4: The follower's velocity "with delay" peaks significantly higher than "without delay" around T_S = 10. What is the approximate velocity overshoot in mps?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q4" value="A" id="s2q4a"> <label for="s2q4a">A) 7.4 mps (17.3 - 9.9)</label></li>
                        <li><input type="radio" name="q4" value="B" id="s2q4b"> <label for="s2q4b">B) 1.5 mps (11.4 - 9.9)</label></li>
                        <li><input type="radio" name="q4" value="C" id="s2q4c"> <label for="s2q4c">C) 0.5 mps (10.1 - 9.7)</label></li>
                        <li><input type="radio" name="q4" value="D" id="s2q4d"> <label for="s2q4d">D) 10.0 mps (16.4 - 6.4)</label></li>
                    </ul>
                </div>

                <!-- Q5: Root Cause of Instability -->
                <div>
                    <p class="font-semibold text-lg mb-2">Q5: In this scenario, what is the fundamental cause of the string instability and collision?</p>
                    <ul class="space-y-1 ml-4">
                        <li><input type="radio" name="q5" value="A" id="s2q5a"> <label for="s2q5a">A) The follower is receiving velocity data that is too *high*.</label></li>
                        <li><input type="radio" name="q5" value="B" id="s2q5b"> <label for="s2q5b">B) The follower is receiving position data that is too *low*.</label></li>
                        <li><input type="radio" name="q5" value="C" id="s2q5c"> <label for="s2q5c">C) The follower is reacting to *outdated* leader data, causing over-compensation.</label></li>
                        <li><input type="radio" name="q5" value="D" id="s2q5d"> <label for="s2q5d">D) The leader vehicle suddenly applied the brakes.</label></li>
                    </ul>
                </div>
            </div>
            
            <!-- Response Question -->
            <div class="mt-6">
                <p class="font-semibold text-lg mb-2">Q6: Propose a design modification (not just a network fix) to the CACC controller logic itself that could potentially counteract the negative effects of communication delay. (Free Response)</p>
                <textarea id="s2-proposal" class="w-full border-2 border-gray-300 rounded-lg p-3 focus:ring-indigo-500 focus:border-indigo-500" rows="3" placeholder="Explain your proposal (e.g., predictive model, filtering, sensor fusion)."></textarea>
            </div>
            
            <button type="submit" class="mt-6 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-150">
                Submit Analysis & View Results
            </button>
            <div id="results" class="mt-4 p-4 rounded-lg hidden"></div>
        </form>
    `;
    renderPage('Module: Scenario 2 - Time-Varying Delay (CACC)', html);
}

// --- GLOBAL NAVIGATION AND INITIALIZATION ---

function handleHashChange() {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    const scenario = params.get('scenario');
    
    // Clear simulation interval when changing away from limp mode
    if (simulationInterval) {
        clearInterval(simulationInterval);
        simulationInterval = null;
    }

    switch (scenario) {
        case 'limp-mode':
            loadLimpMode();
            break;
        case 'scenario1':
            loadScenario1();
            break;
        case 'scenario2':
            loadScenario2();
            break;
        default:
            loadHomePage();
            break;
    }
}

// --- GRADING LOGIC ---

function submitAnswers(scenario) {
    let score = 0;
    let feedback = '<h3>Results:</h3>';
    let totalScore = 0; // Total questions graded

    const resultsElement = document.getElementById('results');
    if (!resultsElement) return;
    
    // Reset previous results
    resultsElement.classList.add('hidden');
    resultsElement.innerHTML = '';


    if (scenario === 'limp-mode') {
        totalScore = 2; // Q1 and Q2 are graded
        const q1 = document.querySelector('input[name="q1"]:checked')?.value;
        const q2 = document.querySelector('input[name="q2"]:checked')?.value;
        const q3Text = document.getElementById('limp-proposal')?.value;

        // Q1 Grading: Spoofed ID
        if (q1 === 'B') {
            score++;
            feedback += '<p class="text-green-700">Q1 (CAN ID): Correct. The spoofed message is targeting the **Battery State of Charge (0x101)**.</p>';
        } else {
            feedback += '<p class="text-red-700">Q1 (CAN ID): Incorrect. The spoofed message is targeting the **Battery State of Charge (0x101)**.</p>';
        }

        // Q2 Grading: Payload Value
        if (q2 === 'B') {
            score++;
            feedback += '<p class="text-green-700">Q2 (Payload): Correct. **15% is 0x0F**, which forces the reported battery level below the 30% limp mode threshold.</p>';
        } else {
            feedback += '<p class="text-red-700">Q2 (Payload): Incorrect. The correct hex payload is **0x0F** (15 Decimal).</p>';
        }

        // Q3 Feedback (Free Response - Not strictly graded, but checked for content)
        feedback += '<p class="mt-4 font-bold text-gray-800">Q3 (Mitigation Proposal) Feedback:</p>';
        if (q3Text && q3Text.length > 20) {
            feedback += '<p class="text-blue-700">Your proposal is noted. Common strategies include **Message Authentication Codes (MACs)** to verify message origin, or **Network Segmentation** to isolate critical components.</p>';
        } else {
            feedback += '<p class="text-yellow-700">Please provide a more detailed mitigation proposal in the text box.</p>';
        }

    } else if (scenario === 'scenario1') {
        totalScore = 5;
        const answers = {
            q1: document.querySelector('input[name="q1"]:checked')?.value,
            q2: document.querySelector('input[name="q2"]:checked')?.value,
            q3: document.querySelector('input[name="q3"]:checked')?.value,
            q4: document.querySelector('input[name="q4"]:checked')?.value,
            q5: document.querySelector('input[name="q5"]:checked')?.value,
        };
        const correctAnswers = { q1: 'B', q2: 'B', q3: 'C', q4: 'C', q5: 'B' };

        // Grade MCQs
        for (let i = 1; i <= totalScore; i++) {
            const qKey = `q${i}`;
            const isCorrect = answers[qKey] === correctAnswers[qKey];
            if (isCorrect) score++;
            feedback += `<p class="${isCorrect ? 'text-green-700' : 'text-red-700'}">Q${i}: ${isCorrect ? 'Correct' : `Incorrect (Correct Answer: ${correctAnswers[qKey]})`}.</p>`;
        }

        // Q6 Feedback (Free Response)
        const q6Text = document.getElementById('s1-proposal')?.value;
        feedback += '<p class="mt-4 font-bold text-gray-800">Q6 (Free Response) Feedback:</p>';
        if (q6Text && q6Text.length > 20) {
            feedback += '<p class="text-blue-700">Your explanation is noted. The FDI attack forces the follower to believe the leader is **accelerating rapidly (or is much faster)**. The follower accelerates to maintain the gap, but since the leader is not actually accelerating, the gap rapidly collapses, leading to the near-collision.</p>';
        } else {
            feedback += '<p class="text-yellow-700">Please provide an explanation for Q6.</p>';
        }

    } else if (scenario === 'scenario2') {
        totalScore = 5;
        const answers = {
            q1: document.querySelector('input[name="q1"]:checked')?.value,
            q2: document.querySelector('input[name="q2"]:checked')?.value,
            q3: document.querySelector('input[name="q3"]:checked')?.value,
            q4: document.querySelector('input[name="q4"]:checked')?.value,
            q5: document.querySelector('input[name="q5"]:checked')?.value,
        };
        const correctAnswers = { q1: 'B', q2: 'C', q3: 'B', q4: 'A', q5: 'C' };

        // Grade MCQs
        for (let i = 1; i <= totalScore; i++) {
            const qKey = `q${i}`;
            const isCorrect = answers[qKey] === correctAnswers[qKey];
            if (isCorrect) score++;
            feedback += `<p class="${isCorrect ? 'text-green-700' : 'text-red-700'}">Q${i}: ${isCorrect ? 'Correct' : `Incorrect (Correct Answer: ${correctAnswers[qKey]})`}.</p>`;
        }

        // Q6 Feedback (Free Response)
        const q6Text = document.getElementById('s2-proposal')?.value;
        feedback += '<p class="mt-4 font-bold text-gray-800">Q6 (Free Response) Feedback:</p>';
        if (q6Text && q6Text.length > 20) {
            feedback += '<p class="text-blue-700">Your proposal is noted. A common solution is to implement **feedforward prediction (e.g., using a Kalman Filter)** to estimate the leader\'s state *at the current time* based on the delayed information and system dynamics, thereby reducing controller over-reactions.</p>';
        } else {
            feedback += '<p class="text-yellow-700">Please provide a design modification proposal for Q6.</p>';
        }
    }

    feedback += `<p class="mt-6 text-2xl font-bold">Total Score: ${score} / ${totalScore}</p>`;

    // Display final results box
    resultsElement.innerHTML = feedback;
    resultsElement.classList.remove('hidden');
    resultsElement.className = `mt-4 p-4 rounded-lg shadow-lg ${score === totalScore ? 'bg-green-100 border-l-4 border-green-500' : 'bg-red-100 border-l-4 border-red-500'}`;
    window.scrollTo(0, document.body.scrollHeight);
}

// Attach to global scope for HTML onclick/onsubmit to work
window.submitAnswers = submitAnswers;
window.stopLimpModeAttack = stopLimpModeAttack; // Attach the new stop attack function

// --- SIMULATION CONTROL (LIMP MODE SPECIFIC) ---
function startSimulation() {
    if (simulationInterval) clearInterval(simulationInterval);
    // Use a unique window property for the interval handle
    simulationInterval = setInterval(simulateCanTraffic, 100); // 100ms interval
    renderState(); // Initial render
}

// --- GLOBAL NAVIGATION AND INITIALIZATION ---
// Attach event listener for navigation and load initial page
window.addEventListener('hashchange', handleHashChange);
document.addEventListener('DOMContentLoaded', () => {
    // This is the entry point. It initializes references and loads the correct page.
    initDomReferences(); 
    handleHashChange(); 
});