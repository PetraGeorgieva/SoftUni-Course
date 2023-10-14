function tickets(arr,sortingCriterion) {
    class Ticket {
        constructor(destination,price,status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }
    let array = []
    for (let el of arr) {
        let [destination,price,status] = el.split('|');
        price = Number(price);

       array.push(new Ticket(destination,price,status))
    }

    let sortedArr;
    if(sortingCriterion === 'destination'){
      sortedArr = newArr.sort((a,b)=> a.destination > b.destination ? 1 : (a.destination < b.destination) ? -1 : 0)
    }else if(sortingCriterion === 'price'){
        sortedArr = array.sort((a,b )=> a.price > b.price ? 1 : (a.price < b.price) ? -1 : 0)
    }else if (sortingCriterion === 'status'){
        sortedArr = array.sort((a,b)=> a.status > b.status ? 1 : (a.status < b.status) ? -1 : 0)
    }
   return sortedArr;
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|92.99|sold',
'Boston|126.20|departed'],
'destination'
)