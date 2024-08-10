// Function to dynamically generate roll numbers
function populateRollNumbers() {
    const rollSelect = document.getElementById('roll');
    for (let i = 1; i <= 65; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = 'Roll No. ' + i;
        rollSelect.appendChild(option);
    }
}

// Function to update roll number placeholder based on selected branch
function updatePlaceholder() {
    const branch = document.getElementById("branch").value;
    const rollNumberInput = document.getElementById("rollNumber");

    switch (branch) {
        case "cse":
            rollNumberInput.placeholder = "Enter your roll no as CSEU1234";
            break;
        case "ece":
            rollNumberInput.placeholder = "Enter your roll no as ECSU1234";
            break;
        case "mech":
            rollNumberInput.placeholder = "Enter your roll no as MECHU1234";
            break;
        case "civil":
            rollNumberInput.placeholder = "Enter your roll no as CIVILEU1234";
            break;
        case "extc":
            rollNumberInput.placeholder = "Enter your roll no as EXTCEU1234";
            break;
        default:
            rollNumberInput.placeholder = "Roll Number";
            break;
    }
}

// Function to toggle section visibility with animation


// Initialize the page
window.onload = function() {
    populateRollNumbers();
    document.getElementById("branch").addEventListener("change", updatePlaceholder);
};
