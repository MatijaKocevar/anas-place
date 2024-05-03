import { useEffect, useState } from "react";
import { InstagramPost } from "../app/api/gallery/get-instagram-posts/route";

const useInstagramPosts = () => {
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInstagramPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch("/api/gallery/get-instagram-posts");

                if (!response.ok) throw new Error("Failed to fetch instagram posts");

                const posts = (await response.json()) as InstagramPost[];
                setInstagramPosts(posts);
            } catch (error) {
                console.error("Failed to fetch instagram posts", error);
            } finally {
                setLoading(false);
            }
        };

        fetchInstagramPosts();
    }, []);

    return { instagramPosts, loading };
};

export default useInstagramPosts;
