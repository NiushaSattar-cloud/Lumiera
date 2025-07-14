const candleBtn = document.getElementById('candle')
const candleBtnImg = document.getElementById('circle-candle')

const header = document.getElementById('main-header')

const mainCandle = document.getElementById('sec1-right')
const mainTitle = document.getElementById('mainTitle')
const mainShortText = document.getElementById('mainShortText')
const btnYellow = document.getElementById('btn-yellow')
const clickOnMe =document.getElementById('clickOnMe')

const item1 = document.getElementById('item1')
const item4 = document.getElementById('item4')
const overlay1 = document.getElementById('overlay1')
const overlay2 = document.getElementById('overlay2')

const title1 = document.getElementById('title1')
const line = document.querySelector('.line-with-circles');

const candleInfos = document.querySelectorAll('.candle-info');
const btnPurple = document.getElementById('btn-purple')

const section4 = document.getElementById('section-4')
const sec4Right = document.getElementById('sec4-right')
const sec4Title = document.getElementById('sec4-title')
const sec4P = document.getElementById('sec4-p')
const btnYellow2 = document.getElementById('btn-yellow2')

const title2 = document.getElementById('title2')
const line2 = document.getElementById('line-with-circles2')
const serviceItem = document.querySelectorAll('.service-item');
const servCircle = document.querySelectorAll('.serv-circle');
const servTitle = document.querySelectorAll('.serv-title');

const footer = document.getElementById('main-footer')

const navRight= document.getElementById('nav-right')
















// colors
var nBgColor = "#191919"
var nMAinColor = "#362664"
var nComColor = "#D19A0F"
var nLightColor = "#211E26"
var nOverlay = "#352664b9"


var dBgColor = "#ffffff"
var dMainColor = "#654797"
var dComColor = "#FBB911"
var dLightColor = "#EEEBF3"
var dOverlay = "#664797a9"






var on = true






function turnOffCandle() {
    // to turn off

    document.body.style.backgroundColor = nBgColor
    candleBtnImg.src = "img/circle-candle-off.png";
    mainCandle.style.setProperty('background-image', "url('img/candle-off.png')", 'important');

    header.style.backgroundColor = nMAinColor
    header.style.boxShadow = "0 0 10px #1b103b"

    mainTitle.style.color = dLightColor
    mainShortText.style.color = dLightColor
    btnYellow.style.backgroundColor = nComColor
    clickOnMe.style.color = dLightColor

    item1.style.backgroundColor = nMAinColor
    item4.style.backgroundColor = nLightColor
    item4.style.color = dLightColor
    overlay1.style.backgroundColor = nOverlay
    overlay2.style.backgroundColor = nOverlay

    title1.style.color = dLightColor
    line.style.borderColor = nMAinColor
    line.style.setProperty('--D-light-color', nMAinColor)

    candleInfos.forEach(el => el.style.backgroundColor = nMAinColor)
    btnPurple.style.backgroundColor = nMAinColor

    section4.style.backgroundColor = nMAinColor
    sec4Right.style.backgroundColor = nLightColor
    sec4Title.style.color = dLightColor
    sec4P.style.color = dLightColor
    btnYellow2.style.backgroundColor = nComColor

    title2.style.color = dLightColor
    // line2.style.borderColor = nMAinColor
    // line2.style.setProperty('--D-light-color', nMAinColor)

    serviceItem.forEach(el => el.style.backgroundColor = nLightColor)
    servCircle.forEach(el => el.style.backgroundColor = nMAinColor)
    servTitle.forEach(el => el.style.color = dLightColor)

    footer.style.background = nMAinColor
    navRight.style.backgroundColor = nOverlay

    on = false
}

function turnOnCandle() {
    // to turn on

    document.body.style.backgroundColor = dBgColor
    candleBtnImg.src = "img/circle-candle-on.png";
    mainCandle.style.setProperty('background-image', "url('img/candle-on1.png')");

    header.style.backgroundColor = dMainColor

    mainTitle.style.color = nMAinColor
    mainShortText.style.color = dMainColor
    btnYellow.style.backgroundColor = dComColor
    clickOnMe.style.color = dMainColor

    item1.style.backgroundColor = dMainColor
    item4.style.backgroundColor = dLightColor
    item4.style.color = dMainColor
    overlay1.style.backgroundColor = dOverlay
    overlay2.style.backgroundColor = dOverlay

    title1.style.color = dMainColor
    line.style.borderColor = dLightColor
    line.style.setProperty('--D-light-color', dLightColor)

    candleInfos.forEach(el => el.style.backgroundColor = dMainColor)
    btnPurple.style.backgroundColor = dMainColor

    section4.style.backgroundColor = dMainColor
    sec4Right.style.backgroundColor = dLightColor
    sec4Title.style.color = dMainColor
    sec4P.style.color = dMainColor
    btnYellow2.style.backgroundColor = dComColor

    title2.style.color = dMainColor
    // line2.style.borderColor = dLightColor
    // line2.style.setProperty('--D-light-color', dLightColor)

    serviceItem.forEach(el => el.style.backgroundColor = dLightColor)
    servCircle.forEach(el => el.style.backgroundColor = dMainColor)
    servTitle.forEach(el => el.style.color = dMainColor)

    footer.style.background = dMainColor
    navRight.style.backgroundColor = dOverlay

    on = true
}




function toggleCandle() {
    if (on) {
        turnOffCandle()
    } else {
        turnOnCandle()
    }
}




candleBtn.onclick = toggleCandle
mainCandle.onclick = toggleCandle