console.log('***** Cart Functions *****');
//1.)
let basket= []; 
const maxItems=5;
//2.)
function isFull() {
    if (basket.length>=maxItems) {
        return true;
    } else {
        return false;
    }
}
//3.)
function addItem(item) {
    if (isFull()){
        console.log("You have no more room!");
        return false;
    } else {
        basket.push(item);
        return true;
    }    
}
//4.)
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!











// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
