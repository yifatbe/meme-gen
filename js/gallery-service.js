
var gImgs = [
    {
        id: 1, 
        url: 'meme-imgs/1.jpg', 
        keywords: ['funny', 'cat']
    },
    {
        id: 2, 
        url: 'meme-imgs/2.jpg', 
        keywords: ['funny', 'cat']
    },
    {
        id: 3, 
        url: 'meme-imgs/3.jpg', 
        keywords: ['funny', 'cat']
    },
    {
        id: 4, 
        url: 'meme-imgs/4.jpg', 
        keywords: ['funny', 'cat']
    },
] 

var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

function getImgs(){
    return gImgs
}

function getImg(id){
    return gImgs[id-1]
}
