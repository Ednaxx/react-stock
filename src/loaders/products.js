export default function productsLoader() {
    return ((localStorage.getItem("products")) ? JSON.parse(localStorage.getItem("products")) : []);
}