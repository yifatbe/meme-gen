'use strict'

function onInit(){
    console.log('oninit')
    initCanvas()
    gMemes = loadFromStorage(STORAGE_KEY)
    if (!gMemes) gMemes=[]

    addListeners()
    renderGallery()
    
    
}

function onMemes(){
    renderMemes()
}