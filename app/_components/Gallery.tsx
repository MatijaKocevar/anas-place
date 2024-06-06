"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useCallback, useState } from "react";
import BlurImage from "../../components/BlurImage";
import Spinner from "../../components/ui/Spinner";
import Popup from "../../components/Popup";
import { fetchInstagramPosts, InstagramResponseData } from "../../actions/instagram";
import { debounce } from "../../lib/utils";

export type InstagramPost = {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
};

const fetchPosts = async ({ pageParam }: { pageParam: string }) => {
    return await fetchInstagramPosts(pageParam);
};

const Gallery = ({ initialData }: { initialData: InstagramResponseData }) => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["instagramPosts"],
        queryFn: fetchPosts,
        initialPageParam: "",
        getNextPageParam: (lastPage) => lastPage.paging.next ?? undefined,
        initialData: {
            pageParams: [""],
            pages: [initialData],
        },
    });

    const observerRef = useRef<HTMLDivElement | null>(null);
    const galleryContainerRef = useRef<HTMLDivElement | null>(null);

    const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

    useEffect(() => {
        if (observerRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
                        fetchNextPage();
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(observerRef.current);
            return () => observer.disconnect();
        }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    const debouncedSaveScrollPosition = debounce(() => {
        if (galleryContainerRef.current) {
            localStorage.setItem(
                "scrollPosition",
                galleryContainerRef.current.scrollTop.toString()
            );
        }
    }, 200);

    const saveScrollPosition = useCallback(debouncedSaveScrollPosition, [
        debouncedSaveScrollPosition,
    ]);

    useEffect(() => {
        const galleryContainer = galleryContainerRef.current;

        galleryContainer?.addEventListener("scroll", saveScrollPosition);

        return () => {
            galleryContainer?.removeEventListener("scroll", saveScrollPosition);
        };
    }, [saveScrollPosition]);

    useEffect(() => {
        const scrollPosition = localStorage.getItem("scrollPosition");
        const galleryContainer = galleryContainerRef.current;

        if (scrollPosition && galleryContainer) {
            galleryContainer.scrollTo(0, parseInt(scrollPosition));
        }
    }, []);

    return (
        <>
            <div
                ref={galleryContainerRef}
                className="w-full h-full overflow-y-auto hidden-scrollbar"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                    {data?.pages.map((page) =>
                        page.data.map((post: InstagramPost) => (
                            <div
                                key={post.id}
                                className="bg-white shadow rounded-2xl overflow-hidden"
                                onClick={() => setSelectedPost(post)}
                            >
                                <BlurImage
                                    image={{
                                        href: post.permalink,
                                        imageSrc: post.media_url,
                                        priority: false,
                                    }}
                                />
                            </div>
                        ))
                    )}
                </div>
                <div ref={observerRef} className="text-center py-8">
                    {isFetchingNextPage && <Spinner />}
                </div>
            </div>
            {selectedPost && <Popup post={selectedPost} onClose={() => setSelectedPost(null)} />}
        </>
    );
};

export default Gallery;
