function gladiatorInventory(params) {
    let firstElement = params.shift()
    let inventory = firstElement.split(' ');
    let repair = 0
   for (let i = 0; i < params.length; i++) {
     let [command, equipment] = params[i].split(' ');
      if(command === "Buy"){
        let index = inventory.indexOf(equipment)
         if (index < 0 ){
            inventory.push(equipment)
         } else{
             continue;
         }
      } else if (command === "Trash"){
        let index = inventory.indexOf(equipment)
         if (index < 0 ){
            continue;
         } else{
            inventory.splice(index,1);
         }
      } else if (command === 'Repair'){
        let index = inventory.indexOf(equipment)
       
        if (index < 0 ){
            continue;
         } else{
           repair = inventory.splice(index,1); 
           inventory.push(repair[0])
         }
      } else if (command === 'Upgrade'){
        let upgrade = equipment.split('-');
        let index = inventory.indexOf(upgrade[0])
        if (index < 0 ){
            continue;
         } else{
            let newElement = upgrade.join(':')
           upgrade = inventory.splice(index+1,0,newElement);
         }
      }
   }
     console.log(inventory.join(' '))
}
gladiatorInventory(["SWORD Shield Spear",
    "Trash Bow",
    "Repair Shield",
   " Upgrade Helmet-V"]);