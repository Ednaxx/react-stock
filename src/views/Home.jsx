import RecentItems from "./components/recentItems/RecentItems";
import TopCard from "./components/topCards/TopCard";
import "./styles/home.css";
import RunningOut from "./components/runningOut/RunningOut";
import { useLoaderData, useParams } from "react-router-dom";

export default function Home() {
    const products = useLoaderData();

    return (
        <div id="dashboard-main-container">
            <h1>Dashboard</h1>
            <div id="top-cards">
                <TopCard title={'Item diversity'} value={0} />
                <TopCard title={'Total Inventory'} value={0} />
                <TopCard title={'Recent Items'} value={0} />
                <TopCard title={'Running Out'} value={0} />
            </div>
            <div id="bottom-cards">
                <RecentItems />
                <RunningOut />
            </div>
        </div>
    )
}