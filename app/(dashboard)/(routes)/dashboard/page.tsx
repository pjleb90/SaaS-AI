import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
        <div className="text-6xl text-green-400">
            <p>Dashboard Page (Protected)</p>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}

export default DashboardPage;
