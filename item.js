const items = require('./fakeDb')

class Item {
    constructor(name, price){
        this.name= name;
        this.price = price;

        items.push(this);
    }

    static getAllItems() {
        return items
    }

    static edit(name,data){
        let foundItem = Item.getAllItems(name);
        if (foundItem === undefined){
            throw {message: "Item not found", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;
        
        return foundItem;
    }

    static delete(name) {
        let foundIdx = items.findIndex(val => val.name === name);
        if (foundIdx === -1){
            throw {message: "Item not found", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports= Item;