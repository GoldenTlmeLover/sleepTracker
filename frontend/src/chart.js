import { getSleepTrack } from "./getSleepTrack.js";

const chart = await getSleepTrack()

const hourTrackArray = chart.map(item => item.hourTrack);
const dateArray = chart.map(item => item.dateTrack.replaceAll("-","/").slice(0, -14));
console.log(chart)

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: dateArray,
      datasets: [{
        label: 'Hours of sleep',
        data: hourTrackArray,
        borderWidth: 5
      }]
    },
    responsive: true, 
    scaleFontColor: "#FFFFFF",
    options: {
      scales: {
        x: {
          display: false
        }
      },
      backgroundColor: 'rgba(226, 232, 240, 0.6)',
      fill: true,
      pointHoverBackgroundColor: 'rgba(0, 0 ,0)',
      plugins: {
        legend: {
            display: false // This hides all text in the legend and also the labels.
        }
      }
    }
  });