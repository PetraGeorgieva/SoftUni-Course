function pointsValidation([x1, y1, x2, y2]) {
    let x = 0;
    let y = 0;
    let validationx1andy1 = validation([x1,y1,x,y]);
    let validationx2andy2 = validation([x2,y2,x,y]);
    let pointsValidations = validation([x1, y1, x2, y2]);
    let array = [validationx1andy1,validationx2andy2,pointsValidations]
    return array.join('\n');
   function validation ([x1,y1,x2,y2]){
    if (Number.isInteger(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)))) {
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
    } else {
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
    }
}
}
console.log(pointsValidation([2,1,1,1]));