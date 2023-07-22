import { v4 as uuid } from 'uuid';

export default function handleFormSubmit({ name, price, amount, category, description, urlItemId }) {
    const currentProducts = (localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : [];

    const currentDate = new Date();
    const currentDateString = `${currentDate.getDay()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    const newItem = {
        name: name,
        price: price,
        amount: amount,
        category: category,
        description: description,
        updatedAt: currentDateString
    }

    console.log(newItem)

    if (urlItemId) {
        const previousItem = currentProducts.find(product => product.id == urlItemId);
        const filteredArray = currentProducts.filter(product => product.id == urlItemId);

        localStorage.setItem("products", JSON.stringify([...filteredArray, {...newItem, id: previousItem.id, createdAt: previousItem.createdAt}]));
    }
    else {
        localStorage.setItem("products", JSON.stringify([...currentProducts, {...newItem, createdAt: currentDateString, id: uuid()}]));
    }
}