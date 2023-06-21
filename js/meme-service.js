'use strict'

var gMeme = { 
    selectedImgId: 2, 
    selectedLineIdx: 0, 
    lines: [ 
        { 
            txt: 'I sometimes eat Falafel', 
            size: 20, 
            color: 'red' 
        } 
    ] 
} 

function getMeme(){
    return gMeme
}


function setLineTxt(txt){
    // console.log('txt',txt)
    gMeme.lines[0].txt = txt

  }

  function setImg(id){
    gMeme.selectedImgId = id
  }