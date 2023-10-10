const sepChar = String.fromCharCode(9472)
const ctx = document.createElement('canvas').getContext('2d')
const horizontalSepChar = String.fromCharCode(9472)
const sepCharWidth = ctx.measureText(horizontalSepChar).width
const sepTotalWidth = ctx.measureText(horizontalSepChar.repeat(34)).width

const sepElement = document.querySelector('#sep-horizontal')
const inputElement = document.querySelector('#sep-title')

// 水平还是垂直，默认水平
let currentSepDirection

function addSep(sepElement, sepChar, sepTotalWidth, sepTitle) {
    const sepTitleWidth = ctx.measureText(sepTitle).width
    const leftWidth = sepTotalWidth - sepTitleWidth
    const sepNum = Math.floor(leftWidth / sepCharWidth / 2)
    sepElement.innerText = `${sepChar.repeat(sepNum)}${sepTitle}${sepChar.repeat(sepNum)}`
}

window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentSepDirection = urlParams.get('direction') || 'h'
    switch (currentSepDirection) {
        case 'h':
            document.querySelector('#v').style.display = 'none'
            document.querySelector('#h').style.display = 'block'
            document.title = '水平书签分割线'
            document.querySelector('link[rel="icon"]').href='./assets/images/icon-h.svg'
            addSep(sepElement, sepChar, sepTotalWidth, '分割线')
            break
        case 'v':
            document.querySelector('#h').style.display = 'none'
            document.querySelector('#v').style.display = 'block'
            document.title = '垂直书签分割线'
            document.querySelector('link[rel="icon"]').href='./assets/images/icon-v.svg'
            break
    }
}

// 输入水平分割线标题
inputElement.addEventListener('input', () => {
    addSep(sepElement, sepChar, sepTotalWidth, inputElement.value)
})

// 点击切换垂直分割线按钮
document.querySelector('#switchV').addEventListener('click', () => {
    location.href = './?direction=v'
})

// 点击切换水平分割线按钮
document.querySelector('#switchH').addEventListener('click', () => {
    location.href = './?direction=h'
})