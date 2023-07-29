import { v4 as uuid } from 'uuid';

export default class Item {
    constructor({ name, description, amount, price, category, createdAt = null, updatedAt = null, id = null }) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
        this.category = category;
        this.id = (id === null) ? uuid() : id;
        this.createdAt = (createdAt === null) ? new Date() : createdAt;
        this.updatedAt = (updatedAt === null) ? new Date() : updatedAt;
    }

    validate() {
        const validName = typeof this.name === "string";
        const validDescription = typeof this.description === "string";
        const validQuantity = typeof this.quantity === "number" && Number.isInteger(this.quantity);
        const validPrice = typeof this.price === "number";
        const validCategory = typeof this.category === "string";

        if (!( validName && validDescription && validQuantity && validPrice && validCategory )) {
            throw new Error("Invalid item!");
        }
    }
}