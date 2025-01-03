function homeToggle() {
    var x = document.getElementById("introduction-block");

    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function aboutmeToggle() {
    var x = document.getElementById("aboutme-block");

    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function projectsToggle() {
    var x = document.getElementById("projects-block");

    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function contactinfoToggle() {
    var x = document.getElementById("contactinfo-block");

    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function copyDiscord() {
    navigator.clipboard.writeText("LTSanic#7244");
    alert("Copied to clipboard!");
}
