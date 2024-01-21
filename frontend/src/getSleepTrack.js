const host = "http://localhost:3001"

export function getSleepTrack(){
    return fetch("http://localhost:3001")
    .then(response => {
        if (!response.ok) {
        throw new Error(`Network response was not ok - Status: ${response.status}`);
        }
        return response.json(); // This returns a Promise as well
    })
  }
