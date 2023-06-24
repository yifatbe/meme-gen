'use strict'
var gSearchBy = ''

var gImgs = [
    {
        id: 1, 
        url: 'meme-imgs/1.jpg', 
        keywords: ['funny', 'politic', 'men']
    },
    {
        id: 2, 
        url: 'meme-imgs/2.jpg', 
        keywords: ['pets']
    },
    {
        id: 3, 
        url: 'meme-imgs/3.jpg', 
        keywords: ['pets', 'baby']
    },
    {
        id: 4, 
        url: 'meme-imgs/4.jpg', 
        keywords: ['pets']
    },
    {
        id: 5, 
        url: 'meme-imgs/5.jpg', 
        keywords: ['baby']
    },
    {
        id: 6, 
        url: 'meme-imgs/6.jpg', 
        keywords: ['movies','men']
    },
    {
        id: 7, 
        url: 'meme-imgs/7.jpg', 
        keywords: ['baby', 'funny']
    },
    {
        id: 8, 
        url: 'meme-imgs/8.jpg', 
        keywords: ['movies', 'funny', 'men']
    },
    {
        id: 9, 
        url: 'meme-imgs/9.jpg', 
        keywords: ['baby', 'funny']
    },
    {
        id: 10, 
        url: 'meme-imgs/10.jpg', 
        keywords: ['politic', 'funny','men']
    },
    {
        id: 11, 
        url: 'meme-imgs/11.jpg', 
        keywords: ['movies', 'men']
    },
    {
        id: 12, 
        url: 'meme-imgs/12.jpg', 
        keywords: ['movies', 'men']
    },
    {
        id: 13, 
        url: 'meme-imgs/13.jpg', 
        keywords: ['movies', 'men']
    },
    {
        id: 14, 
        url: 'meme-imgs/14.jpg', 
        keywords: ['movies', 'men']
    },
    {
        id: 15, 
        url: 'meme-imgs/15.jpg', 
        keywords: ['movies', 'men']
    },
    {
        id: 16, 
        url: 'meme-imgs/16.jpg', 
        keywords: ['movies', 'funny', 'men']
    },
    {
        id: 17, 
        url: 'meme-imgs/17.jpg', 
        keywords: ['politic', 'men']
    },
    {
        id: 18, 
        url: 'meme-imgs/18.jpg', 
        keywords: ['movies']
    },

] 

var gKeywordSearchCountMap = {'funny': 0,'pet': 0, 'movie': 0, 'men':0, 'politic':0, 'baby':0}

function getImgs(){

    var imgs = gImgs.filter(img => img.keywords.join().includes(gSearchBy))
    return imgs    
}
 

function getImg(id){
    return gImgs[id-1]
}

function setSearch(search) {
    gSearchBy = search
    gKeywordSearchCountMap[search]++

    return gSearchBy
}

function getKeywordSearchCountMap(){
    return gKeywordSearchCountMap
}
