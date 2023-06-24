'use strict'

function renderGallery() {
    var imgs = getImgs()
    console.log('imgs',imgs)
    var strHtmls = imgs.map(img => `
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

function onSetSearch(){
    
    let search = document.querySelector('input[id=search-input]').value.trim()
    // let search = document.querySelector('.search-input')
    setSearch(search)
    renderGallery() 
}
