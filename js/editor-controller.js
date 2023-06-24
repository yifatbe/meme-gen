'use strict'

let gStartPos= {x:0, y:0}
let gCanvas
let gCtx
let gDrugedLine
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function initCanvas() {
  gCanvas = document.querySelector('#my-canvas')
  gCtx = gCanvas.getContext('2d')

}

function renderMeme(isDownload = false) {
  drawImgFromlocal(isDownload)
  renderEditor()
}

function renderEditor() {
  var ind = gMeme.selectedLineIdx
  console.log('ind', ind)
  document.querySelector('#input-txt').value = gMeme.lines[ind].txt
  document.querySelector('#color').value = gMeme.lines[ind].color
}

function onCngTxt(txt) {
  setLineTxt(txt)
  renderMeme()
}

function onCngColor(color) {
  setLineColor(color)
  renderMeme()
}

function onChgFontSize(ev, sign) {
  // ev.preventDefault()
  setFontSize(sign)
  renderMeme()
}

function onSetFont(value){
  setLineFont(value)
  renderMeme()
}

function onAddLine(ev) {
  // ev.preventDefault()
  addLine()
  renderMeme()
}

function onTxtPos(newPos){
  cngTxtPos(newPos)
  renderMeme()  
}

function onArrUp() {
  if (gMeme.selectedLineIdx <= 0) return
  gMeme.selectedLineIdx--
  renderEditor()
  renderMeme()
}

function onArrDown() {
  if (gMeme.selectedLineIdx >= gMeme.lines.length - 1) return
  gMeme.selectedLineIdx++
  renderEditor()
  renderMeme()
  
}

function onDown(ev) {
  
  const pos = getEvPos(ev)
  let line = getSelectedLine(pos)
  console.log('line',line)
  if (!line) return
  renderMeme()
  line.isDrag = true
  gDrugedLine = line
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  // let dragedLine = gMeme.lines.find(line => line.isDrag) 
  // console.log('dragedLine',dragedLine)

  if (!gDrugedLine || !gDrugedLine.isDrag) return
 
  const pos = getEvPos(ev)
  // Calc the delta, the diff we moved
  console.log('pos',pos)
  console.log('gStartPos',gStartPos)

  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y
 
  moveTxtLine(dx, dy)
  // Save the last pos, we remember where we`ve been and move accordingly
  gStartPos = pos
  renderMeme()
}

function onUp() {
  // setTxtDrag(-1, false)
  if (!gDrugedLine) return
  gDrugedLine.isDrag = false
  
  document.body.style.cursor = 'default'
}

function getEvPos(ev) {

  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }

  if (TOUCH_EVS.includes(ev.type)) {
    // Prevent triggering the mouse ev
    ev.preventDefault()
    // Gets the first touch point
    ev = ev.changedTouches[0]
    // Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}

function onDownloadImg(elLink) {
   renderMeme(true)
  
  const imgContent = gCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
  _setUserMsg('meme downloaded')
  //  renderMeme(false)
}

function onSave(){
  renderMeme(true)
  saveMeme() 
  _setUserMsg('meme saved')
}

function _setUserMsg(msg) {
  document.querySelector('.user-msg').classList.toggle('open')
  if (!msg) return
  document.querySelector('.msg-txt').innerText = msg || ''
  setTimeout(_setUserMsg, 2000)
}