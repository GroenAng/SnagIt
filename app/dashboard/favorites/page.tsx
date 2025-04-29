import dynamic from "next/dynamic";

const Motion = dynamic(() => import("framer-motion").then((mod) => mod.motion), { ssr: false });

export default function DashboardPage() {
    return (
        <div>
            <Motion.div>
                <h1>Dashboard</h1>
            </Motion.div>
        </div>
    );
}