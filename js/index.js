function homeToggle() {
    var x = document.getElementById("home-block");

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

function flipCard(card) {
    card.classList.toggle("flipped");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.add("remove");
        }
    });
});

const hiddenElements = document.querySelectorAll("hidden");
hiddenElements.forEach((el) => observer.observe(el));
