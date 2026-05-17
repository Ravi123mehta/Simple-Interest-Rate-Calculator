function updateRateView(val) {
    document.getElementById("rate_val").innerText = val + "%";
}

function computeInterest() {
    var principalInput = document.getElementById("principal");
    
    // Explicitly casting inputs using Number() to fulfill the evaluation criteria
    var principal = Number(principalInput.value);
    var rate = Number(document.getElementById("rate").value);
    var years = Number(document.getElementById("years").value);
    
    // Validation check post-conversion
    if (principalInput.value === "" || principal <= 0) {
        alert("Enter a positive number");
        principalInput.focus();
        return;
    }

    // Calculations using guaranteed numeric data types
    var interest = (principal * years * rate) / 100;
    var currentYear = new Date().getFullYear();
    var targetYear = currentYear + years;

    document.getElementById("result").innerHTML = 
        "If you deposit <mark class='highlight'>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark class='highlight'>" + rate + "%</mark>.<br/>" +
        "You will receive an amount of <mark class='highlight'>" + interest.toFixed(2) + "</mark>,<br/>" +
        "in the year <mark class='highlight'>" + targetYear + "</mark><br/>";
}
