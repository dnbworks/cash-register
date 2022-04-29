export const InArray = (identifer, items) => {
    var count = items.length;
    for(var i=0; i<count; i++) {
        if(items[i].id === identifer) return true;
    }
    return false;
}

export const PriceHelper = (price) => {
    if(price.indexOf(".") > -1){
       let myArray = price.split(".");
       if(myArray[1].length === 1){
            return myArray[0] + ".0" + myArray[1];
       } else {
            return price;
       }
    } else {
        return price + ".00";
    }
}