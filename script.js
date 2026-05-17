// Updates the text label next to the slider dynamically as the user interacts with it
function updateRateView(val) {
    document.getElementById("rate_val").innerText = val + "%";
}

function computeInterest() {
    // DOM reference retrievals
    var principalInput = document.getElementById("principal");
    var principal = principalInput.value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Principal validation: Checks if empty, zero, or negative numbers are input
    if (principal === "" || principal <= 0) {
        alert("Enter a positive number");
        principalInput.focus();
        return;
    }

    // Mathematical calculations for Interest and Target Future Year
    var interest = (principal * years * rate) / 100;
    var currentYear = new Date().getFullYear();
    var targetYear = parseInt(currentYear) + parseInt(years);

    // Dynamic block layout to update the inner HTML layout string with requested markup
    document.getElementById("result").innerHTML = 
        "If you deposit <mark class='highlight'>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark class='highlight'>" + rate + "%</mark>.<br/>" +
        "You will receive an amount of <mark class='highlight'>" + interest.toFixed(2) + "</mark>,<br/>" +
        "in the year <mark class='highlight'>" + targetYear + "</mark><br/>";
}