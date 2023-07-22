import "./styles/editItem.css";

export default function EditItem() {
    const categoryOptions = ["Option1", "Option2", "Option3"];

    return (
        <form>
            <div id="inputs-frame">
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div className="inputs">
                    <label htmlFor="price">Price</label>
                    <input type="number" min={0} id="price" name="price"/>
                </div>
                <div className="inputs">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" min={0} id="amount" name="amount"/>
                </div>
                <div className="inputs">
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">{categoryOptions.map(category => (<option value={category} key={category}>{category}</option>))}</select>
                </div>
            </div>
            <div className="inputs">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" rows={10}></textarea>
            </div>
            <button type="submit">Save</button>
        </form>
    )
}