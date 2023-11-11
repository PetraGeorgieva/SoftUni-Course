class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal (peak, altitude){
    let string = ''
    if(this.goals.hasOwnProperty(peak)){
      string = `${peak} has already been added to your goals`

    }else{
        this.goals[peak] = altitude;
        string = `You have successfully added a new goal - ${peak}`
    }
    return string;
  }
  hike (peak, time, difficultyLevel){
    let result = ''
    if(!this.goals.hasOwnProperty(peak)){
        throw new Error(`${peak} is not in your current goals`)
      }
      if(this.resources == 0){
        throw new Error("You don't have enough resources to start the hike")
      }
      let difference = this.resources - (time*10);
      if(difference < 0 ){
        result = "You don't have enough resources to complete the hike"
      }else{
        this.listOfHikes.push({peak,time,difficultyLevel})
        this.resources = difference
        result= `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
      }

      return result;
  }
  rest(time){
    let result = ''
    this.resources = Number(this.resources) + (time*10)

    if(Number(this.resources) >= 100){
        this.resources = 100;
        result = `Your resources are fully recharged. Time for hiking!`
    }else{
        result= `You have rested for ${time} hours and gained ${time*10}% resources`
    }
    return result;
  }
  showRecord (criteria){
     let  result = '' 
     let bestHiker = []
     let bestTime = 0
     let isTrue = true;
     if(this.listOfHikes.length == 0){
        result = `${this.username} has not done any hiking yet`
     }else{
        if(criteria === 'all'){
                isTrue = false
        }else {
            this.listOfHikes.forEach(el=>{
               if (el['difficultyLevel'] == criteria){
                isTrue = false
                 if  (bestTime < Number(el['time'])){
                       bestTime = el['time']
                       let peaks = el['peak']
                       let times = el['time']
                       bestHiker = [peaks,times];
                 }
                }
            });
        }
        
     }
     if(isTrue == false){
        result = `${this.username} has not done any ${criteria} hiking yet`
     }
     if(criteria != 'all'){
        if(bestHiker.length >0){
            result = `${this.username}'s best ${criteria} hike is ${bestHiker[0]} peak, for ${bestHiker[1]} hours`
        }else{
            result = `${this.username} has not done any ${criteria} hiking yet`
        } 
     }else{
         result = "All hiking records:"
         this.listOfHikes.forEach(el=>{
            result+=`\n${this.username} hiked ${el["peak"]} for ${el["time"]} hours`

         })
     }
     return result;
  }

}
const user = new SmartHike('Vili');
console.log(user.addGoal('Musala', 2925));
console.log(user.hike('Musala', 8, 'hard'));
console.log(user.rest(4));
console.log(user.rest(5));
