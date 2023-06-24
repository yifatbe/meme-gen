'use strict'


var gMemes = []

var gMeme = {
  id: 0,
  selectedImgId: 2,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Start Here',
      font: 'Impact',
      fontSize: 50,
      color: '#0000ff',
      pos: { x: 150, y: 40 },
      textAlign: 'start',
      width: 200,
      isDrag: false
    },
    // {
    //   txt: 'second line',
    //   font: 'Impact',
    //   fontSize: 20,
    //   color: '#00ff00',
    //   pos: { x: 10, y: 60 },
    //   textAlign: 'start',
    //   width: 0,
    //   isDrag: false
    // }
  ]
}

function drawImgFromlocal(isDownload = false) {
  const img = new Image()
  var selectedImg = getImg(gMeme.selectedImgId)

  // console.log('meme.selectedImgId', gMeme.selectedImgId)
  img.src = selectedImg.url
  
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    drawText(gMeme,gCtx)
    if (!isDownload) drawFrame()
  }
}

function deleteLine(){

  let ind = gMeme.selectedLineIdx
  console.log('ind',ind)
  gMeme.lines.splice(ind,1)
}

function drawText(meme, memeCanvas) {
  meme.lines.forEach(line => {
    var x = line.pos.x
    var y = line.pos.y
    memeCanvas.lineWidth = 2

    memeCanvas.fillStyle =  line.color
    memeCanvas.font = line.fontSize/16 + 'em ' + line.font
    memeCanvas.textAlign = 'start'

    memeCanvas.fillText(line.txt, x, y)
    line.width = memeCanvas.measureText(line.txt).width
  });
}

function drawFrame() {
  // setTxtWidth()
  let line = gMeme.lines[gMeme.selectedLineIdx]
  let x = line.pos.x - 10
  let width = line.width + 20
  let height = line.fontSize + 20
  let y = line.pos.y - height +10
  gCtx.strokeStyle = 'white'
  gCtx.strokeRect(x, y, width, height)
}

function getMeme() {
  return gMeme
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function setLineFont(value) {
  let ind = gMeme.selectedLineIdx
  let line = gMeme.lines[ind]
  line.font = value
  
}

function setLineTxt(txt) {
  // console.log('txt',txt)
  var ind = gMeme.selectedLineIdx
  gMeme.lines[ind].txt = txt
  gMeme.lines[ind].width = gCtx.measureText(txt).width
}

function setLineColor(color) {

  var ind = gMeme.selectedLineIdx
  gMeme.lines[ind].color = color
}

function setFontSize(sign) {
  var ind = gMeme.selectedLineIdx
  let line = gMeme.lines[ind]
  if (sign === '+') line.fontSize += 3
  else if (sign === '-') line.fontSize -= 3

}

function addLine() {
  var len = gMeme.lines.length
  let newX = gCanvas.width / 2
  var newY = gMeme.lines[len - 1].pos.y + 30
  var line = {
    txt: 'new line',
    font: 'Impact',
    fontSize: 50,
    color: '#0000ff',
    pos: { x: newX, y: newY },
    textAlign: 'start',
    width: 150,
    isDrag: false
  }

  gMeme.lines.push(line)
  gMeme.selectedLineIdx = gMeme.lines.length - 1
  // renderMeme()
}

function cngTxtPos(newPos) {
  let ind = gMeme.selectedLineIdx
  let line = gMeme.lines[ind]
  if (!newPos) newPos = line.textAlign
  line.textAlign = newPos

  let text = gCtx.measureText(line.txt)
  let width = text.width + 2

  if (newPos === 'start') line.pos.x = 10
  if (newPos === 'end') line.pos.x = gCanvas.width - width - 10
  if (newPos === 'center') line.pos.x = gCanvas.width / 2 - width / 2
}

function getSelectedLine(clickedPos) {
  console.log('clickedPos', clickedPos)
   
  let line
  for (var i = 0; i < gMeme.lines.length; i++) {

    line = gMeme.lines[i]
    console.log('line', line)
    if (clickedPos.x >= line.pos.x &&
      clickedPos.x <= line.pos.x + line.width &&
      clickedPos.y >= line.pos.y - line.fontSize &&
      clickedPos.y <= line.pos.y) {
      
      gMeme.selectedLineIdx = i
      return line
    }
  }
  return line
}

function moveTxtLine(dx, dy) {
  let line = gMeme.lines.find(line => line.isDrag)
  if (!line) return
  console.log('line', line)
  line.pos.x += dx
  line.pos.y += dy

}

function setTxtWidth() {
  gMeme.lines.forEach(line => {
    line.width = gCtx.measureText(line.txt).width
    console.log('example',line.width)
  })
  
}

function addListeners() {
  addMouseListeners()
  addTouchListeners()
}

function addMouseListeners() {
  gCanvas.addEventListener('mousedown', onDown)
  gCanvas.addEventListener('mousemove', onMove)
  gCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gCanvas.addEventListener('touchstart', onDown)
  gCanvas.addEventListener('touchmove', onMove)
  gCanvas.addEventListener('touchend', onUp)
}


function makeId(length = 4) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var txt = ''
  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

