export default function productLoader({ params }) {

    if (!localStorage.getItem("products")) {
        // put error
        return {id: 123, name: "item", description: "aaa", createdAt: "00/00/00",
        updatedAt: "00/00/00", category: "aaa", inStock: 10, price: 123}
    }

    return JSON.parse(localStorage.getItem("products")).find(product => product.id === params.itemId);
}