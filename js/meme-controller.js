'use strict'

let gCanvas
let gCtx

function initCanvas(){
    gCanvas = document.querySelector('#my-canvas')
    gCtx = gCanvas.getContext('2d')

}

function renderMeme() {
  var meme = getMeme()   
  drawImgFromlocal(meme)
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

  function onCngInpu(txt){
    setLineTxt(txt)
    renderMeme()

  }