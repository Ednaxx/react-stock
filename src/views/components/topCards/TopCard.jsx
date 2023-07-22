import "./TopCard.css";

export default function TopCard({ title, value }) {
    return (
        <div className="top-card">
            <p>{title}</p>
            <h1>{value}</h1>
        </div>
    )
}