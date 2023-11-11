class Triathlon {
   constructor(competitionName){
    this.competitionName = competitionName
    this.paricipants = {};
    this.listOfFinalists = [];
   }
   addParticipant (participantName, participantGender){
    if(this.paricipants.hasOwnProperty(participantName)){
        return `${participantName} has already been added to the list`
    }else{
        this.paricipants[participantName] = participantGender
        return `A new participant has been added - ${participantName}`
    }
   }
   completeness (participantName, condition){
    if(this.paricipants.hasOwnProperty(participantName)){
        if(condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }else if(condition >= 30 && condition < 90){
            let completedCount = Math.trunc(condition/30)
            return `${participantName} could only complete ${completedCount} of the disciplines`
        }else{
            let gender = this.paricipants[participantName]
            this.listOfFinalists.push({[participantName]:gender})

            return `Congratulations, ${participantName} finished the whole competition`;
        }
    }else{
        throw new Error(`${participantName} is not in the current participants list`)
        
    }
   }
   rewarding (participantName){
for (let el  of this.listOfFinalists) {
    if(el.hasOwnProperty(participantName)){
        return `${participantName} was rewarded with a trophy for his performance`
    }
}
return `${participantName} is not in the current finalists list`


}
showRecord (criteria){
    if(this.listOfFinalists.length <= 0){
        return `There are no finalists in this competition`
    }
    if(criteria == 'all'){
        let result = `List of all ${this.competitionName} finalists:`
        this.listOfFinalists.forEach(el=>{
            let name =  Object.keys(el)
           result+=`\n${name[0]}`
        })
        return result;
    }else if (criteria == 'male' || criteria == 'female'){
        let isTRUE = false
        let finalist = [];
        for (let el of this.listOfFinalists) {
            let array =  Object.entries(el)
            for (let [name,gender] of array) {
                if( gender === criteria){
                    isTRUE = true;
                    finalist.push(name)
                }
            }
        }
        
        if(isTRUE === false){
            return `There are no ${criteria}'s that finished the competition`
        }else{
            return `${finalist[0]} is the first ${criteria} that finished the ${this.competitionName} triathlon`
        }
    }

}
  
}
const contest = new Triathlon("Dynamos");

console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.showRecord("all"));
