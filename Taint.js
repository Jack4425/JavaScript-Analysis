"use strict";

function initClickCount() {
    if (!window.localStorage.getItem("clickCount")) {
        window.localStorage.setItem("clickCount", 0);
    }
}

function setClickCount(x1) {
    window.localStorage.setItem("clickCount", x1);
}

function updateClickCount() {
    var clickCount = +window.localStorage.getItem("clickCount") || 0;
    var newClickCount = 0;
    if (clickCount >= 0) {
        newClickCount = clickCount + 1;
    }
    // window.localStorage.setItem("clickCount", newClickCount);
    setClickCount(newClickCount);
}

initClickCount();