const host = "http://localhost:3001";

async function postSleepTrack() {
    const hourTrack = document.getElementById("hoursInput").value
    const dateTrack = document.getElementById("dateInput").value
    const response = await fetch(host, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify({
        "dateTrack": dateTrack,
        "hourTrack": hourTrack
      }),
    });
    
    window.location.reload();
}
