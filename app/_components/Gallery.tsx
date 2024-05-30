"use client";

import React, { useEffect, useRef, useState } from "react";
import BlurImage from "../../components/BlurImage";
import { getInitialInstagramPosts, getMoreInstagramPosts } from "../../actions/instagram.actions";
import Spinner from "../../components/ui/Spinner";

export type InstagramPost = {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
};

const Gallery = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>([]);
    const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

    const observerRef = useRef<HTMLDivElement | null>(null);

    const fetchInitialInstagramPosts = async () => {
        try {
            const response = await getInitialInstagramPosts();

            setNextPageUrl(response.paging.next);
            setInstagramPosts(response.data);
        } catch (error) {
            console.error("Failed to fetch Instagram posts", error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchMoreInstagramPosts = async (url: string) => {
        try {
            const response = await getMoreInstagramPosts(url);

            setNextPageUrl(response.paging.next);
            setInstagramPosts((prevPosts) => {
                const existingPostIds = new Set(prevPosts.map((p) => p.id));
                const filteredNewPosts = response.data.filter(
                    (post) => !existingPostIds.has(post.id)
                );
                return [...prevPosts, ...filteredNewPosts];
            });
        } catch (error) {
            console.error("Failed to fetch more Instagram posts", error);
        }
    };

    useEffect(() => {
        fetchInitialInstagramPosts();
    }, []);

    useEffect(() => {
        if (observerRef.current) {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && !isLoading && nextPageUrl) {
                        fetchMoreInstagramPosts(nextPageUrl);
                    }
                },
                { threshold: 0.1 }
            );

            observer.observe(observerRef.current);
            return () => observer.disconnect();
        }
    }, [nextPageUrl, isLoading]);

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
                {isLoading && <Spinner />}
            </div>
        </>
    );
};

export default Gallery;
