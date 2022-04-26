export const InArray = (identifer, items) => {
    var count = items.length;
    for(var i=0; i<count; i++) {
        if(items[i].id === identifer) return true;
    }
    return false;
}