'use strict'
const STORAGE_KEY = 'MemesDB'

var gMemes = []

var gMeme = {
  selectedImgId: 2,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Start Here',
      font: 'Impact',
      fontSize: 20,
      color: '#4267b2',
      pos: { x: 150, y: 40 },
      textAlign: 'start',
      width: 0,
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


function drawImgFromlocal() {
  const img = new Image()
  var selectedImg = getImg(gMeme.selectedImgId)

  // console.log('meme.selectedImgId', gMeme.selectedImgId)
  img.src = selectedImg.url
  
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    drawText(gMeme)
    
    drawFrame()
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
    gCtx.font = line.fontSize + 'px ' + line.font
    gCtx.textAlign = 'start'
    // gCtx.textBaseline = 'middle'

    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
  });
}

function drawFrame() {
  setTxtWidth()
  let line = gMeme.lines[gMeme.selectedLineIdx]
  let height = line.fontSize + 2
  gCtx.strokeStyle = 'gray'
  gCtx.strokeRect(line.pos.x - 2, line.pos.y - height, line.width + 4, height + 4)
}

function getMeme() {
  return gMeme
}

function setImg(id) {
  gMeme.selectedImgId = id
}

function setLineFont(value) {
  var ind = gMeme.selectedLineIdx
  gMeme.lines[ind].font = value
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
  if (sign === '+') gMeme.lines[ind].fontSize += 3
  else if (sign === '-') gMeme.lines[ind].fontSize -= 3
  // renderMeme()
  // cngTxtPos('')
}

function addLine() {
  var len = gMeme.lines.length
  let newX = gCanvas.width / 2
  var newY = gMeme.lines[len - 1].pos.y + 30
  var line = {
    txt: 'new line',
    font: 'Impact',
    fontSize: 20,
    color: '#0000ff',
    pos: { x: newX, y: newY },
    textAlign: 'start',
    width: 0,
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
  // debugger
  if (newPos === 'start') line.pos.x = 10
  if (newPos === 'end') line.pos.x = gCanvas.width - width - 10
  if (newPos === 'center') line.pos.x = gCanvas.width / 2 - width / 2
}

function getSelectedLine(clickedPos) {
  console.log('clickedPos', clickedPos)

  // let ind =gMeme.lines.findIndex(line => {
  //   (  clickedPos.x >= line.pos.x && 
  //     clickedPos.x<= line.pos.x+line.width &&
  //     clickedPos.y >= line.pos.y-line.fontSize && 
  //     clickedPos.y<=line.pos.y)  })
  // console.log('line',line)
  // let endX = line.pos.x+line.width
  // let startY = line.pos.y-line.fontSize
  // console.log('endX',endX)
  // console.log('startY',startY)
  // if    
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

// function setTxtDrag(ind, isDrag) {
//   let line
//   if (ind === -1) line = gMeme.lines.find(line => isDrag)
//   console.log('line', line)
//   gMeme.lines[ind].isDrag = isDrag
// }

//save functionality
// function saveMeme() {
//   gMemes.push(gMeme)
//   saveToStorage(STORAGE_KEY, gMemes)
// }

// function renderMemes() {
//   document.querySelector('.gallery').classList.add('hide')
//   document.querySelector('.editor-container').classList.add('hide')
//   document.querySelector('.memes').classList.remove('hide')
//   gMemes = loadFromStorage(STORAGE_KEY)
//   gMemes.forEach(gMeme => renderMeme)
// }