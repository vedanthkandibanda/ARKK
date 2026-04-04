function toggleMenu() {
    const menu = document.getElementById("arkk-dropdown");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleWhy() {
    const section = document.getElementById("arkk-why-expand");
    section.classList.toggle("active");
}


function nextStep() {
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");
}

function submitForm() {
    // clear inputs
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("project").value = "";

    // reset steps
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step1").classList.remove("hidden");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}


function applyJob(role) {
    const phone = "+1(438)9944716"; // your number

    const message = encodeURIComponent(
        `Hello ARKK Tech Solutions,\n\nI am interested in the ${role} position.\nPlease share more details.`
    );

    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

    window.open(url, "_blank");
}


function sendMail() {

    emailjs.send("service_zk0ry1v", "template_lb1hnja", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("project").value
    })
    .then(() => {
        alert("Message sent successfully!");
    })
    .catch(() => {
        alert("Failed to send message.");
    });

}

function handle(){
    sendMail();
    submitForm();
}