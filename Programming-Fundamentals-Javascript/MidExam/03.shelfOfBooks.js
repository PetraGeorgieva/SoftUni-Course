function shelfOfBooks(array) {
let shelf = array.shift().split('&');
let i = 0;
while(array[i] != 'Done'){
    let [command,index,name] = array[i].split(' | ');
    switch (command) {
        case 'Add Book':
            if (shelf.indexOf(index) < 0){
                shelf.unshift(index)
            }
            break;
        case 'Take Book':
            if (shelf.indexOf(index) >= 0){
                shelf.splice(shelf.indexOf(index),1);
            }
            break;
        case 'Swap Books':
            if (shelf.indexOf(index) >= 0 && shelf.indexOf(name) >= 0){
                let firstBook = shelf[shelf.indexOf(index)];
                let seocndbook = shelf.splice(shelf.indexOf(name),1,firstBook);
                shelf.splice(shelf.indexOf(index),1,seocndbook[0]);

            }
            break;
        case 'Insert Book':
            if (shelf.indexOf(index) < 0){
                shelf.push(index)
            }
            break;
        case 'Check Book':
            index = Number(index);
            if (index >= 0 && index < shelf.length){
                console.log(`${shelf[index]}`)
            }
            break;
    } 
    i++
   
}
 console.log(shelf.join(', '))
}
shelfOfBooks(["Don Quixote&The Great Gatsby&Moby Dick",

"Add Book | Ulysses",

"Take Book | Don Quixote",

"Insert Book | Alice's Adventures in Wonderland", "Done"])
