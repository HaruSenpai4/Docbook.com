
// Function to handle login
function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = localStorage.getItem(email);
    if (user) {
        const userData = JSON.parse(user);
        if (userData.password === password) {
            // Successful login
            alert("Login successful!");
            document.getElementById("loginPage").classList.add("hidden");
            document.getElementById("dashboardPage").classList.remove("hidden");

            // Set user info in dashboard
            document.getElementById("userName").textContent = userData.name;
            document.getElementById("userEmail").textContent = email;
            sessionStorage.setItem("loggedIn", "true"); // Save login state
        } else {
            alert("Incorrect password.");
        }
    } else {
        alert("User not found.");
    }
}

// Function to handle logout
function logout() {
    sessionStorage.removeItem("loggedIn"); // Clear login state
    document.getElementById("loginPage").classList.remove("hidden");
    document.getElementById("dashboardPage").classList.add("hidden");
}

// Ensure user is logged in before showing the dashboard
document.addEventListener("DOMContentLoaded", () => {
    const loggedIn = sessionStorage.getItem("loggedIn");
    if (loggedIn) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("dashboardPage").classList.remove("hidden");
    } else {
        document.getElementById("loginPage").classList.remove("hidden");
        document.getElementById("dashboardPage").classList.add("hidden");
    }
});
