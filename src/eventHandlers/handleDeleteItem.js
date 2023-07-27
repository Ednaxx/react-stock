export default function handleDeleteItem(itemId, products, setProducts) {
    const confirmation = confirm("Are you sure you want to delete it?");

    if (!confirmation) return false;

    if (arguments.length === 3) {
        const previousStorage = JSON.parse(localStorage.getItem("products"));
        const newStorage = JSON.stringify(previousStorage.filter(product => product.id !== itemId));

        localStorage.setItem("products", newStorage);

        setProducts(products.filter(product => product.id !== itemId));
    }
    if (arguments.length === 1) {
        const previousStorage = JSON.parse(localStorage.getItem("products"));
        const newStorage = JSON.stringify(previousStorage.filter(product => product.id !== itemId));

        localStorage.setItem("products", newStorage);

        return true
    }
}