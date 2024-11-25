function updateClock() {
    const now = new Date(); // Get the current date and time
    const hours = String(now.getHours()).padStart(2, '0'); // Format hours
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Format minutes
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Format seconds

    const timeString = `${hours}:${minutes}:${seconds}`; // Combine into time format
    document.getElementById('clock').textContent = timeString; // Display on the page
}
// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately on load
updateClock();