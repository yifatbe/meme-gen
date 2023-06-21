'use strict'

let gCanvas
let gCtx


function renderMeme() {
  gCanvas = document.querySelector('#my-canvas')
  gCtx = gCanvas.getContext('2d')
  
  drawImgFromlocal()
  drawText('hello')
  
}


function drawImgFromlocal() {
    const img = new Image()
    img.src = 'meme-imgs/2.jpg'
    img.onload = () => {
      gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xEnd,yEnd
    }
  }
  
function drawText(text) {
    var x = gCanvas.width / 2
    var y  = gCanvas.height / 2
    
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'black'
    gCtx.font = '20px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'top'
  
    gCtx.fillText(text, x, y) 
    gCtx.strokeText(text, x, y) 
  }