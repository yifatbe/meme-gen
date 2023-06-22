'use strict'

let gCanvas
let gCtx

function initCanvas() {
  gCanvas = document.querySelector('#my-canvas')
  gCtx = gCanvas.getContext('2d')

}

function renderMeme() {
  var meme = getMeme()
  drawImgFromlocal(meme)
  renderEditor()
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
  ev.preventDefault()
  setFontSize(sign)
  renderMeme()
}

function onSetFont(value){
  setLineFont(value)
  renderMeme()
}
function onAddLine(ev) {
  ev.preventDefault()
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
  var line = gMeme.lines[gMeme.selectedLineIdx]
  drawFrame(line)
}

function onArrDown() {
  if (gMeme.selectedLineIdx >= gMeme.lines.length - 1) return
  gMeme.selectedLineIdx++
  renderEditor()
  var line = gMeme.lines[gMeme.selectedLineIdx]
  drawFrame(line)
}

function renderEditor() {
  var ind = gMeme.selectedLineIdx
  console.log('ind', ind)
  document.querySelector('#input-txt').value = gMeme.lines[ind].txt
  document.querySelector('#color').value = gMeme.lines[ind].color
}



function onDownloadImg(elLink) {
  const imgContent = gCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}