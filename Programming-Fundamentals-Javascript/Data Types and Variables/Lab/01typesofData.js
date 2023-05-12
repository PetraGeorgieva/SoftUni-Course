function types (dataType){
    let type = typeof dataType
     console.log(typeof dataType);
     if ( typeof dataType === "string" || typeof dataType === "number"){
        console.log(dataType)
     } else {
        console.log("Parameter is not suitable for printing")
     }
     
}
types(undefined)