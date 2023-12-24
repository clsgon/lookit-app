import ScrollReveal from "scrollreveal";
const scrollreveal = ScrollReveal()

scrollreveal.reveal(".image_reveal", {
    duration: 650,
    origin: "bottom",
    distance: "30px",
    easing: "cubic-bezier(.37,.01,.74,1)",
    opacity: 0.3,
    scale: 0.5
});