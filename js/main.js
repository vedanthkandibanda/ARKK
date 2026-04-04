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