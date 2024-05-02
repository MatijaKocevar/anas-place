"use client";

import React from "react";
import Image from "next/image";
import useInstagramPosts from "../../hooks/useInstagramPosts";
import Spinner from "../../components/ui/Spinner";

const Gallery = () => {
    const { instagramPosts, loading } = useInstagramPosts();

    if (loading) {
        return (
            <div className="flex justify-start flex-col h-screen-9 max-h-screen-9 overflow-hidden">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {instagramPosts.map((post) => (
                    <div key={post.id} className="bg-white shadow rounded overflow-hidden">
                        <Image
                            width={500}
                            height={500}
                            src={post.media_url}
                            alt={post.caption}
                            className="w-full h-auto"
                        />
                        <div className="p-4">
                            <p className="text-sm">{post.caption}</p>
                            <a
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                            >
                                View on Instagram
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
