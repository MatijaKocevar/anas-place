/* eslint-disable */
import { Profile } from "@/app/_components/Profile";

interface PageProps {
    params: Promise<{
        userId: string;
    }>;
}

export default async function UserProfilePage({ params }: PageProps) {
    return <Profile params={await params} />;
}
