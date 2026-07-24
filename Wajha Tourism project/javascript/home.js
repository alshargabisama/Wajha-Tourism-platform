function goDetails(type) {

    // تحويل المستخدم إلى صفحة التفاصيل
    window.location.href = "package-details.html?type=" + type;
}
// تأثير بسيط عند الضغط على الأزرار

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);
    });
});