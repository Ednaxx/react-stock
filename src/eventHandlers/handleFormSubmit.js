import { v4 as uuid } from 'uuid';

export default function handleFormSubmit({ name, price, amount, category, description, id }) {
    const currentProducts = (localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [];

    const currentDate = new Date();
    
    const newItem = {
        name: name,
        price: price,
        amount: amount,
        category: category,
        description: description,
        updatedAt: currentDate.toString()
    }

    if (id) {
        const previousItem = currentProducts.find(product => product.id == id);
        const filteredArray = currentProducts.filter(product => product.id !== id);

        localStorage.setItem("products", JSON.stringify([...filteredArray, {...newItem, id: previousItem.id, createdAt: previousItem.createdAt}]));
    }
    else {
        localStorage.setItem("products", JSON.stringify([...currentProducts, {...newItem, createdAt: currentDate.toString(), id: uuid()}]));
    }

    alert("Item saved successfully");
}