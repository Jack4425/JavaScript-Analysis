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



// So what we want is to track information flow from source to sink. We have to define the source and sink in our analysis 
// and then track the information flow from source to sink that either there is any taint or vulnerability attached with 
// information that comes from source to sink. In above example, we have 'window.locaStorage.setItem' as source and  'window.locaStorage.getItem'
// as a sink.
