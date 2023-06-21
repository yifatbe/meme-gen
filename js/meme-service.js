'use strict'
var gMeme = {
  selectedImgId: 2,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      color: '#ff0000',
      pos:{ x:100, y:20}
    },
    {
      txt: 'second line',
      size: 20,
      color: '#00ff00',
      pos:{ x:100, y:60}
    }
  ]
}

function getMeme() {
  return gMeme
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
    pos:{ x:100, y:newY}
  }
  gMeme.lines.push(line)
  renderMeme()
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
    gCtx.font = line.size + 'px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
  });
}
