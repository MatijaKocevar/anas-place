import React, { useState } from "react";
import Image from "next/legacy/image";

type Post = {
    id: string;
    caption: string;
    media_url: string;
    permalink: string;
};

type PopupProps = {
    post: Post | null;
    onClose: () => void;
};

const Popup = ({ post, onClose }: PopupProps) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    if (!post) return null;

    const handleLoadingComplete = (img: HTMLImageElement) => {
        setDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    };

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={handleOverlayClick}
        >
            <div className="bg-white rounded-lg relative max-w-3xl w-full mx-4 overflow-hidden">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-black text-2xl bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center z-10"
                >
                    &times;
                </button>
                <div className="relative w-full">
                    <div
                        className="relative"
                        style={{
                            width: dimensions.width > 0 ? dimensions.width : "100%",
                            height: dimensions.height > 0 ? dimensions.height : "auto",
                        }}
                    >
                        <Image
                            unoptimized
                            alt={post.caption}
                            src={post.media_url}
                            layout="responsive"
                            width={dimensions.width || 1}
                            height={dimensions.height || 1}
                            objectFit="cover"
                            className="rounded-t-lg"
                            onLoadingComplete={() => handleLoadingComplete}
                        />
                    </div>
                    <div className="p-4 bg-white text-center">
                        <p className="text-gray-700">{post.caption}</p>
                        <a
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-2 text-blue-500 underline"
                        >
                            Poglej na Instagramu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
