import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
    return (
        <>
            <div className="h-screen">
                <UserButton afterSignOutUrl="/" />
            </div>
        </>
    );
}
