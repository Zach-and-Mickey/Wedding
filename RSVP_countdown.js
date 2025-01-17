
        // Set the date we're counting down to (Example: wedding date)
        const RSVPtargetDate = new Date("2025-04-15T23:59:59").getTime();

        // Update the countdown every 1 second
        const countdownInterval = setInterval(function() {
            // Get the current date and time
            const now = new Date().getTime();

            // Calculate the time remaining
            const RSVPtimeLeft = RSVPtargetDate - now;

            // Calculate days, hours, minutes, and seconds
            const RSVPdays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const RSVPhours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const RSVPminutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const RSVPseconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            // Display the result
            document.getElementById("RSVPcountdown").innerHTML =
                RSVPdays + "\n days\n " + RSVPhours + "\n hours\n" + RSVPminutes + "\n minutes\n";

            // If the countdown is finished, display a message
            if (RSVPtimeLeft <= 0) {
                clearInterval(countdownInterval);  // Stop the timer
                document.getElementById("RSVPcountdown").innerHTML = "EXPIRED";
            }
        }, 1000);

