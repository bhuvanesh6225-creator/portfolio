
const track = document.getElementById("projectTrack");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

const dots = document.querySelectorAll(".dot");

const projects = document.querySelectorAll(".project-card");

let currentIndex = 0;


// DISPLAY SELECTED PROJECT

function showProject(index) {

    const totalProjects = projects.length;

    // LAST PROJECT-KU NEXT CLICK PANNA FIRST PROJECT
    if (index >= totalProjects) {
        index = 0;
    }

    // FIRST PROJECT-KU PREVIOUS CLICK PANNA LAST PROJECT
    if (index < 0) {
        index = totalProjects - 1;
    }

    currentIndex = index;

    // SLIDE ANIMATION
    track.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    // UPDATE ACTIVE DOT
    dots.forEach(function(dot, i) {

        dot.classList.toggle(
            "active",
            i === currentIndex
        );

    });

}


// NEXT BUTTON

next.addEventListener("click", function() {

    showProject(currentIndex + 1);

});


// PREVIOUS BUTTON

prev.addEventListener("click", function() {

    showProject(currentIndex - 1);

});


// DOT BUTTONS

dots.forEach(function(dot, index) {

    dot.addEventListener("click", function() {

        showProject(index);

    });

});
