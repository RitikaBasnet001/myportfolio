document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("viewProjects");
    const projectsSection = document.getElementById("projects");

    btn.addEventListener("click", function (e) {
        e.preventDefault();

        projectsSection.scrollIntoView({
            behavior: "smooth"
        });

    });

});