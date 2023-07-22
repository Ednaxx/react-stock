export default function productLoader({ params }) {
    console.log("fetching product");

    if (!localStorage.getItem("products")) return {id: 123, name: "item", description: "aaa", createdAt: "00/00/00",
     updatedAt: "00/00/00", category: "aaa", inStock: 10, price: 123}

    const product = JSON.parse(localStorage.getItem("products")).find(product => product.id === params.productId);
    return product
}