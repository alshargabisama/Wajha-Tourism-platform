const bookBtn = document.querySelector(".book-btn");

bookBtn.addEventListener("click", () => {

    alert("سيتم تحويلك إلى صفحة الحجز");

    // مثال:
    // window.location.href = "booking.html";
});
// تأثير بسيط للبطاقات

const cards = document.querySelectorAll(".timeline-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-6px)";

        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0)";
    });
});