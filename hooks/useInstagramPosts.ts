import { useEffect, useState } from "react";
import { InstagramPost } from "../app/api/gallery/get-instagram-posts/route";

const useInstagramPosts = () => {
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    const fetchInstagramPosts = async (url?: string) => {
        setIsFetchingMore(true);
        try {
            const response = await fetch(
                url
                    ? `/api/gallery/get-instagram-posts?nextPageUrl=${encodeURIComponent(url)}`
                    : "/api/gallery/get-instagram-posts"
            );

            if (!response.ok) throw new Error("Failed to fetch Instagram posts");

            const postsData = await response.json();

            setInstagramPosts((prevPosts) => {
                const existingPostIds = new Set(prevPosts.map((p) => p.id));
                const filteredNewPosts = (postsData.data as InstagramPost[]).filter(
                    (post) => !existingPostIds.has(post.id)
                );
                return [...prevPosts, ...filteredNewPosts];
            });

            setNextPageUrl(postsData.paging?.next || null);
        } catch (error) {
            console.error("Failed to fetch Instagram posts", error);
        } finally {
            setLoading(false);
            setIsFetchingMore(false);
        }
    };

    useEffect(() => {
        fetchInstagramPosts(); // Initial fetch
    }, []);

    const loadMore = () => {
        if (nextPageUrl) {
            fetchInstagramPosts(nextPageUrl);
        }
    };

    return { instagramPosts, loading, isFetchingMore, loadMore };
};

export default useInstagramPosts;
