// ================= LOAD TRIPS =================
window.onload = function () {
    // Check if we have any trips saved
    let trips = JSON.parse(localStorage.getItem("myTrips")) || [];

    // Only add a default trip if the storage is completely empty
    if (trips.length === 0) {
        trips.push({
            id: Date.now(),
            destination: "جزيرة سقطرى",
            title: "رحلة سقطرى",
            category: "طبيعية • عائلية",
            payment: "تم الدفع",
            status: "مؤكدة",
            date: "2026-07-14",
            image: "Scotraaa.jpeg"
        });
        localStorage.setItem("myTrips", JSON.stringify(trips));
    }

    renderTrips();
};

// ================= RENDER TRIPS =================
function renderTrips() {
    const container = document.getElementById("trips-container");
    if (!container) return;

    container.innerHTML = "";
    let trips = JSON.parse(localStorage.getItem("myTrips")) || [];

    trips.forEach((trip, index) => {
        container.innerHTML += `
        <div class="trip-card current-trip">
            <div class="trip-image">
                <img src="${trip.image}" alt="${trip.title}">
            </div>
            <div class="trip-content">
                <div class="trip-top">
                    <div>
                        <span class="trip-category">${trip.category}</span>
                        <h3>${trip.title}</h3>
                    </div>
                    <span class="status active-status">${trip.status}</span>
                </div>
                <div class="trip-details">
                    <div class="detail-item">
                        <span>تاريخ الرحلة</span>
                        <strong>${trip.date}</strong>
                    </div>
                    <div class="detail-item">
                        <span>حالة الدفع</span>
                        <strong>${trip.payment}</strong>
                    </div>
                    <div class="detail-item">
                        <span>الوجهة</span>
                        <strong>${trip.destination}</strong>
                    </div>
                </div>
                <div class="trip-actions">
                    <button class="edit-btn" onclick="editDate(${index})">
                        <i class="fa-solid fa-pen"></i> تعديل التاريخ
                    </button>
                    <button class="delete-btn" onclick="deleteTrip(${index})">
                        <i class="fa-solid fa-trash"></i> حذف الرحلة
                    </button>
                    <a href="view-trip.html?id=${trip.id}">
                        <button class="view-btn">
                            <i class="fa-solid fa-eye"></i> عرض التفاصيل
                        </button>
                    </a>
                </div>
            </div>
        </div>`;
    });
}

// ================= EDIT DATE =================
function editDate(index) {
    let trips = JSON.parse(localStorage.getItem("myTrips")) || [];
    const newDate = prompt("أدخل التاريخ الجديد:", trips[index].date);

    if (newDate) {
        trips[index].date = newDate;
        localStorage.setItem("myTrips", JSON.stringify(trips));
        renderTrips();
    }
}

// ================= DELETE =================
function deleteTrip(index) {
    if (confirm("هل أنت متأكد من حذف الرحلة؟")) {
        let trips = JSON.parse(localStorage.getItem("myTrips")) || [];
        trips.splice(index, 1);
        localStorage.setItem("myTrips", JSON.stringify(trips));
        renderTrips();
    }
}