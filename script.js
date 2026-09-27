const revealItems = document.querySelectorAll(
    ".training-feature, .program-card, .about-content, .join-content"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.12
});


revealItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
});
