'use strict'
const STORAGE_KEY = 'MemesDB'

var gMemes = []

var gMeme = {
  selectedImgId: 2,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      font: 'Impact',
      size: 20,
      color: '#ff0000',
      pos:{ x:10, y:20},
      textAlign: 'start'
    },
    {
      txt: 'second line',
      font: 'Impact',
      size: 20,
      color: '#00ff00',
      pos:{ x:10, y:60},
      textAlign: 'start'
    }
  ]
}

function getMeme() {
  return gMeme
}

function setLineFont(value){
  var ind = gMeme.selectedLineIdx
  gMeme.lines[ind].font = value
}

function setLineTxt(txt) {
  // console.log('txt',txt)
  var ind = gMeme.selectedLineIdx
  gMeme.lines[ind].txt = txt

}

function setImg(id) {
  gMeme.selectedImgId = id
}

function setLineColor(color) {
  var ind = gMeme.selectedLineIdx
  gMeme.lines[ind].color = color
}

function setFontSize(sign) {
  var ind = gMeme.selectedLineIdx
  if (sign === '+') gMeme.lines[ind].size += 3
  else if (sign === '-') gMeme.lines[ind].size -= 3
}

function addLine() {
  var len = gMeme.lines.length
  var newY = gMeme.lines[len-1].pos.y +30
  var line = {
    txt: 'new line',
    size: 20,
    color: 'pink',
    pos:{ x:20, y:newY}
  }
  gMeme.lines.push(line)
  renderMeme()
}

function cngTxtPos(newPos){
  var ind = gMeme.selectedLineIdx
  gMeme.lines[ind].textAlign = newPos
// debugger
  if (newPos==='start') gMeme.lines[ind].pos.x = 10
  if (newPos==='end') gMeme.lines[ind].pos.x = gCanvas.width -10
  if (newPos==='center') gMeme.lines[ind].pos.x = gCanvas.width/2

}

function drawImgFromlocal(meme) {
  const img = new Image()
  var selectedImg = getImg(meme.selectedImgId)
  console.log('meme.selectedImgId', meme.selectedImgId)
  img.src = selectedImg.url
  img.onload = () => {

    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    drawText(meme)
  }
}

function drawText(meme) {
  meme.lines.forEach(line => {
    var x = line.pos.x
    var y = line.pos.y
    // var line = meme.lines[0]
    // console.log('line',line)
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.color
    gCtx.fillStyle = 'black'
    gCtx.font = line.size + 'px ' +line.font
    gCtx.textAlign = line.textAlign
    // gCtx.textBaseline = 'middle'

    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
  });
}

function drawFrame(line){
  console.log('line',line)
  gCtx.strokeStyle = 'black'
  gCtx.strokeRect(line.pos.x, line.pos.y, 50, 20)
  // gCtx.fillStyle = 'black'
  // gCtx.fillRect(line.pos.x, line.pos.y, 50, 20)

}

function saveMeme(){
  gMemes.push(gMeme)
  saveToStorage(STORAGE_KEY, gMemes)
}

function renderMemes(){
  document.querySelector('.gallery').classList.add('hide')
  document.querySelector('.editor-container').classList.add('hide')
  document.querySelector('.memes').classList.remove('hide') 
  gMemes = loadFromStorage(STORAGE_KEY)
  gMemes.forEach(gMeme=> renderMeme)
}

