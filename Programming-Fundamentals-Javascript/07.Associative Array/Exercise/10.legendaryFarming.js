function legendaryFarming(string) {
    let array = string.split(' ').map(el => el.toLowerCase());
    let items = new Map()
    let junkItems = new Map()
    let legendary = {
        'shards' : "Shadowmourne",
        'fragments' : "Valanyr" ,
        'motes' : "Dragonwrath" 
    };
    items.set("shards", 0);
    items.set("fragments", 0);
    items.set("motes", 0);

    for (let i = 0; i < array.length; i+=2) {
       let quantity = Number([array[i]]);
       let item = array[i+1];
       if(item == 'shards' || item == 'fragments' || item == 'motes'){
          let currentQuantity = items.get(item)
          let newQuantity = quantity+currentQuantity
          items.set(item,newQuantity)
          if(newQuantity >= 250){
            let boh = items.get(item)
            items.set(item,boh-250)
            let itemsArr = [...items.entries()].sort((a,b)=> {
                return b[1] -(a[1]) || a[0].localeCompare(b[0]);
            });
            let junkItemsArr = [...junkItems.entries()].sort((a,b)=>  a[0].localeCompare(b[0]))
            console.log(`${legendary[item]} obtained!`)
            for (let line of itemsArr) {
                console.log(`${line[0]}: ${line[1]}`)
            }
            for (let lines of junkItemsArr) {
                console.log(`${lines[0]}: ${lines[1]}`)
            }
           return;
          }
       }else {
        if(!junkItems.has(item)){
            junkItems.set(item,quantity)
        }else{
            let currentQuantity = junkItems.get(item)
            junkItems.set(item,quantity+currentQuantity)
            }
       }
        
    }
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')