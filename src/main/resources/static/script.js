document.getElementById("emailForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailContent = document.getElementById("emailContent").value;
    const tone = document.getElementById("tone").value;

    const responseBox = document.getElementById("response");
    responseBox.textContent = "⏳ Generating reply...";

    try {
        const res = await fetch("http://localhost:8080/api/email/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ emailContent, tone })
        });

        const text = await res.text();
        responseBox.textContent = text;
    } catch (err) {
        responseBox.textContent = "❌ Error generating reply. Check console.";
        console.error(err);
    }
});
