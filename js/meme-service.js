'use strict'

var gMeme = { 
    selectedImgId: 2, 
    selectedLineIdx: 0, 
    lines: [ 
        { 
            txt: 'I sometimes eat Falafel', 
            size: 20, 
            color: 'red' 
        } 
    ] 
} 

function getMeme(){
    return gMeme
}


function setLineTxt(txt){
    // console.log('txt',txt)
    gMeme.lines[0].txt = txt

  }

  function setImg(id){
    gMeme.selectedImgId = id
  }

 function setLineColor(color){
    gMeme.lines[0].color = color
  }

  function setFontSize(sign){
    if (sign==='+') gMeme.lines[0].size +=3
    else if (sign==='-') gMeme.lines[0].size -=3
  }
function drawImgFromlocal(meme) {
    const img = new Image()
    var selectedImg = getImg(meme.selectedImgId)
    console.log('meme.selectedImgId',meme.selectedImgId)
    img.src = selectedImg.url 
    img.onload = () => {
        
      gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)     
      drawText(meme)
    }
  }
  
function drawText(meme) {
    var x =  150
    var y  = 50
    var line = meme.lines[0]
    console.log('line',line)
    gCtx.lineWidth = 2
    gCtx.strokeStyle = line.color
    gCtx.fillStyle = 'black'
    gCtx.font = line.size+'px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
  
    gCtx.fillText(line.txt, x, y) 
    gCtx.strokeText(line.txt, x, y) 
  }
