const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    if (email === "" || password === "") {

        alert("يرجى تعبئة جميع الحقول");

    } else {

        alert("تم تسجيل الدخول بنجاح");

        // الانتقال للصفحة الرئيسية
        window.location.href = "home.html";
    }
});