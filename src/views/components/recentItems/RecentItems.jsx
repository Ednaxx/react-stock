export default function RecentItems() {
    return (
        <div className="bottom-card">
            <div className="bottom-card-header">
                <span className="list-item-name">Recent Items</span>
                <span className="list-item-action">Actions</span>
            </div>
            {/* temporary element */}
            <div className="list-item">
                <span className="list-item-name">1Lorem ipsum dolor sit.</span>
                <span className="list-item-action"><button>View</button></span>
            </div>

        </div>
    )
}