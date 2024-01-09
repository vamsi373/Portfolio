document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Subject:", formData.get("subject"));
    console.log("Message:", formData.get("message"));


 });