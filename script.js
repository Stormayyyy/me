// Example: Add an interactive feature
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.03)";
      card.style.transition = "0.3s";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
    });
  });
});
