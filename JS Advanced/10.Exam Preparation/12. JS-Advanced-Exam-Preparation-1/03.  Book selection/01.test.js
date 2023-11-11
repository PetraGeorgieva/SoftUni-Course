const chai = require("chai");

const bookSelection = require('./bookSelection');

describe('isGenreSuitable',function () {
  it('should work with age <=12 Thriller', function (){
     chai.expect(bookSelection.isGenreSuitable('Thriller',12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
  });
  it('should work with age <= 12 Horror  ', function (){
    chai.expect(bookSelection.isGenreSuitable('Horror',11)).to.equal(`Books with Horror genre are not suitable for kids at 11 age`);
    
 });
  it('should work with age > 12 and any string genre ', function (){
    chai.expect(bookSelection.isGenreSuitable('Commedia',18)).to.equal(`Those books are suitable`);

 });
 it('should work with age <= 12 and any string genre ', function (){
    chai.expect(bookSelection.isGenreSuitable('Commedia',11)).to.equal(`Those books are suitable`);
    
 });
 it('should work with age > 12 and any string genre ', function (){
    chai.expect(bookSelection.isGenreSuitable('Horror',18)).to.equal(`Those books are suitable`);

 });
 it('should work with age > 12 and any string genre ', function (){
    chai.expect(bookSelection.isGenreSuitable('Thriller',18)).to.equal(`Those books are suitable`);

 });
    
});

describe('isItAffordable', function () {
    it('should trow error if input are not numbers',function (){
        chai.expect(()=> bookSelection.isItAffordable('5','3').to.throw("Invalid input"))
    });
    it('should trow error if second input is not numbers',function (){
        chai.expect(()=> bookSelection.isItAffordable(5,'3').to.throw("Invalid input"))
    });
    it('should trow error if first input is not numbers',function (){
        chai.expect(()=> bookSelection.isItAffordable('5',5).to.throw("Invalid input"))
    });
    it('should work with numbers input ',function (){
        chai.expect( bookSelection.isItAffordable(100,5)).to.equal("You don't have enough money")
    });
    it('should work with numbers input ',function (){
        chai.expect( bookSelection.isItAffordable(2,5)).to.equal("Book bought. You have 3$ left")
    });
    
    
})
describe('suitableTitles',function () {
    it('this first input is not array ',function () {
        chai.expect(()=> bookSelection.suitableTitles('2','Horror').to.throw('Invalid input'))
    })
    it('this second input is not string ',function () {
        chai.expect(()=> bookSelection.suitableTitles([{'Horror': "The Black" }],5).to.throw('Invalid input'))
    })
    
    it('should work with array and string input ',function () {
        chai.expect(bookSelection.suitableTitles([{title: "The Da Vinci Code", genre: "Thriller"}],'Thriller')).to.eql([ 'The Da Vinci Code' ])
    })
    it('should work with array and string input ',function () {
        chai.expect(bookSelection.suitableTitles([{title: "The Mask", genre: "Horror"}],'Horror')).to.eql([ 'The Mask' ])
    })
    it('should work with array and string input ',function () {
        chai.expect(bookSelection.suitableTitles([{title: "The Mask", genre: "Horror"}],'Commedia')).to.eql([])
    })
    
})