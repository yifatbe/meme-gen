'use strict'

const FONTSIZE = 12

function renderGallery() {
    var imgs = getImgs()
    // console.log('imgs',imgs)
    var strHtmls = imgs.map(img => `
        <img class="img-card" src="${img.url}" onclick="onImgSelect(${img.id})">
        `
    )
    document.querySelector('.img-container').innerHTML = strHtmls.join('')
    renderFilterNav()
}

function renderFilterNav(){
    let keyMap = getKeywordSearchCountMap()

    document.getElementById("baby").style.fontSize = (keyMap.baby/10 +1) * FONTSIZE +'px'
    document.getElementById("men").style.fontSize = (keyMap.men/10 +1) * FONTSIZE +'px'
    document.getElementById("movie").style.fontSize = (keyMap.movie/10 +1) * FONTSIZE +'px'
    document.getElementById("pet").style.fontSize = (keyMap.pet/10 +1) * FONTSIZE +'px'
    document.getElementById("politic").style.fontSize = (keyMap.politic/10 +1) * FONTSIZE +'px'
    document.getElementById("funny").style.fontSize = (keyMap.funny/10 +1) * FONTSIZE +'px'
}

function onImgSelect(id){ 
    document.querySelector('.gallery').classList.add('hide')
    document.querySelector('.editor-container').classList.remove('hide') 
    document.querySelector('#input-txt').focus()
    
    setImg(id)
    renderMeme()
}

function onSetSearch(search = ''){
    if (!search) search = document.querySelector('input[id=search-input]').value.trim()
    // let search = document.querySelector('.search-input')
    setSearch(search)
    renderGallery() 
}
