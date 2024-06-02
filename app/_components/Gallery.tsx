"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import BlurImage from "../../components/BlurImage";
import { useEffect, useRef } from "react";
import Spinner from "../../components/ui/Spinner";
import { fetchInstagramPosts, InstagramResponseData } from "../actions/instagram";

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

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {data?.pages.map((page, pageIndex) =>
                    page.data.map((post: InstagramPost, index: number) => (
                        <div key={post.id} className="bg-white shadow rounded-2xl overflow-hidden">
                            <BlurImage
                                image={{
                                    href: post.permalink,
                                    imageSrc: post.media_url,
                                    priority: pageIndex === 0 && index < 1,
                                }}
                            />
                            <div className="p-4">
                                <p className="text-sm">{post.caption}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div ref={observerRef} className="text-center py-8">
                {isFetchingNextPage && <Spinner />}
            </div>
        </>
    );
};

export default Gallery;
