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


  function onCngTxt(txt){
    setLineTxt(txt)
    renderMeme()

  }

  function onCngColor(color){
    setLineColor(color)
    renderMeme()
  }

  function onChgFontSize(sign){
    setFontSize(sign)
    renderMeme()
  }

  function onDownloadImg(elLink) {
    const imgContent = gCanvas.toDataURL('image/jpeg') // image/jpeg the default format
    elLink.href = imgContent
}