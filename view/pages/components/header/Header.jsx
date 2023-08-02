import { Link } from "react-router-dom";
import "./header.css"

export default function Header() {
    return (
        <header>
            <h1>REACT STOCK</h1>
            <div>
                <Link to={"/"}>Start</Link>
                <span>|</span>
                <Link to={"/stock-items"}>Items</Link>
            </div>
        </header>
    )
}