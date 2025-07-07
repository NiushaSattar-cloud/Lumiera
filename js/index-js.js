const candleBtn = document.getElementById('candle')
const candleBtnImg = document.getElementById('circle-candle')

const header = document.getElementById('main-header')

const mainCandle = document.getElementById('sec1-right')
const mainTitle = document.getElementById('mainTitle')
const mainShortText = document.getElementById('mainShortText')
const btnYellow = document.getElementById('btn-yellow')

const item1 = document.getElementById('item1')
const item4 = document.getElementById('item4')
const overlay1=document.getElementById('overlay1')
const overlay2=document.getElementById('overlay2')

const title1=document.getElementById('title1')
const line = document.querySelector('.line-with-circles');

const candleInfo = document.getElementsByClassName('.candle-info');















// colors
var nBgColor = "#191919"
var nMAinColor = "#362664"
var nComColor = "#D19A0F"
var nLightColor = "#211E26"
var nOverlay="#352664b9"


var dBgColor = "#ffffff"
var dMainColor = "#654797"
var dComColor = "#FBB911"
var dLightColor = "#EEEBF3"
var dOverlay = "#664797a9"












var on = true













candleBtn.onclick = function () {
    // وقتی میخوایم خاموش کنیم
    if (on == true) {
        document.body.style.backgroundColor = nBgColor
        candleBtnImg.src = "img/circle-candle-off.png";
        mainCandle.style.setProperty('background-image', "url('img/candle-off.png')", 'important');

        header.style.backgroundColor = nMAinColor
        header.style.boxShadow="0 0 10px #1b103b"

        mainTitle.style.color = dLightColor
        mainShortText.style.color = dLightColor
        btnYellow.style.backgroundColor = nComColor

        item1.style.backgroundColor=nMAinColor
        item4.style.backgroundColor=nLightColor
        item4.style.color=dLightColor
        overlay1.style.backgroundColor=nOverlay
        overlay2.style.backgroundColor=nOverlay

        title1.style.color=dLightColor
        line.style.borderColor=nMAinColor
        line.style.setProperty('--D-light-color', nMAinColor);

        // for (let i = 0; i < candleInfo.length; i++) {
        //     candleInfo[i].style.backgroundColor = nMAinColor;
        //   }

        on = false
    }

    // وقتی میخوایم روشن کنیم
    else if (on == false) {
        document.body.style.backgroundColor = dBgColor
        candleBtnImg.src = "img/circle-candle-on.png";
        mainCandle.style.setProperty('background-image', "url('img/candle-on1.png')");

        header.style.backgroundColor = dMainColor

        mainTitle.style.color = nMAinColor
        mainShortText.style.color = dMainColor
        btnYellow.style.backgroundColor = dComColor

        item1.style.backgroundColor=dMainColor
        item4.style.backgroundColor=dLightColor
        item4.style.color=dMainColor
        overlay1.style.backgroundColor=dOverlay
        overlay2.style.backgroundColor=dOverlay

        title1.style.color=dMainColor
        line.style.borderColor=dLightColor
        line.style.setProperty('--D-light-color', dLightColor);

        on = true
    }

}

mainCandle.onclick = function () {
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