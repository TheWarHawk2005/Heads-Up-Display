if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/Heads-Up-Display/service-worker.js")
      .then(() => console.log("Service Worker Registered"));
  }
  

var speedElement = document.querySelector('#speed')

navigator.geolocation.watchPosition(
    (position) => {
      var result
      if (position.coords.speed !== null) {
        speedMph = position.coords.speed * 2.23694
        result = Math.round(speedMph)
      } else {
        result = "Speed data not available.";
      }
      speedElement.textContent = result
    },
    (error) => {
      console.error("Error getting position:", error);
      speedElement.textContent = error
    },
    {
      enableHighAccuracy: true, // Ensures better accuracy (may drain battery)
      maximumAge: 0, // Do not use cached position
      timeout: 10000, // Timeout after 10 seconds
    }
  );
  
