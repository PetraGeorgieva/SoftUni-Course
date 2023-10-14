class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static distance(p1,p2){
       let distanceX  = p1.x - p2.x;
       let distanceY = p1.y - p2.y;
       let distance = Math.sqrt(distanceX ** 2 + distanceY**2);
       return distance;
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));
