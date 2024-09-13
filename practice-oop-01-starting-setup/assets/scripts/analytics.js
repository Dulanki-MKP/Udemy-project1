
const intervalId = setInterval( () => {
    console.log('Sending analytics data...')
}, 2000); // execute every 2 seconds

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    clearInterval(intervalId);
});