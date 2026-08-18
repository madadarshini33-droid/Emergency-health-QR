document.getElementById("healthForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const blood = document.getElementById("blood").value;
    const allergies = document.getElementById("allergies").value;
    const conditions = document.getElementById("conditions").value;
    const medicines = document.getElementById("medicines").value;
    const contact = document.getElementById("contact").value;
    const notes = document.getElementById("notes").value;

    const healthData =
        "EMERGENCY HEALTH INFORMATION\n\n" +
        "Name: " + name + "\n" +
        "Age: " + age + "\n" +
        "Blood Group: " + blood + "\n" +
        "Allergies: " + allergies + "\n" +
        "Medical Conditions: " + conditions + "\n" +
        "Current Medications: " + medicines + "\n" +
        "Emergency Contact: " + contact + "\n" +
        "Precautions / Responder Notes: " + notes;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: healthData,
        width: 250,
        height: 250
    });

});
