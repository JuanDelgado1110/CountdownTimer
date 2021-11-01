const counters = Array.from(document.querySelectorAll(".counter__number"));

let daysText = 14;
let hoursText = 0;
let minutesText = 0;
let secondsText = 0;

counters[0].textContent = daysText;
counters[1].textContent = hoursText;
counters[2].textContent = minutesText;
counters[3].textContent = secondsText;

const interval = setInterval(() => {
    counters[0].textContent = daysText;
    counters[1].textContent = hoursText;
    counters[2].textContent = minutesText;
    counters[3].textContent = secondsText;

    secondsText--;

    if (secondsText < 0) {
        secondsText = 59;

        minutesText--;

        if (minutesText < 0) {
            minutesText = 59;

            hoursText--;

            if (hoursText < 0) {
                hoursText = 23;

                daysText--;

                if (daysText < 0) {
                    clearInterval(interval);
                }
            }
        }
    }
}, 1000);
