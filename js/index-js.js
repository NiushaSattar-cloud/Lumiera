const candleBtn = document.getElementById('candle')
const candleBtnImg = document.getElementById('circle-candle')
const mainCandle = document.getElementById('sec1-right')

var nBgColor = "#191919"
var dBgColor = "#ffffff"


var on = true

candleBtn.onclick = function () {
    if (on == true) {
        document.body.style.backgroundColor = nBgColor
        candleBtnImg.src = "img/circle-candle-off.png";
        mainCandle.style.setProperty('background-image', "url('img/candle-off.png')", 'important');
        on = false
    }


    else if (on == false) {
        document.body.style.backgroundColor = dBgColor
        candleBtnImg.src = "img/circle-candle-on.png";
        mainCandle.style.setProperty('background-image', "url('img/candle-on1.png')");
        on = true
    }

}

mainCandle.onclick=function() {
    if (on == true) {
        document.body.style.backgroundColor = nBgColor
        candleBtnImg.src = "img/circle-candle-off.png";
        mainCandle.style.setProperty('background-image', "url('img/candle-off.png')", 'important');
        on = false
    }


    else if (on == false) {
        document.body.style.backgroundColor = dBgColor
        candleBtnImg.src = "img/circle-candle-on.png";
        mainCandle.style.setProperty('background-image', "url('img/candle-on1.png')");
        on = true
    }
}