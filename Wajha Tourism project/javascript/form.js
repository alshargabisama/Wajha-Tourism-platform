// Function to show/hide extra fields based on trip type
function checkTripType() {
    var type = document.getElementById('trip-type').value;
    var extraFields = document.getElementById('extra-fields');

    if (type === 'family' || type === 'group') {
        extraFields.style.display = 'block';
    } else {
        extraFields.style.display = 'none';
        // Reset to base price for individual
        document.getElementById('total-price').innerText = "400";
    }
}

// Function to calculate total price
function calculateTotal() {
    var adults = document.getElementById('adults').value || 0;
    var children = document.getElementById('children').value || 0;
    
    // Price: 400 per adult and 200 per child
    var total = (adults * 400) + (children * 200);
    
    document.getElementById('total-price').innerText = total;
} 

// Handle Form Submission
document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get travel date and trip type from form
    const tripDate = document.getElementById("travel-date").value;
    const tripType = document.getElementById("trip-type").options[document.getElementById("trip-type").selectedIndex].text;

    // Create the new trip object
    const newTrip = {
        id: Date.now(),
        destination: "جزيرة سقطرى", // Default for this form
        title: "رحلة سقطرى",
        category: "طبيعية • " + tripType,
        status: "مؤكدة",
        payment: "تم الدفع",
        date: tripDate,
        image: "Scotraaa.jpeg" // Matching your existing image naming
    };

    // Get existing trips from "myTrips" key
    let trips = JSON.parse(localStorage.getItem("myTrips")) || [];

    // Add the new trip to the array
    trips.push(newTrip);

    // Save back to localStorage
    localStorage.setItem("myTrips", JSON.stringify(trips));

    // Redirect to the trips page
    window.location.href = "my-trips.html";
});