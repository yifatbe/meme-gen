'use strict'

function onInit(){
    console.log('oninit')
    initCanvas()
    loadSavedMemes()


    addListeners()
    renderGallery()
     
}

function onMemes(){
    renderMemes()
}