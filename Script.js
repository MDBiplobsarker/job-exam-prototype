document.getElementById("examForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let score = 0;
    if (document.querySelector('input[name="q1"]:checked')?.value === "Dhaka") score++;
    if (document.querySelector('input[name="q2"]:checked')?.value === "12") score++;

    window.location.href = `result.html?score=${score}`;
});
