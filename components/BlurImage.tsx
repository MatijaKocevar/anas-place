import React, { useState } from "react";
import Image from "next/legacy/image";
import { cn } from "../lib/utils";
import Spinner from "./ui/Spinner";

type Image = {
    href: string;
    imageSrc: string;
    priority: boolean;
};

const BlurImage = ({ image }: { image: Image }) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <a href={image.href} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    alt=""
                    src={image.imageSrc}
                    layout="fill"
                    priority={image.priority}
                    placeholder="blur"
                    objectFit="cover"
                    blurDataURL={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8XA8AAisBVHpjGM0AAAAASUVORK5CYII="
                    }
                    className={cn(
                        "duration-700 ease-in-out group-hover:opacity-75",
                        isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                    )}
                    onLoad={() => setLoading(false)}
                />
                {isLoading && <Spinner />}
            </div>
        </a>
    );
};

export default BlurImage;
