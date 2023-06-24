'use strict'

const STORAGE_KEY = 'MemesDB'

function loadSavedMemes(){
    gMemes = loadFromStorage(STORAGE_KEY)
    if (!gMemes) gMemes=[]
}


function saveMeme() {
    gMeme.id = makeId()
    gMemes.push(gMeme)
    saveToStorage(STORAGE_KEY, gMemes)
  }
  