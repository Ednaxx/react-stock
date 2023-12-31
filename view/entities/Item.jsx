export default class Item {
    constructor({ name, description, amount, price, category, createdAt = null, updatedAt = null}) {
        this.name = name;
        this.description = description;
        this.amount = amount;
        this.price = price;
        this.category = category;
        this.createdAt = (createdAt === null) ? new Date() : createdAt;
        this.updatedAt = (updatedAt === null) ? new Date() : updatedAt;
    }

    validate() {
        const validName = typeof this.name === "string";
        const validDescription = typeof this.description === "string";
        const validAmount = typeof this.amount === "number" && Number.isInteger(this.amount);
        const validPrice = typeof this.price === "number";
        const validCategory = typeof this.category === "string";

        if (!( validName && validDescription && validAmount && validPrice && validCategory )) {
            throw new Error("Invalid item!");
        }
    }
}