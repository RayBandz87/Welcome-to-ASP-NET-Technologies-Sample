document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
        const link = section.querySelector("a.toggle-link");
        const content = section.querySelector("div.content");

        if (link && content) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                content.classList.toggle("hidden");
            });
        }
    });
});
