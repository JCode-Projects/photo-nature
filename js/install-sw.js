if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(register => console.log('Installing Successfully.'))
        .catch(err => console.log('Installing Failure.'))
} else {
    console.log("This navigator not supports serviceWorkers");
}