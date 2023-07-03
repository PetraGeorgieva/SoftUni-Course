function hardWord(array) {
 let string = array[0].split(' ')
 let wordsArr = array[1];
 for(let i = 0; i < string.length; i++){
    if(string[i].includes('_')){
        let subString =  string[i].substring(0,string[i].lastIndexOf('_')+1)
        let lastSubString = string[i].substring(string[i].lastIndexOf('_')+1,)
        for (let el of wordsArr) {
           if(subString.length === el.length){
            el+=lastSubString
            string[i] = el
           }
        }
    }
 }

console.log(string.join(' '))
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)