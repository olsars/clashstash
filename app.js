// Find the form using the id from html
const matchForm = document.getElementById("add-match-form");

// Listen for the submission
matchForm.addEventListener("submit", function (event) {
    // Stop browser from page reload
    event.preventDefault();

    console.log("Sucess");
});