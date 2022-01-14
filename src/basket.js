const menu = require("./inventory.js");

class Basket {
    constructor() {
        this.basketArray = [];
        this.basketSize = 4;
        this.priceArray = []
        this.discountedArray = []
        this.totalPriceArray = []
    }
    addToBasket(sku) {
         for(let i = 0; i < menu.length; i++){
            if (menu[i].sku === sku && this.basketArray.length < this.basketSize){
            this.basketArray.push(menu[i])  
         }
        }
        return "WARNING - Basket is full"
    }
    removeItems(sku) {
        for (var i = 0; i < this.basketArray.length; i++) {
            if (this.basketArray[i].sku === sku) {
                this.basketArray.splice(i, 1);
            }
        }
        return "That item isn't in your basket"
        }
    checkPrice(sku){
        for(let i = 0; i < menu.length; i++){
        if (menu[i].sku === sku){
        // console.log("sku", menu[i])
        this.priceArray.push(menu[i].price)  
    }
        }
        }
    totalBasketPrice(){
        let totalPrice = 0
        for (let i = 0; i < this.priceArray.length; i++) {
            totalPrice += this.priceArray[i]
        }
    return Number(totalPrice.toFixed(2));
 }

    discountedPrice(){
        const count = this.basketArray.reduce((tally, sku) => {
            tally[sku] = (tally[sku] || 0) + 1;
            return tally;
        } , {})
        console.log("Tally Count", count)
        return count
    }
}

module.exports = Basket;
