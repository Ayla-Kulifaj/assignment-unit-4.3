console.log('***** Cart Functions *****');
//1.) create a gloabal variable &set it to an empty array
//stretch--create a global const named maxItems & set it to 5
let basket= [ ]; 
const maxItems=5;
console.log('We have a basket that can only  contain 5 items!')
//2.)create a fuction called addItem that-1.takes an iput parameter for a string item
//&&.add the new item to the gloabal array basket-&&- return true showing an item was added
//stretch--adding in the isFull function to prevent more than maxItems being addede to the basket
//-&-return true if an item was added to the arra y& false if it didnt have any more room.


function addItem(item) {
    if (isFull()){
        return false;
    } else {
        basket.push(item);
        return true;
    }    
}

addItem("Peeps");
addItem("KitKat");
addItem("M&M");
addItem("TicTac");
console.log("I have in my basket:  ",basket);
addItem("Snickers");
console.log("I now should also have snickers in my basket:  ",basket);
addItem("popcorn");
console.log("Nothing should have changed with what was is in my basket" ,basket)

//3.) create a function called listItems that loops over the items in the basket array..&&
//console.log each individual item on a new line.
function listItems(){
    for (const item of basket){
        console.log(item);
    }
}
console.log("This should print everything on its own line:");
listItems();

//emptied my basket :( --->
//4.) create a function called empty that should rest the basket to an empty array
//function empty(){
//   basket.splice(0,basket.length);
//} this can be achevied with this method or:
function empty(){
    while (basket.length>0){
        basket.pop();
    }
}
empty();
console.log(("I should have an empty basket [] now:"),basket)

//5.) stretchhhhh goal--create a function called isFull that prevents more than maxItems 
//being added to the basket.
function isFull(){
    if (basket.length >= maxItems){
        return true;
    } else {
        return false;
    }
}

console.log("Is the basket Full?",isFull());
addItem("Peeps");
addItem("KitKat");
addItem("M&M");
addItem("TicTac");
addItem("Snickers");
console.log("I got sad I emptied my basket so I put all my items I previously had back in it!:)");
console.log("Is the basket Full?",isFull());

//.)6.) create a function called removeItem. Them use array built in functions to 
//--find the index point of the matching item in the basket
//--to remove the matching item in the basket
//--return the item removed or null if it was not found
function removeItem(item) {
    const index= basket.indexOf(item);
    if (index !== -1) {
        const removeItem=basket.splice(index,1);
        return removeItem[0];
    } else {
        return null;
    }
}
console.log("I want to give my Brothers my Peeps & Snickers!");
console.log("What's in my basket now?");
removeItem("Snickers");
removeItem("Peeps");
listItems();

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
