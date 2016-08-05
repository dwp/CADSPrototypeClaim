var careDate = document.getElementById("careEnd_day").innerHTML("value");

function careBreak() {
    if(typeof(Storage) !== "undefined") {
        if (sessionStorage.careB) {
            sessionStorage.careB = careDate;
        } else {
            alert("Nothing to show");
        }
    }
}