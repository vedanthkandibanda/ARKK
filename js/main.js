function toggleMenu() {
    const menu = document.getElementById("arkk-dropdown");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleWhy() {
    const section = document.getElementById("arkk-why-expand");
    section.classList.toggle("active");
}


function nextStep() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    // 🚫 VALIDATION STEP 1
    if (!name || !phone || !email) {
        showMessage("Please fill all fields before continuing", "error");
        return;
    }

    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");
}

function submitForm() {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("project").value = "";

    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step1").classList.remove("hidden");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


function applyJob(role) {
    const phone = "14389944716"; // your number

    const message = encodeURIComponent(
        `Hello ARKK Tech Solutions,\n\nI am interested in the ${role} position.\nPlease share more details.`
    );

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

    window.open(url, "_blank");
}


function sendMail() {

    const project = document.getElementById("project").value.trim();

    // 🚫 VALIDATION STEP 2
    if (!project) {
        showMessage("Please describe your project", "error");
        return;
    }

    emailjs.send("service_zk0ry1v", "template_lb1hnja", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: project
    })
    .then(() => {
        showMessage("Message sent successfully!", "success");
        submitForm();
    })
    .catch(() => {
        showMessage("Failed to send message. Try again.", "error");
    });
}

function handle(){
    sendMail();
}

function showMessage(text, type) {
    const box = document.getElementById("arkk-message-box");

    box.innerText = text;
    box.style.display = "block";

    box.classList.remove("arkk-success", "arkk-error");

    if (type === "success") {
        box.classList.add("arkk-success");
    } else {
        box.classList.add("arkk-error");
    }

    // auto hide after 3 sec
    setTimeout(() => {
        box.style.display = "none";
    }, 3000);
}