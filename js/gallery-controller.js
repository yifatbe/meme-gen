'use strict'

function renderGallery() {
    var galImgs = getImgs()
    var strHtmls = galImgs.map(img => `
        <img class="img-card" src="${img.url}" onclick="onImgSelect(${img.id})">
        `
    )
    document.querySelector('.img-container').innerHTML = strHtmls.join('')
}

function onImgSelect(id){ 
    document.querySelector('.gallery').classList.add('hide')
    document.querySelector('.editor-container').classList.remove('hide') 
    document.querySelector('#input-txt').focus()
    
    setImg(id)
    renderMeme()
}
