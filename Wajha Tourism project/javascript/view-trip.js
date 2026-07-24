// ================= STAR RATING =================

const stars = document.querySelectorAll(".star");

stars.forEach((star, index) => {

    star.addEventListener("click", () => {

        stars.forEach((s, i) => {

            if(i <= index){

                s.classList.add("active");

            } else {

                s.classList.remove("active");
            }

        });

    });

});

// ================= REVIEW =================

function submitReview(){

    const review =
    document.getElementById("review-text").value;

    if(review.trim() === ""){

        alert("يرجى كتابة ملاحظاتك قبل الإرسال");
        return;
    }

    alert("شكراً لتقييمك ✨");
}