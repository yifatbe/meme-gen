'use strict'



// function renderMemes() {
//     var  gMemes= load
//     var strHtmls = galImgs.map(img => `
//         <img class="img-card" src="${img.url}" onclick="onImgSelect(${img.id})">
//         `
//     )
//     document.querySelector('.img-container').innerHTML = strHtmls.join('')
// }


function renderMemes() {
    // ev.preventDefault()
  document.querySelector('.gallery').classList.add('hide')
  document.querySelector('.editor-container').classList.add('hide')
  document.querySelector('.memes').classList.remove('hide')
  
  var strHtmls = gMemes.map(meme => `
                <canvas id="canvas${meme.id}" class="meme-canvas"  height="450" width="450" onclick="onMemeClicke('${meme.id}')"></canvas> 
                 `
    )

    document.querySelector('.memes-container').innerHTML = strHtmls.join('')
    gMemes.forEach(meme => renderExistMeme(meme))

}

function renderExistMeme(meme){
    let memeId = `#canvas${meme.id}`
    let memeCanvas = document.querySelector(memeId)
    let memeCtx = memeCanvas.getContext('2d')
    const img = new Image()
    var selectedImg = getImg(meme.selectedImgId)
    img.src = selectedImg.url  
    
    img.onload = () => {
        memeCtx.drawImage(img, 0, 0, memeCanvas.width, memeCanvas.height)
        drawText(meme, memeCtx) 
    }  
}

function onMemeClicke(id){
    // document.querySelector('.gallery').classList.add('hide')
    document.querySelector('.editor-container').classList.remove('hide')
    document.querySelector('.memes').classList.add('hide')
    gMeme = gMemes.find(meme => meme.id===id)
    renderMeme()

}
