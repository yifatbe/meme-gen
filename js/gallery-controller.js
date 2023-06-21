'use strict'

function renderGallery() {
    var galImg = getImgs()
    var strHtmls = galImg.map(img => `
        <img class="img-card" src="${img.url}" onclick="onImgClick(${img.id})">
        `
    )
    document.querySelector('.img-container').innerHTML = strHtmls.join('')
}