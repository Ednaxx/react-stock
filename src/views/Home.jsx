import RecentItems from "./components/recentItems/RecentItems";
import TopCard from "./components/topCards/TopCard";
import "./styles/home.css";
import RunningOut from "./components/runningOut/RunningOut";
import { useLoaderData } from "react-router-dom";

export default function Home() {
    const products = useLoaderData();

    // Products with < 10 in storage

    const runningOutItems = products.filter((product) => product.amount < 10);

    // Products created in < 10 days

    const today = new Date();
    const recentItems = products.filter(product => {
        const createdAt = new Date(product.createdAt);
        const dateDiff = today.getTime() - createdAt.getTime();
        return (dateDiff / 1000 * 3600 * 24);
    })

    return (
        <div id="dashboard-main-container">
            <h1>Dashboard</h1>
            <div id="top-cards">
                <TopCard title={'Item diversity'} value={products.length} />
                <TopCard title={'Total Inventory'} value={products.reduce((accumulator, product) => accumulator + Number(product.amount), 0)} />
                <TopCard title={'Recent Items'} value={recentItems.length} />
                <TopCard title={'Running Out'} value={runningOutItems.length} />
            </div>
            <div id="bottom-cards">
                <RecentItems recentItems={recentItems}/>
                <RunningOut itemsList={runningOutItems}/>
            </div>
        </div>
    )
}