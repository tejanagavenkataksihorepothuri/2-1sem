// Fade-in animation for logo and title on page load
window.addEventListener("load", () => {
    const logo = document.querySelector(".logo");
    const title = document.getElementById("page-title");
    const buttons = document.querySelectorAll(".button");

    // Animate logo and title
    logo.style.opacity = "1";
    logo.style.transform = "translateY(0)";
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";

    // Animate buttons with delay
    buttons.forEach((button, index) => {
        setTimeout(() => {
            button.style.opacity = "1";
            button.style.transform = "translateY(0)";
        }, index * 150); // stagger effect for each button
    });
});

// Add ripple effect on button clicks
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function (e) {
        // Create ripple element
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        ripple.style.left = `${e.clientX - button.getBoundingClientRect().left}px`;
        ripple.style.top = `${e.clientY - button.getBoundingClientRect().top}px`;
        button.appendChild(ripple);

        // Remove ripple after animation completes
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
