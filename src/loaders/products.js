export default function productsLoader() {
    console.log("fetching productS");
    console.log(localStorage.getItem("products"))
    return ((localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : []);
}