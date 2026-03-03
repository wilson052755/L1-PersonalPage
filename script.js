function updateClock() {
    const timeElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    
    // Create Date object for current time
    const now = new Date();
    
    // Get UTC time in milliseconds
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    
    // Calculate UTC+8 time (8 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    const offset = 8;
    const targetDate = new Date(utc + (3600000 * offset));
    
    // Format Time: HH:MM:SS
    const formatTime = (time) => time.toString().padStart(2, '0');
    const hours = formatTime(targetDate.getHours());
    const minutes = formatTime(targetDate.getMinutes());
    const seconds = formatTime(targetDate.getSeconds());
    
    // Update the DOM
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Format Date: e.g. March 03, 2026
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = targetDate.toLocaleDateString('en-US', options);
    
    dateElement.textContent = dateString;
}

// Initial call to prevent delay
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
