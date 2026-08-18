const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll("input");

        const patient = {
            name: inputs[0].value,
            age: inputs[1].value,
            bloodGroup: inputs[2].value,
            allergies: inputs[3].value,
            conditions: inputs[4].value,
            medications: inputs[5].value,
            emergencyName: inputs[6].value,
            emergencyPhone: inputs[7].value
        };

        localStorage.setItem("patientData", JSON.stringify(patient));

        alert("Emergency profile created successfully!");

        window.location.href = "emergency.html";
    });
}
