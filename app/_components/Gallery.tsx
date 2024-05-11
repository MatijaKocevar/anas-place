"use client";

import React, { useEffect, useRef } from "react";
import useInstagramPosts from "../../hooks/useInstagramPosts";
import BlurImage from "../../components/BlurImage";
import Spinner from "../../components/ui/Spinner";

const Gallery = () => {
    const { instagramPosts, loading, isFetchingMore, loadMore } = useInstagramPosts();
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (observerRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && !isFetchingMore) {
                        loadMore();
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(observerRef.current);
            return () => observer.disconnect();
        }
    }, [isFetchingMore, loadMore]);

    if (loading && !isFetchingMore) {
        return (
            <div className="flex justify-start flex-col h-screen-9 max-h-screen-9 overflow-hidden">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {instagramPosts.map((post, index) => (
                    <div key={post.id} className="bg-white shadow rounded-2xl overflow-hidden">
                        <BlurImage
                            image={{
                                href: post.permalink,
                                imageSrc: post.media_url,
                                priority: index < 1,
                            }}
                        />
                        <div className="p-4">
                            <p className="text-sm">{post.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div ref={observerRef} className="text-center py-8">
                {isFetchingMore && <Spinner />}
            </div>
        </>
    );
};

export default Gallery;
