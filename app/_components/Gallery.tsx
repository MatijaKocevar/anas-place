"use client";

import React, { useEffect, useRef } from "react";
import useInstagramPosts from "../../hooks/useInstagramPosts";
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 text-center">
                Gallery
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {instagramPosts.map((post, index) => (
                    <div
                        key={post.id + index}
                        className="bg-white shadow rounded-2xl overflow-hidden"
                    >
                        <div className="relative w-full aspect-w-1 aspect-h-1">
                            <img
                                loading="lazy"
                                src={post.media_url}
                                alt={post.caption}
                                className="absolute inset-0 object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-sm">{post.caption}</p>
                            {/* <a
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                            >
                                View on Instagram
                            </a> */}
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
